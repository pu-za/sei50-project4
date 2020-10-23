from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied

from .models import Emoji
from .serializers.common import EmojiSerializer

class EmojiList(APIView):
  # get all emojis from db
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
    emoji = self.get_one(pk=pk)
    serializer = EmojiSerializer(emoji)
    return Response(serializer.data, status=status.HTTP_200_OK)

  def is_emoji_user(self, emoji, user):
    if emoji.user.id != user.id:
      raise PermissionDenied()

  def put(self, request, pk):
    request.data['user'] = request.user.id
    emoji = self.get_one(pk=pk)
    self.is_emoji_user(emoji, request.user)

    serializer = EmojiSerializer(emoji, data=request.data)

    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    
  def delete(self, request, pk):
    request.data['user'] = request.user.id
    emoji = self.get_one(pk=pk)

    self.is_emoji_user(emoji, request.user)
    emoji.delete()

    return Response(status=status.HTTP_204_NO_CONTENT)