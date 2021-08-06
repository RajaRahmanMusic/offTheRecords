from rest_framework import serializers
from offTheRecords import models

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Genre
        fields = ['name', 'id']

class InstagramSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Instagram
        fields = '__all__'


class FacebookSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Facebook
        fields = '__all__'


class TwitterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Twitter
        fields = '__all__'


class LinkedInSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.LinkedIn
        fields = '__all__'


class TikTokSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TikTok
        fields = '__all__'


class YouTubeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.YouTube
        fields = '__all__'


class SoundCloudSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SoundCloud
        fields = '__all__'


class BandCampSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.BandCamp
        fields = '__all__'


class SpotifyForArtistsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SpotifyForArtists
        fields = '__all__'


class ArtistSerializer(serializers.ModelSerializer):
    instagram = InstagramSerializer()
    facebook = FacebookSerializer()
    spotifyForArtists = SpotifyForArtistsSerializer()
    twitter = TwitterSerializer()
    linkedin = LinkedInSerializer()
    tiktok = TikTokSerializer()
    youtube = YouTubeSerializer()
    soundCloud = SoundCloudSerializer()
    bandCamp = BandCampSerializer()
    primary_genre = GenreSerializer(required=False)
    secondary_genre = GenreSerializer()
    tertiary_genre = GenreSerializer()
    # date_of_birth = serializers.DateField(format="%m-%d-%Y")
    class Meta:
        model = models.Artist
        fields = ['artist_name', 'legal_name',
                  'email', 'phone_number', 'address',
                  'date_of_birth',
                  'primary_genre', 'secondary_genre', 'tertiary_genre',
                  'website', 'instagram', 'facebook',
                  'linkedin', 'twitter', 'tiktok', 'youtube', 'ascap',
                  'bmi', 'soundExchange', 'mlc', 'spotifyForArtists',
                  'songTrust', 'googleDrive', 'venmo', 'payPal',
                  "manager",
                  'cashapp', 'soundCloud', 'bandCamp', 'id',
                  ]


class ArtistWritableSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Artist
        fields = ['artist_name', 'legal_name',
                  'email', 'phone_number', 'address',
                  'date_of_birth',
                  'primary_genre', 'secondary_genre', 'tertiary_genre',
                  'website', 'instagram', 'facebook',
                  'linkedin', 'twitter', 'tiktok', 'youtube', 'ascap',
                  'bmi', 'soundExchange', 'mlc', 'spotifyForArtists',
                  'songTrust', 'googleDrive', 'venmo', 'payPal',
                  'cashapp', 'soundCloud', 'bandCamp', 'id']


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Item
        fields = '__all__'


class ProjectItemSerializer(serializers.ModelSerializer):
    item = ItemSerializer(read_only=True, required=False)

    class Meta:
        model = models.ProjectItem
        fields = '__all__'



class ProjectSerializer(serializers.ModelSerializer):
    task = ProjectItemSerializer(many=True, read_only=True, source='projectitem_set')
    artist = ArtistSerializer(read_only=True)

    class Meta:
        model = models.Project
        fields = '__all__'

class ProjectWritableSerializer(serializers.Serializer):
    name = serializers.CharField()
    start_date = serializers.DateField()
    num_od = serializers.IntegerField()
    type = serializers.IntegerField()
    num_songs = serializers.IntegerField()
    artist = serializers.IntegerField()
    others = serializers.DictField()
