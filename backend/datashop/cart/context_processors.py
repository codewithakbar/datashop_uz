import random

from .cart import Cart
from store.models import Product

def cart(request):
    return {'cart': Cart(request)}
    

def req_product(request):
    product = Product.objects.all()

    related_products = list(product.category.products.exclude(id=product.id))
    if len(related_products) >= 3:
        related_products = random.sample(related_products, 3)

    return {'req_products': related_products}


