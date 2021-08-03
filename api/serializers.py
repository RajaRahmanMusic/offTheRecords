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

class ArtistSerializer(serializers.ModelSerializer):
    instagram = InstagramSerializer()

    class Meta:
        model = models.Artist
        fields = ['artist_name', 'legal_name',
                  'email', 'phone_number', 'address',
                  'date_of_birth', 'primary_genre', 'secondary_genre', 'tertiary_genre', 'website', 'instagram', 'facebook',
                  'linkedin', 'tiktok', 'youtube', 'ascap',
                  'bmi', 'soundExchange', 'mlc', 'spotifyForArtists',
                  'songTrust', 'googleDrive', 'venmo', 'payPal',"manager",
                  'cashapp', 'soundCloud', 'bandCamp', 'id',
                  ]


class ArtistWritableSerializer(serializers.ModelSerializer):
# Add fks after wiring
    class Meta:
        model = models.Artist
        fields = ['artist_name', 'legal_name',
                  'email', 'phone_number', 'address',
                  'date_of_birth', 'website', 'ascap',
                  'bmi', 'soundExchange', 'mlc', 'primary_genre',
                  'songTrust', 'googleDrive', 'venmo', 'payPal',
                  'cashapp', 'id', "instagram"]
