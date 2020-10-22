from django.shortcuts import render
from rest_framework.views import APIView
from .serializers.common import CommentSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated

from .models import Comment

class Comments(APIView):
  # test function to get all comments
  def get(self, request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)
  
  def post(self, request):
    request.data['user'] = request.user.id
    comment = CommentSerializer(data=request.data)
    if comment.is_valid():
      comment.save()
      return Response(comment.data, status=status.HTTP_201_CREATED)
    return Response(comment.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class CommentDetail(APIView):
  permission = (IsAuthenticated, )
  def get_one(self, pk):
    try:
      return Comment.objects.get(pk=pk)
    except Comment.DoesNotExist:
      raise NotFound()


