from django.urls import path
from . import views

# URLConf: Url configuration you to add the goalable url main
# to be able by main app
# example it's appear like playground/hello
urlpatterns = [
    path('hello/', views.say_hello)
]
