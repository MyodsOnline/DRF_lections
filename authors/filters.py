from django_filters import rest_framework as filter

from .models import Article


class ArticleFilter(filter.FilterSet):
    name = filter.CharFilter(lookup_expr='contains')

    class Meta:
        model = Article
        fields = ['name']
