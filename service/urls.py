from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from authors.views import AuthorModelViewSet, ArticleModelViewSet, BiographyModelViewSet, BookModelViewSet

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
    re_path(r'^api/(?P<version>\d)/authors/$', AuthorModelViewSet.as_view()),
]
