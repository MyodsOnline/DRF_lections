from rest_framework.serializers import HyperlinkedModelSerializer, StringRelatedField, ModelSerializer
from .models import Author, Biography, Book, Article


class AuthorModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class SimpleAuthorModelSerializer(ModelSerializer):
    class Meta:
        model = Author
        fields = ['first_name', 'last_name']


class BiographyModelSerializer(HyperlinkedModelSerializer):
    author = SimpleAuthorModelSerializer()

    class Meta:
        model = Biography
        fields = ['text', 'author']


class BookModelSerializer(HyperlinkedModelSerializer):
    authors = StringRelatedField(many=True)

    class Meta:
        model = Book
        exclude = ['url']


class ArticleModelSerializer(ModelSerializer):
    author = SimpleAuthorModelSerializer()

    class Meta:
        model = Article
        exclude = ['name']
