from django.urls import path
from .views import Likes, LikeDetail



urlpatterns = [
  path('<int:emojiId>/', Likes.as_view()),
  path('delete/<int:pk>/', LikeDetail.as_view())
]