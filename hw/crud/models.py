from django.db import models


class Library(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    year = models.DateField()
    price = models.FloatField()
    count = models.IntegerField()

    def __str__(self):
        return f"{self.name} - {self.author}"
