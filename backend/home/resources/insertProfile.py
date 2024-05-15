from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from home.models import User
from django import forms
from .forms import UserForm
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
            if data["action"] ==  "insert":
                us = User(name=vname, empid=vempid, email=vemail, date=vdate,Password=vPassword,cpassword=vcpassword)
                us.save()
                msg = "Inserted"
            elif data["action"] ==   "update":
                us = User.objects.get(id=data["id"])
                us.name = vname
                us.empid = vempid
                us.email = vemail
                us.date = vdate
                us.Password = vPassword
                us.cpassword = vcpassword
                us.save()
                msg = "Updated"
                
            data = {"status" : 200, "message" : "User "+msg+" Successfully"}
            validate = UserForm(data)
            if validate.is_valid():
                vname = data['name']
                vempid = data['empid']
                vemail = data['email']
                vdate = data['date']
                vPassword = data['password']
                vcpassword = data['cpassword']
                if data["action"] ==     "insert":
                    us = User(name=vname, empid=vempid, email=vemail, date=vdate,Password=vPassword,cpassword=vcpassword)
                    us.save()
                    msg = "Inserted"
                elif data["action"] ==   "update":
                    us = User.objects.get(id=data["id"])
                    us.name = vname
                    us.empid = vempid
                    us.email = vemail
                    us.date = vdate
                    us.Password = vPassword
                    us.cpassword = vcpassword
                    us.save()
                    msg = "Updated"
                    
                data = {"status" : 200, "message" : "User "+msg+" Successfully"}
            else:
                data = {"status" : 400, "message" : validate.errors}
        except json.JSONDecodeError:
            data = {"status" : 400, "message" : "Error while Inserting User"}
        return JsonResponse(data)