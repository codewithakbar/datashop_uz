from django.shortcuts import render, get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.response import Response
from shop.models import Product, Category
from .serializers import ProductSerializer
from rest_framework import serializers
from rest_framework import status
  

@api_view(['GET'])
def ApiOverview(request):
	api_urls = {
		'all_items': '/',
		'Search by Category': '/?category=category_name',
		'Search by Subcategory': '/?subcategory=category_name',
		'Add': '/create',
		'Update': '/update/pk',
		'Delete': '/item/pk/delete'
	}

	return Response(api_urls)


@api_view(['POST'])
def add_items(request):
    item = ProductSerializer(data=request.data)
  
    # validating for already existing data
    if Product.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')
  
    if item.is_valid():
        item.save()
        return Response(item.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def view_items(request):
    # checking for the parameters from the URL
    items = Product.objects.all()

    name = request.query_params.get('name', None)
    if name is not None:
        items = items.filter(name__icontains=name)

    serializer = ProductSerializer(items, many=True)
    # if there is something in items else raise error
    if items:
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def update_items(request, pk):
	item = Product.objects.get(pk=pk)
	data = ProductSerializer(instance=item, data=request.data)

	if data.is_valid():
		data.save()
		return Response(data.data)
	else:
		return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['DELETE'])
def delete_items(request, pk):
	item = get_object_or_404(Product, pk=pk)
	item.delete()
	return Response(status=status.HTTP_202_ACCEPTED)

