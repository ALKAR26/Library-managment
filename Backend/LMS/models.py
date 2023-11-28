# books/models.py
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=50)
    publication_date = models.DateField()
    description = models.TextField()

    def __str__(self):
        return self.title


from django.contrib.auth.models import User
from django.db import models
from .models import Book

class IssuedBook(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    issue_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.book.title} - {self.user.username}"
