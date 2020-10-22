from django.db import models
from jwt_auth.models import User
from emojis.models import Emoji

class Comment(models.Model):
  text = models.CharField(max_length=500)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  date = models.DateTimeField(auto_now_add=True)
  #emoji = models.ForeignKey(Emoji, on_delete=models.CASCADE)