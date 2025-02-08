# Generated by Django 5.1.6 on 2025-02-08 09:42

import django_ckeditor_5.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Бүтээгдэхүүний нэр')),
                ('content', django_ckeditor_5.fields.CKEditor5Field(verbose_name='Агуулга')),
                ('price', models.PositiveIntegerField(default=0, verbose_name='Үнэ')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Үүсгэсэн огноо')),
                ('featured_image', models.ImageField(null=True, upload_to='products/image/%Y/%m/%d/', verbose_name='Нүүр зураг')),
            ],
            options={
                'verbose_name': 'Бүтээгдэхүүн',
                'verbose_name_plural': 'Бүтээгдэхүүн',
                'ordering': ['-created_at'],
            },
        ),
    ]
