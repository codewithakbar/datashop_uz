from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status

from .models import Product
from api.serializers import ProductSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all()

        name = request.query_params.get('name', None)
        if name is not None:
            products = products.filter(name__icontains=name)

        category = request.query_params.get('category', None)
        if category is not None:
            products = products.filter(category__icontains=category)

        product_serializer = ProductSerializer(products, many=True)
        return JsonResponse(product_serializer.data, safe=False)

    elif request.method == 'POST':
        product_data = JSONParser().parse(request)
        product_serializer = ProductSerializer(data=product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JsonResponse(product_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = Product.objects.all().delete()
        return JsonResponse({'message': '{} Products were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

    
@api_view(['GET', 'PUT', 'DELETE'])
def product_details(request, pk):
    try: 
        product = Product.objects.get(pk=pk) 
    except Product.DoesNotExist: 
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        tutorial_serializer = ProductSerializer(product) 
        return JsonResponse(tutorial_serializer.data) 
 
    elif request.method == 'PUT': 
        product_data = JSONParser().parse(request) 
        product_serializer = ProductSerializer(product, data=product_data) 
        if product_serializer.is_valid(): 
            product_serializer.save() 
            return JsonResponse(product_serializer.data) 
        return JsonResponse(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        product.delete() 
        return JsonResponse({'message': 'Tutorial was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def product_list_available(request):
    products = Product.objects.filter(available=True)
        
    if request.method == 'GET': 
        products_serializer = ProductSerializer(products, many=True)
        return JsonResponse(products_serializer.data, safe=False)