from django.urls import path
from .views import Comments, CommentDetail

urlpatterns = [
  #path('', Comments.as_view()),
  path('<int:emojiId>/', Comments.as_view()),
  path('delete/<int:pk>/', CommentDetail.as_view())
]


