import json
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import JsonResponse
from django.shortcuts import HttpResponse, HttpResponseRedirect, render, redirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

from .models import User
from offTheRecords import models

@login_required
def index(request):

    # Authenticated users view their inbox
    if request.user.is_authenticated:
        templates = {User.ARTIST: "artist.html",
                     User.CONTRACTOR: "contractor.html",
                     User.MANAGER: "manager.html"}
        manager = None
        artist = None
        if request.user.is_authenticated and request.user.role == User.ARTIST:
            try:
                manager = models.Artist.objects.get(manager=request.user)
                artist = manager
            except models.Artist.DoesNotExist:
                pass

        else:
            if request.user.role == User.MANAGER:
                manager = request.user

        return render(request, "offTheRecords/" + templates[request.user.role],
                      {'manager' : manager, 'artist' : artist})

    # Everyone else is prompted to sign in
    else:
        return HttpResponseRedirect(reverse("login"))

@login_required
def artist_view(request, slug=None):
    if slug:
        qs = models.Artist.objects.filter(manager=request.user)

        try:
            artist = qs.get(artist_name=slug)
        except models.Artist.DoesNotExist:
            return redirect(reverse("index"))

    else:
        artist = None
    return render(request, 'offTheRecords/artist.html', {'artist': artist})


def login_view(request):
    if request.method == "POST":
        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "offTheRecords/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "offTheRecords/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "offTheRecords/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email,
                                        password, role=request.POST['role'])
            user.save()
        except IntegrityError:
            return render(request, "offTheRecords/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "offTheRecords/register.html")