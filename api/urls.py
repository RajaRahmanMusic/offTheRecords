from django.urls import include, path
from rest_framework import routers
from api import views

router = routers.DefaultRouter()

router.register(r'genre', views.GenreViewSet)
router.register(r'artist', views.ArtistViewSet)
router.register(r'instagram', views.InstagramViewSet)

urlpatterns = [
    path('', include(router.urls)),

]
