from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Emoji
from .serializers.common import EmojiSerializer

class EmojiList(APIView):

  def get(self, request):
    emojis = Emoji.objects.all()
    serializer = EmojiSerializer(emojis, many=True)
    
    return Response(serializer.data, status=status.HTTP_200_OK)
  def post(self, request):
    newEmoji = EmojiSerializer(data=request.data)
    if newEmoji.is_valid():
      newEmoji.save()
      return Response(newEmoji.data, status=status.HTTP_200_OK)
    return Response(newEmoji.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class EmojiDetail(APIView):
  def get_one(self, pk):
    try:
      return Emoji.objects.get(pk=pk)
    except Emoji.DoesNotExist:
      return NotFound()
  
  def get(self, request, pk):
    emoji = self.get_one(pk)
    serializer = EmojiSerializer(emoji)
    return Response(serializer.data, status=status.HTTP_200_OK)

  