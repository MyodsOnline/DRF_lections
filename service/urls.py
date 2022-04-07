from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from authors.views import AuthorModelViewSet, ArticleModelViewSet, BiographyModelViewSet, BookModelViewSet

schema_view = get_schema_view(
    openapi.Info(
        title='Library',
        default_version='0.1',
        description='Docs',
        contact=openapi.Contact(email='mail@mail.xyz'),
        license=openapi.License(name='MIT License'),
    ),
    public=True,
)

router = DefaultRouter()
# router.register('authors', AuthorModelViewSet)
router.register('books', BookModelViewSet)
router.register('articles', ArticleModelViewSet)
router.register('biographies', BiographyModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token),
    # re_path(r'^api/(?P<version>\d)/authors/$', AuthorModelViewSet.as_view()),
    # path('api/1/authors/', include('authors.urls', namespace='1')),
    # path('api/2/authors/', include('authors.urls', namespace='2')),
    path('api/authors/', AuthorModelViewSet.as_view()),

    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
