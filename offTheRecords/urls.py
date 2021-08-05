from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path('artist/', views.artist_view, name="new_artist"),
    path('artist/<slug:slug>/', views.artist_view),
    path('project_plan/<str:slug1>/', views.project_planning_results_view, name="project_planning_results"),
    path('project_plan/', views.plan_list, name="project_planning_list"),
]
