from django.shortcuts import render
from django.http import HttpResponse
# django.http: package 
# HttpResponse: class

# Create your views here.
# where you handle your request 
# view is a function take a request and return response : 
# request handler 
# action 

def say_hello(request): 
    # return an instance (object) from class HttpResponse
    # return HttpResponse('Hello django')
    
    return render(request, 'hello.html', {'name': 'Ali'})