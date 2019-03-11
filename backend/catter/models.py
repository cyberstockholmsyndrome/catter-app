from django.db import models

# Create your models here.


class Cat(models.Model):
    name = models.CharField(max_length=30)
    age = models.IntegerField()
    race = models.CharField(max_length=30)
    description = models.TextField()

    def __str__(self):
        return self.name
