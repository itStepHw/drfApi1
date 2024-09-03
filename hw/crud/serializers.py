from rest_framework import serializers
from .models import *


class LibrarySerialize(serializers.ModelSerializer):
    class Meta:
        model = Library
        fields = '__all__'
        read_only_fields = (id,)