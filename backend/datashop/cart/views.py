import random
from django.shortcuts import render, get_object_or_404

from .cart import Cart
from store.models import Product, FooterPayBrands



def cart_detail(request):
    cart = Cart(request)
    productsstring = ''

    for item in cart:
        product = item['product']
        b = "{'id': '%s', 'title': '%s', 'price': '%s', 'quantity': '%s', 'total_price': '%s', 'image': '%s',}," % (product.id, product.title, product.price, item['quantity'], item['total_price'], product.image.url)

        productsstring = productsstring + b

    footer_brand_pay_images = FooterPayBrands.objects.all()

    context = {
        'cart': cart,
        'productsstring': productsstring.rstrip(','),
        'pay_images_footer': footer_brand_pay_images,

    }
    return render(request, 'cart.html', context)


# def req_product(request):
#     product = get_object_or_404(Product)

#     related_products = list(product.category.products.exclude(id=product.id))
#     if len(related_products) >= 3:
#         related_products = random.sample(related_products, 3)

#     context = {
#         'req_products': related_products,
#     }

#     return render(request, 'cart.html', context)