# Generated by Django 5.0.4 on 2024-04-27 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Books', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='featured',
            field=models.BooleanField(default=True),
            preserve_default=False,
        ),
    ]
