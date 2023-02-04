"""datashop URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings


# # rest api imports
# from reviews.views import ProductViewSet, ImageViewSet
# from rest_framework.routers import DefaultRouter


from cart.views import cart_detail
from core.views import frontpage, contact, about
from store.views import product_detail, category_detail, product_list, product_list_colm, search

from store.api import api_add_to_cart, api_remove_from_cart, api_checkout

# rest routers

# router = DefaultRouter()
# router.register(r'product', ProductViewSet, basename='Product')
# router.register(r'image', ImageViewSet, basename='Image')


urlpatterns = [
    path('', frontpage, name='frontpage'),
    # path('search/', search, name='search'),
    # path('cart/', cart_detail, name='cart'),
    # path('contact/', contact, name='contact'),
    # path('about/', about, name='about'),
    # # path('account/', include('auth.urls')),
    # path('auth/', include('account.urls')),
    # path('yangi-mahsulotlar/', product_list, name='product_list'),
    # path('yangi-mahsulotlar-colm/', product_list_colm, name='product_list_colm'),
    # path('frontpage/', frontpage, name='frontpage'),
    path('admin/', admin.site.urls),

    # API

    path('api/add_to_cart/', api_add_to_cart, name='api_add_to_cart'),
    path('api/remove_from_cart/', api_remove_from_cart, name='api_remove_from_cart'),
    path('api/checkout/', api_checkout, name='api_checkout'),

    # Store

    path('<slug:category_slug>/<slug:slug>/', product_detail, name='product_detail'),
    path('<slug:slug>/', category_detail, name='category_detail'),
    # path('<slug:slug>/', sub_category_detail, name='sub_category_detail'),

    re_path(r'^ckeditor/', include('ckeditor_uploader.urls')), # The CKEditor path

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
