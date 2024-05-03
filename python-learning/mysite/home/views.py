from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from django.http import HttpResponse
# Create your views here.
def home (request):
    peoples = [
       { 'name' : 'Devendra jadhav' , 'age': 24},
       { 'name' : 'Arshad Maniyar' , 'age': 26},
       { 'name' : 'Mukund Navale' , 'age': 30},
    ]
    for people in peoples:
         print(people)
    return render(request, "index.html", context= {'peoples': peoples})
    #return HttpResponse ("This is not the same page which you have seen earlier")
def another_route(request):
    #print("*" * 20)
    return HttpResponse ("This is not the same page which you have seen earlier")

def userreg (request):  
    return render(request, "userreg.html", {})

def insertuser(request):
    if request.method == 'POST':
        vname = request.POST['name']
        vempid = request.POST['empid']
        vemail = request.POST['email']
        vdate = request.POST['date']
        vPassword = request.POST['Password']
        vcpassword = request.POST['cpassword']
        us = User(name=vname, empid=vempid, email=vemail, date=vdate,Password=vPassword,cpassword=vcpassword)
        us.save()
        return viewuser(request)  # Call the viewuser function
    else:
        return render(request, "insertuser.html")

def viewuser(request):
    user = User.objects.all().values()
    #print(type(user))
    data = {"data": list(user),"status_code":200}
    #return JsonResponse(data)
    return render(request, "viewuser.html", context= {'peoples': user})

def deleteprofile(request,id):
    if (id):
        user = User.objects.get(id=id)
        user.delete()
        return viewuser(request)
    else:
        return render(request, "insertuser.html")
        