from django.urls import path
from . import views

urlpatterns = [
	path('', views.ApiOverview, name='home'),
    path('addbook/', views.add_book),
    path('create/', views.add_book, name='add-products'),
    path('all/', views.view_products, name='view_products'),
    path('update/<int:pk>/', views.update_products, name='update_products'),
    path('item/<int:pk>/delete/', views.delete_products, name='delete_products'),
]
