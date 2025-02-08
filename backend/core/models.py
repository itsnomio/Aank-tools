from django.db import models
from django_ckeditor_5.fields import CKEditor5Field
from django.utils.html import mark_safe

class Product(models.Model):
    title = models.CharField(max_length=200, null=False, verbose_name='Бүтээгдэхүүний нэр')
    content = CKEditor5Field('Агуулга', config_name='extends')
    price = models.PositiveIntegerField(default=0, verbose_name='Үнэ')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Үүсгэсэн огноо')
    featured_image = models.ImageField(upload_to='products/image/%Y/%m/%d/', null=True, verbose_name='Нүүр зураг')

    def featured_image_preview(self):  # For Admin Panel
        if self.featured_image:
            return mark_safe(f'<img src="{self.featured_image.url}" width="150" height="100" style="object-fit: cover; border-radius: 4px;" />')
        return "No Image"
    
    def featured_image_preview_url(self):  # For API
        if self.featured_image:
            return self.featured_image.url
        return None

    featured_image_preview.short_description = 'Зураг'

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Бүтээгдэхүүн"
        verbose_name_plural = "Бүтээгдэхүүн"
        ordering = ['-created_at']
