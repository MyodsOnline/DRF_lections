from django.core.management.base import BaseCommand

from authors.models import Author


class Command(BaseCommand):
    help = 'Fill database with authors'

    def handle(self, *args, **options):
        Author.objects.create(
            first_name='Том',
            last_name='Стоппард',
            birthday_year='1937',
        )
        Author.objects.create(
            first_name='Леонид',
            last_name='Юзефович',
            birthday_year='1947',
        )
        Author.objects.create(
            first_name='Майкл',
            last_name='Чабон',
            birthday_year='1963',
        )
