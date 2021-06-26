from django.contrib import admin
from django.urls import path,include
from core import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home,name='home'),
    path('contact/', views.contact,name='contact'),
    path('con_rev/', views.contact_review,name='con_rev'),
    path('serv/', include('services.urls')),
    path('skill/', include('education.urls')),

]
