from django.urls import path

from .views import EmojiList

urlpatterns = [
    path('', EmojiList.as_view()),
    
]