from django.urls import path
from .views import UserDetailAPI,RegisterUserAPIView
from rest_framework_simplejwt.views import (
        TokenObtainPairView,
        TokenRefreshView,
)
from api.views import MyObtainTokenPairView, RegisterView



urlpatterns = [
    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path("get-details",UserDetailAPI.as_view()),
    path('register',RegisterUserAPIView.as_view()),

]

