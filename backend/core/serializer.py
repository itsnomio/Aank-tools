from rest_framework import serializers, viewsets
from rest_framework.pagination import PageNumberPagination
from .models import *

class ProductPageNumberPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = 'page_size'
    max_page_size = 12

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('-created_at')
    pagination_class = ProductPageNumberPagination

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ProductDetailSerializer
        return ProductSerializer

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'price']

class ProductDetailSerializer(serializers.ModelSerializer):
    featured_image_preview = serializers.SerializerMethodField()
    
    class Meta:
        model = Product
        fields = ['id', 'title', 'featured_image', 'featured_image_preview', 'content', 'price', 'created_at']

    def get_featured_image_preview(self, obj):
        return obj.featured_image_preview_url()
