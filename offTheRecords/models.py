from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    MANAGER = 1
    ARTIST = 2
    CONTRACTOR = 3

    choices = ((MANAGER, "Manger"), (ARTIST, "Artist"), (CONTRACTOR, "Contractor"))
    role = models.IntegerField(choices=choices, default=ARTIST)


class Genre(models.Model):
    name = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return self.name
    # Allows for categories to list by name and not id
    # List alphabetically

class Specialty(models.Model):
    name = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return self.name
    # List alphabetically

class Contractor_info(models.Model):
    contractor = models.ForeignKey(User, on_delete=models.PROTECT)
    specialty = models.ForeignKey(Specialty, on_delete=models.PROTECT)
    phone_number = models.CharField(max_length=64, unique=True)
    rate = models.IntegerField(default=0)
    website = models.URLField(blank=True, null=True)
    # link to contractor users only, they get no artist form


    def __str__(self):
        return self.contractor
    # Allows for categories to list by name and not id


class Instagram(models.Model):
    username = models.CharField(max_length=64)
    followers = models.IntegerField(default=0)
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.username


class Facebook(models.Model):
    username = models.CharField(max_length=64)
    followers = models.IntegerField(default=0)
    verified = models.BooleanField(default=False)
    def __str__(self):
        return self.username


class Twitter(models.Model):
    username = models.CharField(max_length=64)
    followers = models.IntegerField(default=0)
    verified = models.BooleanField(default=False)
    def __str__(self):
        return self.username


class LinkedIn(models.Model):
    username = models.CharField(max_length=64)
    followers = models.IntegerField(default=0)

    def __str__(self):
        return self.username


class TikTok(models.Model):
    username = models.CharField(max_length=64)
    followers = models.IntegerField(default=0)
    verified = models.BooleanField(default=False)
    def __str__(self):
        return self.username


class YouTube(models.Model):
    username = models.CharField(max_length=64)
    followers = models.IntegerField(default=0)

    def __str__(self):
        return self.username


class SpotifyForArtists(models.Model):
    username = models.CharField(max_length=64)
    followers = models.IntegerField(default=0)
    monthly_listeners = models.IntegerField(default=0)
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.username


class SoundCloud(models.Model):
    username = models.CharField(max_length=64)
    followers = models.IntegerField(default=0)
    streams = models.IntegerField(default=0)

    def __str__(self):
        return self.username


class BandCamp(models.Model):
    username = models.CharField(max_length=64)
    followers = models.IntegerField(default=0)

    def __str__(self):
        return self.username


class Artist(models.Model):
    manager = models.ForeignKey(User, on_delete=models.PROTECT)
    primary_genre = models.ForeignKey(Genre, on_delete=models.PROTECT, related_name="primary_genre")
    secondary_genre = models.ForeignKey(Genre, on_delete=models.PROTECT, blank=True, null=True,
                                        related_name="secondary_genre")
    tertiary_genre = models.ForeignKey(Genre, on_delete=models.PROTECT, blank=True, null=True,
                                       related_name="tertiary_genre")
    artist_name = models.CharField(max_length=64, unique=True)
    legal_name = models.CharField(max_length=64)
    email = models.CharField(max_length=64)
    phone_number = models.CharField(max_length=64)
    address = models.CharField(max_length=255)
    date_of_birth = models.DateField(blank=True, null=True)
    # FIX DEFAULT ISSUE
    website = models.URLField(blank=True, null=True)
    instagram = models.ForeignKey(Instagram, on_delete=models.PROTECT, blank=True, null=True)
    facebook = models.ForeignKey(Facebook, on_delete=models.PROTECT, blank=True, null=True)
    twitter = models.ForeignKey(Twitter, on_delete=models.PROTECT, blank=True, null=True)
    linkedin = models.ForeignKey(LinkedIn, on_delete=models.PROTECT, blank=True, null=True)
    tiktok = models.ForeignKey(TikTok, on_delete=models.PROTECT, blank=True, null=True)
    youtube = models.ForeignKey(YouTube, on_delete=models.PROTECT, blank=True, null=True)
    soundCloud = models.ForeignKey(SoundCloud, on_delete=models.PROTECT, blank=True, null=True)
    bandCamp = models.ForeignKey(BandCamp, on_delete=models.PROTECT, blank=True, null=True)
    spotifyForArtists = models.ForeignKey(SpotifyForArtists, on_delete=models.PROTECT, blank=True, null=True)
    ascap = models.CharField(max_length=64, blank=True, null=True)
    bmi = models.CharField(max_length=64, blank=True, null=True)
    soundExchange = models.CharField(max_length=64, blank=True, null=True)
    mlc = models.CharField(max_length=64, blank=True, null=True)
    songTrust = models.CharField(max_length=64, blank=True, null=True)
    googleDrive = models.CharField(max_length=64, blank=True, null=True)
    venmo = models.CharField(max_length=64, blank=True, null=True)
    payPal = models.CharField(max_length=64, blank=True, null=True)
    cashapp = models.CharField(max_length=64, blank=True, null=True)

class Item(models.Model):
    name = models.CharField(max_length=128, unique=True)
    duration = models.IntegerField(null=True, blank=True)
    song_per_duration = models.IntegerField(default=1)
    depends_on = models.ForeignKey('Item', on_delete=models.PROTECT,
                                   null=True, blank=True)

    def __str__(self):
        return self.name


class Project(models.Model):
    ITB = 0
    STUDIO = 1
    CHOICES = ((ITB, "In The Box"), (STUDIO, "Studio"))
    artist = models.ForeignKey(Artist, on_delete=models.PROTECT)
    name = models.CharField(max_length=128)
    start_date = models.DateField(blank=True, null=True)
    num_songs = models.IntegerField(default=1)
    num_od = models.IntegerField(default=1)
    project_type = models.IntegerField(default=1, choices=CHOICES)
    task = models.ManyToManyField(to=Item, through='ProjectItem')

    def __str__(self):
        return self.name

    class Meta:
        unique_together = ['artist', 'name']

class ProjectItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.PROTECT)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    complete = models.BooleanField(default=False)

