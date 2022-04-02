from rest_framework import viewsets
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .models import Author, Biography, Book, Article
from .serializers import AuthorModelSerializer, BiographyModelSerializer, BookModelSerializer, ArticleModelSerializer, SimpleAuthorModelSerializer
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from .filters import ArticleFilter


# class AuthorApiView(APIView):
#     # def get(self, request):
#     #     # print(request.query_params)
#     #     # print(request.headers)
#     #     authors = Author.objects.all()
#     #     serializer = SimpleAuthorModelSerializer(authors, many=True)
#     #     return Response(serializer.data)
#     #
#     # def post(self, request):
#     #     return Response('tatata - post')

# class AuthorApiView(ListAPIView, CreateAPIView):
#     renderer_classes = [JSONRenderer]
#     queryset = Author.objects.all()
#     serializer_class = AuthorModelSerializer
#
#
# class AuthorApiView(viewsets.ViewSet):
#     def list(self, request):
#         authors = Author.objects.all()
#         serializer = SimpleAuthorModelSerializer(authors, many=True)
#         return Response(serializer.data)
#
#
# class AuthorApiView(viewsets.ModelViewSet):
#     queryset = Author.objects.all()
#     serializer_class = AuthorModelSerializer
#
#     def list(self, request, *args, **kwargs):
#         print('Changed list in ModelViewSet')
#         return super().list(request, *args, **kwargs)
#
#
# class AuthorApiView(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
#     queryset = Author.objects.all()
#     serializer_class = AuthorModelSerializer


class AuthorModelViewSet(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer
    filterset_fields = ['first_name', 'birthday_year']

    # def get_queryset(self):
    #     param = self.request.headers.get('param')
    #     return Author.objects.filter(birthday_year__contains=param)


class BiographyModelViewSet(ModelViewSet):
    permission_classes = [IsAdminUser]
    queryset = Biography.objects.all()
    serializer_class = BiographyModelSerializer
#
#
# class BiographyApiView(RetrieveAPIView):
#     renderer_classes = [JSONRenderer]
#     queryset = Biography.objects.all()
#     serializer_class = BiographyModelSerializer


class BookModelViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookModelSerializer


class ArticleModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Article.objects.all()
    serializer_class = ArticleModelSerializer
    filterset_class = ArticleFilter
