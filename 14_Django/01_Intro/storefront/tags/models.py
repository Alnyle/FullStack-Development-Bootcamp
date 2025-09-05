from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
# Create your models here.
class Tag(models.Model):
    
    title = models.CharField(max_length=255)
    

class TaggedItem(models.Model):
    
    # bind tag with an object
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
    
    # if import product model the tag will be depended on store app
    # we need from our tag to know nothing about other apps because for example 
    # if want to us our tag app to add tags for article or post in our e-commerce app 
    # we need generic way to identify an object 
    # for that we need two things 
    # - Type (product, video, article) : to find table
    # - ID: to find a record
    # using `ContentType` class: we can create generic relationship between our models
    
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    
    content_object = GenericForeignKey()
    
    