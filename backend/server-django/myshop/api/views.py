import json

from django.shortcuts import render, get_object_or_404

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from shop.models import Product, Category
from .serializers import ProductSerializer
from rest_framework import serializers
from rest_framework import status

from rest_framework.parsers import JSONParser, MultiPartParser, FormParser

from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse


  

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


# @api_view(['POST'])
# @csrf_exempt
# @permission_classes([IsAuthenticated])
# def add_products(request):
#     item = ProductSerializer(data=request.data)
  
#     # validating for already existing data
#     if Product.objects.filter(**request.data).exists():
#         raise serializers.ValidationError('This data already exists')
  
#     if item.is_valid():
#         item.save()
#         return Response(item.data)
#     else:
#         return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(["POST"])
@csrf_exempt
@permission_classes([IsAuthenticated])
def add_book(request):
    # payload = json.loads(request.body)
    payload = FormParser().parse(request)
    # user = request.user
    try:
        # author = Author.objects.get(id=payload["author"])
        product = Product.objects.create(
            name=payload["name"],
            description=payload["description"],
            price=payload['price'],
            image=payload["image"],
            category=payload["category"],
        )

        serializer = ProductSerializer(product)
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_201_CREATED)
    except ObjectDoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND)
    except Exception:
        return JsonResponse({'error': 'Something terrible went wrong'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def view_products(request):
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


@api_view(['PUT'])
def update_products(request, pk):
	item = Product.objects.get(pk=pk)
	data = ProductSerializer(instance=item, data=request.data)

	if data.is_valid():
		data.save()
		return Response(data.data)
	else:
		return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['DELETE'])
def delete_products(request, pk):
	item = get_object_or_404(Product, pk=pk)
	item.delete()
	return Response(status=status.HTTP_202_ACCEPTED)

