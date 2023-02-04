from django.shortcuts import render
from store.models import Product
from store.models import BannerHome, TanilganBrendlar, FooterPayBrands


# def index(request):
#     return render(request, 'index.html')


def frontpage(request):
    products = Product.objects.all()
    is_featured_products = Product.objects.filter(is_featured=True)
    banner_image = BannerHome.objects.all()
    brand_image = TanilganBrendlar.objects.all()

    popular_products = Product.objects.all().order_by('-num_visits')[0:4]
    recently_viewed_products = Product.objects.all().order_by('-last_visit')[0:4]

    footer_brand_pay_images = FooterPayBrands.objects.all()

    context = {
        'products': products,
        'is_featured_products': is_featured_products,
        'pay_images_footer': footer_brand_pay_images,
        'banner_image': banner_image,
        'brand_image': brand_image,
        'popular_products': popular_products,
        'recently_viewed_products': recently_viewed_products,

    }

    return render(request, 'core/frontpage.html', context)


def contact(request):
    return render(request, 'contact.html')


def about(request):
    return render(request, 'about.html')


def login(request):
    return render(request, 'login.html')


def auth(request):
    return render(request, 'auth.html')
