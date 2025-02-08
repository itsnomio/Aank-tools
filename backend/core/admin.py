from django.contrib import admin
from django.contrib.auth.models import User, Group
from django.utils import timezone
from .models import *

admin.site.unregister(User)
admin.site.unregister(Group)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'price', 'featured_image_preview', 'created_at']
    list_display_links = ['title']
    search_fields = ['title', 'content']
    list_filter = ['created_at']
    readonly_fields = ['featured_image_preview', 'created_at']
    
    fieldsets = (
        ('Ерөнхий мэдээлэл', {
            'fields': ('title', 'content')
        }),
        ('Зураг', {
            'fields': ('featured_image', 'price', 'featured_image_preview')
        }),
        ('Үүсгэсэн огноо', {
            'fields': ('created_at',)
        }),
    )