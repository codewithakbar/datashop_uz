# Generated by Django 3.2 on 2023-01-11 12:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='uploted',
            new_name='updated',
        ),
    ]
