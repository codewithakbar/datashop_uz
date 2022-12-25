from rest_framework import serializers
from store.models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['title', 'sotuvfda_mavjud', 'description', 'maxsulot_haqida', 'price', 'image']


