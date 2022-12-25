from django.shortcuts import render
from rest_framework import generics
from store.models import Product
from .serializers import ProductSerializer


class ProductTodo(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class DetailProduct(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductTodo


def index(request):
    return render(request, "index.html")
