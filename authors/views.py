from rest_framework import viewsets
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly

from .models import Author, Biography, Book, Article
from .serializers import AuthorModelSerializer, BiographyModelSerializer, BookModelSerializer, ArticleModelSerializer, SimpleAuthorModelSerializer
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from .filters import ArticleFilter


class AuthorModelViewSet(ListAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer
    filterset_fields = ['first_name', 'birthday_year']

    def get_serializer_class(self):
        if self.request.version == '1':
            return SimpleAuthorModelSerializer
        return AuthorModelSerializer


class BiographyModelViewSet(ModelViewSet):
    permission_classes = [IsAdminUser]
    queryset = Biography.objects.all()
    serializer_class = BiographyModelSerializer


class BookModelViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookModelSerializer


class ArticleModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Article.objects.all()
    serializer_class = ArticleModelSerializer
    filterset_class = ArticleFilter
