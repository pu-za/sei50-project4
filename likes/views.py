from django.shortcuts import render
from rest_framework.views import APIView
from .serializers.common import LikeSerializer
from emojis.serializers.common import EmojiSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticated
from emojis.models import Emoji
from .models import Like

class Likes(APIView):

  # get all likes from single emoji
  def get(self, request, emojiId):
    emoji = Emoji.objects.get(pk=emojiId)
    likes = Like.objects.all()
    send = likes.filter(emoji=emoji.id)
    
    serializer = LikeSerializer(send, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

  def post(self, request, emojiId):
    request.data['user'] = request.user.id
    emoji = Emoji.objects.get(pk=emojiId)
    like = LikeSerializer(data=request.data)
    if like.is_valid():
      like.save(emoji=emoji)
      
      return Response(like.data, status=status.HTTP_201_CREATED)
    return Response(like.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class LikeDetail(APIView):
  permission = (IsAuthenticated, )
  def get_one(self, pk):
    try:
      return Like.objects.get(pk=pk)
    except Like.DoesNotExist:
      raise NotFound()

  def is_like_user(self, like , user):
      if like.user.id != user.id:
        raise PermissionDenied()

  def delete(self, request, pk, emojiId):
      request.data['user'] = request.user.id
      like = self.get_one(pk=pk)
      

      if str(like.emoji.id) != str(emojiId):
        return Response({'msg': 'Emoji not found.'}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
      self.is_like_user(like, request.user)
      like.delete()
      return Response(status=status.HTTP_204_NO_CONTENT)
