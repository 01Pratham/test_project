from django.db import models

# Create your models here.
class car(models.Model):
    car_name = models.CharField(max_length=100)
    speed = models.IntegerField(default=50)

class User(models.Model):
    name = models.CharField(max_length=20,default="arshad")
    empid = models.IntegerField(default=11)
    email = models.EmailField(default="arshad@gmail.com")
    date = models.DateField(default="20/01/2024")
    Password = models.CharField(default="arshad",max_length=20)
    cpassword = models.CharField(default="arshad",max_length=20)

    class Meta:
        db_table = 'user'   