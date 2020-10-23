from django.db import models

class Emoji(models.Model):
  name = models.CharField(max_length=50)
  category = models.CharField(max_length=50)
  image = models.CharField(max_length=300)
  date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f'{self.name}, part of {self.category}'