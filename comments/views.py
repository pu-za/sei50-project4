from django.shortcuts import render
from rest_framework.views import APIView
from .serializers.common import CommentSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticated
from emojis.models import Emoji
from .models import Comment

class Comments(APIView):
  
  # get all comments from single emoji
  def get(self, request, emojiId):
    emoji = Emoji.objects.get(pk=emojiId)
    comments = Comment.objects.all()
    send = comments.filter(emoji=emoji.id)
    
    serializer = CommentSerializer(send, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
  
  def post(self, request, emojiId):
    request.data['user'] = request.user.id
    emoji = Emoji.objects.get(pk=emojiId)
    comment = CommentSerializer(data=request.data)
    if comment.is_valid():
      comment.save(emoji=emoji)
      
      return Response(comment.data, status=status.HTTP_201_CREATED)
    return Response(comment.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class CommentDetail(APIView):
  permission = (IsAuthenticated, )
  def get_one(self, pk):
    try:
      return Comment.objects.get(pk=pk)
    except Comment.DoesNotExist:
      raise NotFound()

  def is_comment_user(self, comment, user):
        if comment.user.id != user.id:
            raise PermissionDenied()

  def get(self, request, pk, emojiId):
    comment = self.get_one(pk=pk)
    if str(comment.emoji.id) != str(emojiId):
        return Response({'msg': 'Emoji not found.'}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    serializer = CommentSerializer(comment)
    return Response(serializer.data, status=status.HTTP_200_OK)

  def put(self, request, pk, emojiId):
    request.data['user'] = request.user.id
    comment = self.get_one(pk=pk)
    if str(comment.emoji.id) != str(emojiId):
        return Response({'msg': 'Emoji not found.'}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    serializer = CommentSerializer(comment, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    
  def delete(self, request, pk, emojiId):
      request.data['user'] = request.user.id
      comment = self.get_one(pk=pk)
      if str(comment.emoji.id) != str(emojiId):
        return Response({'msg': 'Emoji not found.'}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
      self.is_comment_user(comment, request.user)
      comment.delete()
      return Response(status=status.HTTP_204_NO_CONTENT)
