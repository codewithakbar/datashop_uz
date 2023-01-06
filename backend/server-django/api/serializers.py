from rest_framework import serializers
from projects.models import Project
from rest_framework.response import Response
from users.models import Profile
from rest_framework import status
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = '__all__'

