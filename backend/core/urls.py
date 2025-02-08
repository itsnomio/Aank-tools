from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter
from .serializer import ProductViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('product/<int:pk>/', ProductDetailView.as_view(), name='product-detail')
]
