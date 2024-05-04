from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from home.models import User
import json

class LoginView(View):
    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def post(self, request):
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')
            if email and password:
                try:
                    user = User.objects.get(email=email, Password=password)
                    data = {"user_id": user.id ,"is_valid" : True , "status_code": 200, "Name" : user.name}
                except User.DoesNotExist:
                    data = {"error": "Invalid email or password", "status_code": 401}
            else:
                data = {"error": "Email and password are required", "status_code": 400}
        except json.JSONDecodeError:
            data = {"error": "Invalid JSON format", "status_code": 400}
        return JsonResponse(data)
