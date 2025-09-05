from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
# function take request -> reponse
# it's request handler
# In other framworks called action

def calculate():
    x = 1
    y = 2
    return x

def say_hello(request):
    # you can
    # pull data from db
    # Transform data
    # send email
    
    x = calculate()
    return render(request, 'hello.html',{'name': 'Ahmed'})
    
    # return HttpResponse('Hello Django')