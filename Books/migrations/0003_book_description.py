# Generated by Django 5.0.4 on 2024-04-27 15:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Books', '0002_book_featured'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
