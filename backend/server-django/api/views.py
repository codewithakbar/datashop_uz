from django.http import JsonResponse

from rest_framework import permissions, viewsets, routers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


from .serializers import (
    UserSerializer, ProductSerializer, CategorySerializer
)

#apps 
from store.models import Product, Category



class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    # router = routers.DefaultRouter()
    # router.register(r'products', ProductViewSet)
    
    router = {
        "GET": "/products",
    }

    return Response(router)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNotes(request):
    user = request.user
    notes = user.note_set.all()
    serializer = UserSerializer(notes, many=True)
    return Response(serializer.data)



@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getProduct(request):
    prod = Product.objects.all()
    serializer = ProductSerializer(prod, many=True)
    return Response(serializer.data)



@api_view(['POST'])
def postProduct(request):

    pass