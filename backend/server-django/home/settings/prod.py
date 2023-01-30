'''Use this for production'''

from .base import *

DEBUG = False
ALLOWED_HOSTS += ['.datashop.uz']
WSGI_APPLICATION = 'home.wsgi.prod.application'

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': 'db_name',
#         'USER': 'db_user',
#         'PASSWORD': 'db_password',
#         'HOST': 'localhost',
#         'PORT': '',
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

CORS_ALLOW_ALL_ORIGINS = True  
CORS_ALLOW_CREDENTIALS = True
# CORS_ALLOWED_ORIGINS = ["*"]


CSRF_TRUSTED_ORIGINS = [
    'https://api.datashop.uz',
    'https://datashop.uz',
    'https://localhost:3000'
]

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'


STRIPE_PUBLIC_KEY = "config('STRIPE_TEST_PUBLIC_KEY')"
STRIPE_SECRET_KEY = "config('STRIPE_TEST_SECRET_KEY')"
