from django.db.models import fields
from rest_framework import serializers
from shop.models import Product, Category

class ProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = Product
		# fields = ("category", "image", "price", "available", "translations")
		fields = "__all__"