from django.urls import path
from .views import *

urlpatterns = [
    path('getCreate/', ListViewApi.as_view(), name='getCreate'),
    path('updateDelete/<int:pk>/', LibraryRetrieveUpdateDestroyAPIView.as_view(), name='updateDelete'),

]