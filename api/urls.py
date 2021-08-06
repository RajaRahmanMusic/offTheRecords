from django.urls import include, path
from rest_framework import routers
from api import views

router = routers.DefaultRouter()

router.register(r'genre', views.GenreViewSet)
router.register(r'artist', views.ArtistViewSet, basename="artist")
router.register(r'instagram', views.InstagramViewSet)
router.register(r'facebook', views.FacebookViewSet)
router.register(r'twitter', views.TwitterViewSet)
router.register(r'linkedIn', views.LinkedInViewSet)
router.register(r'tikTok', views.TikTokViewSet)
router.register(r'youTube', views.YouTubeViewSet)
router.register(r'soundCloud', views.SoundCloudViewSet)
router.register(r'bandCamp', views.BandCampViewSet)
router.register(r'spotifyForArtists', views.SpotifyForArtistsViewSet)
#router.register(r'item', views.ItemViewSet)
router.register(r'project', views.ProjectViewSet, basename='project')
router.register(r'projectItem', views.ProjectItemViewSet)

urlpatterns = [
    path('', include(router.urls)),

]
