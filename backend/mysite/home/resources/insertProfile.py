from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from home.models import User
import json

class insertProfile(View):
    @csrf_exempt
    
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)
    
    def post(self, request):
        try:
            data = json.loads(request.body)
            vname = data['name']
            vempid = data['empid']
            vemail = data['email']
            vdate = data['date']
            vPassword = data['password']
            vcpassword = data['cpassword']
            us = User(name=vname, empid=vempid, email=vemail, date=vdate,Password=vPassword,cpassword=vcpassword)
            us.save()
            data = {"status" : 200, "message" : "User Inserted Successfully"}
        except json.JSONDecodeError:
            data = {"status" : 400, "message" : "Error while Inserting User"}
        return JsonResponse(data)