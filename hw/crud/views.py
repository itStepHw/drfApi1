from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView

from .models import Library
from .serializers import *


class ListViewApi(ListCreateAPIView):
    queryset = Library.objects.all()
    serializer_class = LibrarySerialize


class LibraryRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Library.objects.all()
    serializer_class = LibrarySerialize
