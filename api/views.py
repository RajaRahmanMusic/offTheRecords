from django.db import IntegrityError
from rest_framework import viewsets, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response

from offTheRecords import models
from api import serializers


class CsrfExcept(SessionAuthentication):
    def enforce_csrf(self, request):
        return

class GenreViewSet(viewsets.ModelViewSet):
    queryset = models.Genre.objects.all()
    serializer_class = serializers.GenreSerializer
    authentication_classes = (CsrfExcept,)


class ArtistViewSet(viewsets.ModelViewSet):
    """ All functions override to make writable"""
    # serializer_class = serializers.ArtistSerializer
    authentication_classes = (CsrfExcept,)

    def perform_create(self, serializer):
        return serializer.save(manager=self.request.user)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        serializer = serializers.ArtistSerializer(instance)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        serializer = serializers.ArtistSerializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def get_queryset(self):
        return models.Artist.objects.filter(manager=self.request.user)

    def get_serializer_class(self):
        print(self.request.method)
        if self.request.method == "POST" or self.request.method == "PUT":
            return serializers.ArtistWritableSerializer

        return serializers.ArtistSerializer


class InstagramViewSet(viewsets.ModelViewSet):
    queryset = models.Instagram.objects.all()
    serializer_class = serializers.InstagramSerializer
    authentication_classes = (CsrfExcept, )


class FacebookViewSet(viewsets.ModelViewSet):
    queryset = models.Facebook.objects.all()
    serializer_class = serializers.FacebookSerializer
    authentication_classes = (CsrfExcept, )


class TwitterViewSet(viewsets.ModelViewSet):
    queryset = models.Twitter.objects.all()
    serializer_class = serializers.TwitterSerializer
    authentication_classes = (CsrfExcept, )


class LinkedInViewSet(viewsets.ModelViewSet):
    queryset = models.LinkedIn.objects.all()
    serializer_class = serializers.LinkedInSerializer
    authentication_classes = (CsrfExcept, )


class TikTokViewSet(viewsets.ModelViewSet):
    queryset = models.TikTok.objects.all()
    serializer_class = serializers.TikTokSerializer
    authentication_classes = (CsrfExcept, )


class YouTubeViewSet(viewsets.ModelViewSet):
    queryset = models.YouTube.objects.all()
    serializer_class = serializers.YouTubeSerializer
    authentication_classes = (CsrfExcept, )


class SoundCloudViewSet(viewsets.ModelViewSet):
    queryset = models.SoundCloud.objects.all()
    serializer_class = serializers.SoundCloudSerializer
    authentication_classes = (CsrfExcept, )


class BandCampViewSet(viewsets.ModelViewSet):
    queryset = models.BandCamp.objects.all()
    serializer_class = serializers.BandCampSerializer
    authentication_classes = (CsrfExcept, )


class SpotifyForArtistsViewSet(viewsets.ModelViewSet):
    queryset = models.SpotifyForArtists.objects.all()
    serializer_class = serializers.SpotifyForArtistsSerializer
    authentication_classes = (CsrfExcept, )


class ItemViewSet(viewsets.ModelViewSet):
    queryset = models.Item.objects.all()
    serializer_class = serializers.ItemSerializer
    authentication_classes = (CsrfExcept, )


class ProjectViewSet(viewsets.ModelViewSet):
    # queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer
    authentication_classes = (CsrfExcept, )

    def create(self, request, *args, **kwargs):
        options = ["Pitching", "Long Form Video Content",
                   "Short Form Video Content", "EPK", "Visualizers"]
        studio = ["Rehearsal", "Rehearsal Buffer", "Studio Session", "Session Buffer"]

        serializer = serializers.ProjectWritableSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        try:
            project = models.Project.objects.create(artist_id = serializer.data['artist'],
                                   name = serializer.data['name'],
                                   start_date = serializer.data['start_date'],
                                   num_od=serializer.data['num_od'],
                                   project_type=serializer.data['type'],
                                   num_songs=serializer.data['num_songs'])
        except IntegrityError:
            return Response({"status": "duplicate name for this artist"})

        for item in models.Item.objects.all():
            if item.name in options:
                if item.name in serializer.data['others'].keys():
                    if serializer.data['others'][item.name]:
                        project.task.add(item)

            else:
                if project.num_od == 0:
                    if item.name in ["Overdubs", "Practice Buffer"]:
                        continue

                if project.project_type == models.Project.STUDIO:
                    if item.name != "In the Box":
                        project.task.add(item)

                else:
                    if item.name not in studio:
                        project.task.add(item)

        return Response({"status": "ok",
                         "id": project.id}, status=status.HTTP_201_CREATED)


    def get_queryset(self):
        artists = models.Artist.objects.filter(manager=self.request.user)
        return models.Project.objects.filter(artist__in=artists)

class ProjectItemViewSet(viewsets.ModelViewSet):
    queryset = models.ProjectItem.objects.all()
    serializer_class = serializers.ProjectItemSerializer
    authentication_classes = (CsrfExcept, )

