from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status

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