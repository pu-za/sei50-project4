from django.urls import path
from.views import Register, Login, AllUsers

urlpatterns = [
  path('', AllUsers.as_view()),
  path('register/', Register.as_view()),
  path('login/', Login.as_view())
]