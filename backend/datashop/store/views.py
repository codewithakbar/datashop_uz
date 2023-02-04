import random
from datetime import datetime


from django.shortcuts import render, get_object_or_404

from .models import Product, Category, FooterPayBrands, ProductImage
from .recommender import Recommender

from django.db.models import Q

def search(request):

    query = request.GET.get('query')
    products = Product.objects.filter(Q(title__icontains=query) | Q(description__icontains=query))

    footer_brand_pay_images = FooterPayBrands.objects.all()

    context = {
        'query': query,
        'products': products,
        'pay_images_footer': footer_brand_pay_images,

    }

    return render(request, 'search.html', context)


def product_detail(request, category_slug, slug):
    product = get_object_or_404(Product, slug=slug)

    footer_brand_pay_images = FooterPayBrands.objects.all()

    photos = ProductImage.objects.filter(product=product)

    product.num_visits = product.num_visits + 1
    product.last_visit = datetime.now()
    product.save()

    # r = Recommender()
    # recommended_products = r.suggest_products_for([product], 4)

    related_products = list(product.category.products.exclude(id=product.id))
    if len(related_products) >= 3:
        related_products = random.sample(related_products, 3)

    context = {
        'photos': photos,
        'product': product,
        'pay_images_footer': footer_brand_pay_images,
        # 'recommended_products': recommended_products,
        'related_products': related_products,

    }

    return render(request, 'product_detail.html', context)


def category_detail(request, slug):
    category = get_object_or_404(Category, slug=slug)
    products = category.products.all()

    footer_brand_pay_images = FooterPayBrands.objects.all()

    context = {
        'category': category,
        'products': products,
        'pay_images_footer': footer_brand_pay_images,
    }

    return render(request, 'category_detail.html', context)


def product_list(request):
    products = Product.objects.all()
    category = Category.objects.all()

    footer_brand_pay_images = FooterPayBrands.objects.all()

    context = {
        'products': products,
        'category': category,
        'pay_images_footer': footer_brand_pay_images,

    }

    return render(request, 'product_list.html', context)


def product_list_colm(request):
    products = Product.objects.all()
    category = Category.objects.all()
    is_featured_products = Product.objects.filter(is_featured=True)

    footer_brand_pay_images = FooterPayBrands.objects.all()

    context = {
        'products': products,
        'category': category,
        'is_featured_products': is_featured_products,
        'pay_images_footer': footer_brand_pay_images,

    }

    return render(request, 'product_colm.html', context)


def sub_category_detail(request, slug):
    category = get_object_or_404(Category, slug=slug)
    products = category.products.all()

    footer_brand_pay_images = FooterPayBrands.objects.all()

    context = {
        'category': category,
        'products': products,
        'pay_images_footer': footer_brand_pay_images,
    }

    return render(request, 'sub_cat_list.html', context)