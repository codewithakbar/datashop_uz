from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from projects.models import Project

from .serializers import ProjectSerializer

from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer,RegisterSerializer
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework import generics



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProjects(request):

    projects = Project.objects.all()
    serialize = ProjectSerializer(projects, many=True)
    return Response(serialize.data)


@api_view(['GET'])
def getRoutes(request):

    routes = [
        {'GET' : 'api/projects/'},
        {'POST' : 'api/users/token'},
    ]
    return Response(routes)



class UserDetailAPI(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)

    def get(self,request,*args,**kwargs):
        user = User.objects.get(id=request.user.id)
        serializer = UserSerializer(user)
        return Response(serializer.data)


#Class based view to register user
class RegisterUserAPIView(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer



