from django.urls import path
from . import views

# URLConf: url configuration -> will to imporrt this url cofigruation into the main app
urlpatterns = [
    path('hello/', views.say_hello)
]

# path object take
#  - route: string
#  - view function: a function return HttpResponse object