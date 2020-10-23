from django.db import models
from jwt_auth.models import User
from emojis.models import Emoji

class Like(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  date = models.DateTimeField(auto_now_add=True)
  emoji = models.ForeignKey(Emoji, default=False, on_delete=models.CASCADE)