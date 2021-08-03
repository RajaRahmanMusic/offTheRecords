from django.contrib import admin
from offTheRecords import models
# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'role']


class ArtistAdmin(admin.ModelAdmin):
    list_display = ['artist_name', 'legal_name', 'email']


class Contractor_infoAdmin(admin.ModelAdmin):
    list_display = ['contractor', 'specialty', 'rate']


class GenreAdmin(admin.ModelAdmin):
    list_display = ['name']

# Sort alphabetically


class SpecialtyAdmin(admin.ModelAdmin):
    list_display = ['name']

# Sort alphabetically

class InstagramAdmin(admin.ModelAdmin):
    list_display = ['username', 'followers', 'verified']


class FacebookAdmin(admin.ModelAdmin):
    list_display = ['username', 'followers', 'verified']


class TwitterAdmin(admin.ModelAdmin):
    list_display = ['username', 'followers', 'verified']


class LinkedinAdmin(admin.ModelAdmin):
    list_display = ['username', 'followers']


class TiktokAdmin(admin.ModelAdmin):
    list_display = ['username', 'followers', 'verified']


class YoutubeAdmin(admin.ModelAdmin):
    list_display = ['username', 'followers']


class SoundCloudAdmin(admin.ModelAdmin):
    list_display = ['username', 'followers', 'streams']


class BandCampAdmin(admin.ModelAdmin):
    list_display = ['username', 'followers']


class SpotifyForArtistsAdmin(admin.ModelAdmin):
    list_display = ['username', 'followers', 'monthly_listeners']


admin.site.register(models.User, UserAdmin)
admin.site.register(models.Artist, ArtistAdmin)
admin.site.register(models.Contractor_info, Contractor_infoAdmin)
admin.site.register(models.Genre, GenreAdmin)
admin.site.register(models.Specialty, SpecialtyAdmin)
admin.site.register(models.Instagram, InstagramAdmin)
admin.site.register(models.Facebook, FacebookAdmin)
admin.site.register(models.Twitter, TwitterAdmin)
admin.site.register(models.LinkedIn, LinkedinAdmin)
admin.site.register(models.TikTok, TiktokAdmin)
admin.site.register(models.YouTube, YoutubeAdmin)
admin.site.register(models.SoundCloud, SoundCloudAdmin)
admin.site.register(models.BandCamp, BandCampAdmin)
admin.site.register(models.SpotifyForArtists, SpotifyForArtistsAdmin)
