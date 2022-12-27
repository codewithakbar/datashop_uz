from django.urls import path
from .views import ProductTodo, DetailProduct

urlpatterns = [
    path('<int:pk>/', DetailProduct.as_view()),
    path('', ProductTodo.as_view()),

]

