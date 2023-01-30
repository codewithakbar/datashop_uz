'''Use this for development'''

from .base import *

ALLOWED_HOSTS += ['127.0.0.1']
DEBUG = False

WSGI_APPLICATION = 'home.wsgi.dev.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
    'https://admin.datashop.uz'
)

# Stripe

STRIPE_PUBLIC_KEY = "config('STRIPE_TEST_PUBLIC_KEY')"
STRIPE_SECRET_KEY = "config('STRIPE_TEST_SECRET_KEY')"
