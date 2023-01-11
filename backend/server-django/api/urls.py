from django.urls import path
from django.conf.urls import url 
from . import views
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from store.views import (
    product_list, product_details, product_list_available
)


urlpatterns = [
    
    path('', views.getRoutes),
    path('notes/', views.getNotes),

    # Urls
    url(r'^products$', product_list),
    url(r'^products/(?P<pk>[0-9]+)$', product_details),
    url(r'^products/published$', product_list_available),



    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]