from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from offTheRecords import models
from api import serializers
#
# TODO ADD AUTHENTICATIOn and check ownership

class CsrfExcept(SessionAuthentication):
    def enforce_csrf(self, request):
        return

class GenreViewSet(viewsets.ModelViewSet):
    queryset = models.Genre.objects.all()
    serializer_class = serializers.GenreSerializer


class ArtistViewSet(viewsets.ModelViewSet):
    queryset = models.Artist.objects.all()
    # serializer_class = serializers.ArtistSerializer
    authentication_classes = (CsrfExcept,)

    def get_serializer_class(self):
        print(self.request.method)
        if self.request.method == "POST" or self.request.method == "PUT":
            return serializers.ArtistWritableSerializer

        return serializers.ArtistSerializer

class InstagramViewSet(viewsets.ModelViewSet):
    queryset = models.Instagram.objects.all()
    serializer_class = serializers.InstagramSerializer
    authentication_classes = (CsrfExcept, )