from django.urls import path

from .views import EmojiList, EmojiDetail

urlpatterns = [
    path('', EmojiList.as_view()),
    path('<int:pk>/', EmojiDetail.as_view())
]