from django.http import JsonResponse
from django.views import View
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt
from home.models import User as UserModel
import json

class User(View):
    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request, id= None):
        if id is not None :
            user = UserModel.objects.get(pk=id)
            user_data = serialize('python', [user])[0]['fields']
            data = {"data": user_data,"status_code":200}
        else:
            user = UserModel.objects.all().values()
            data = {"data": list(user),"status_code":200}
        return JsonResponse(data)

    def post(self, request):
        #print(type(user))
        data = {"data": "post","status_code":"data inserted succefully"}
        return JsonResponse(data)

    def put(self, request):
        #print(type(user))
        data = {"data": "put","status_code":200}
        return JsonResponse(data)
    
    def delete(self, request):
        #print(type(user))
        data = {"data": "delete","status_code":200}
        return JsonResponse(data)
    