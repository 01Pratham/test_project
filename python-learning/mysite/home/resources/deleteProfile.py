from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from home.models import User
import json

class deleteProfile(View):
    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request):
        user = User.objects.all().values()
        data = {"data": list(user), "status_code": 200}
        return JsonResponse(data)

    def post(self, request):
        data = json.loads(request.body)
        user = User.objects.create(**data)
        data = {"data": user.id, "status_code": 201}
        return JsonResponse(data)

    def put(self, request):
        data = json.loads(request.body)
        user_id = data.get('id')
        user = User.objects.get(pk=user_id)
        user.__dict__.update(**data)
        user.save()
        data = {"data": user.id, "status_code": 200}
        return JsonResponse(data)
    
    def delete(self, request, id):
        try:
            user = User.objects.get(id=id)
            user.delete()
            data = {"data": "User deleted successfully", "status_code": 200}
        except User.DoesNotExist:
            data = {"error": "User not found", "status_code": 404}
        return JsonResponse(data)
