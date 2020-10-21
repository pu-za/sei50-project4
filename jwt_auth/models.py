from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  
  email = models.CharField(max_length=50, unique=True)
  name = models.CharField(max_length=50)
  image = models.CharField(max_length=300)
  date = models.DateTimeField(auto_now_add=True)