import graphene
from graphene_django import DjangoObjectType

from authors.models import Book, Author


class BookType(DjangoObjectType):
    class Meta:
        model = Book
        fields = '__all__'

class AuthorType(DjangoObjectType):
    class Meta:
        model = Author
        fields = '__all__'


class Query(graphene.ObjectType):
    all_books = graphene.List(BookType)
    all_authors = graphene.List(AuthorType)
    book_by_id = graphene.Field(BookType, id=graphene.Int(required=True))
    book_by_author_name = graphene.List(BookType, name=graphene.String(required=True))

    def resolve_all_books(self, info):
        return Book.objects.all()

    def resolve_all_authors(self, info):
        return Author.objects.all()

    def resolve_book_by_id(self, info, id):
        try:
            return Book.objects.get(id=id)
        except Book.DoesNotExist:
            return None

    def resolve_book_by_author_name(self, info, name):
        books = Book.objects.all()
        if name:
            books = books.filter(authors__first_name=name)
        return books


class AuthorMutation(graphene.Mutation):
    class Arguments:
        birthday_year = graphene.Int(required=True)
        id = graphene.ID()

    author = graphene.Field(AuthorType)

    @classmethod
    def mutate(cls, root, info, birthday_year, id):
        author = Author.objects.get(pk=id)
        author.birthday_year = birthday_year
        author.save()
        return AuthorMutation(author=author)


class Mutation(graphene.ObjectType):
    update_author = AuthorMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

