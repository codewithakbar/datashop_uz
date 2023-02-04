import random

from .models import Category, Product

def menu_categories(request):
    categories = Category.objects.filter(parent=None)
    cat_4 = Category.objects.filter(parent=None)[:4]
    menu_4_8 = Category.objects.filter(parent=None)[4:8]
    four_to_8_12_cat = Category.objects.filter(parent=None)[8:12]

    context = {
        'cat_4': cat_4,
        'menu_categories': categories,
        'menu_4_8': menu_4_8,
        'four_to_8_12_cat': four_to_8_12_cat,
    }

    return context


# def req_product(request):
#     product = Product.objects.all()

#     related_products = list(product.category.products.exclude(id=product.id))
#     if len(related_products) >= 3:
#         related_products = random.sample(related_products, 3)

#     return {'req_products': related_products}