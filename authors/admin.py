from django.contrib import admin

from .models import Author, Book, Biography, Article

admin.site.register(Author)
admin.site.register(Book)
admin.site.register(Biography)
admin.site.register(Article)
