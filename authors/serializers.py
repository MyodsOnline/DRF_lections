from rest_framework.serializers import HyperlinkedModelSerializer, StringRelatedField, ModelSerializer
from .models import Author, Biography, Book, Article


class AuthorModelSerializer(ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class SimpleAuthorModelSerializer(ModelSerializer):
    class Meta:
        model = Author
        fields = ['first_name', 'last_name']


class BiographyModelSerializer(ModelSerializer):
    author = SimpleAuthorModelSerializer()

    class Meta:
        model = Biography
        fields = '__all__'


class BookModelSerializer(ModelSerializer):
    authors = SimpleAuthorModelSerializer(many=True)

    class Meta:
        model = Book
        fields = '__all__'


class ArticleModelSerializer(ModelSerializer):
    author = SimpleAuthorModelSerializer()

    class Meta:
        model = Article
        fields = '__all__'
        # exclude = ['name']
