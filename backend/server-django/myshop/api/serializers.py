from django.db.models import fields
from rest_framework import serializers
from shop.models import Product, Category
from django.contrib.auth import authenticate


class ProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = Product
		fields = ["id", "name", "image", "description", "price", "category"]
		# fields = "__all__"



class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    def validate(self, attrs):
        user = authenticate(username=attrs['username'], 
        password=attrs['password'])
        if not user:
            raise serializers.ValidationError('Incorrect username or password.')
        if not user.is_active:
            raise serializers.ValidationError('User is disabled.')
        return {'user': user}