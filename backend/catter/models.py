from django.db import models

from django.db.models.signals import post_delete
from django.dispatch import receiver

# Create your models here.


class Cat(models.Model):
    name = models.CharField(max_length=30)
    age = models.IntegerField()
    race = models.CharField(max_length=30)
    description = models.TextField()
    imageUrl = models.ImageField(upload_to="images")

    def __str__(self):
        return self.name


@receiver(post_delete, sender=Cat)
def submission_delete(sender, instance, **kwargs):
    instance.imageUrl.delete(False)
