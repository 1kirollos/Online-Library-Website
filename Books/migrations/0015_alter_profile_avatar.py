# Generated by Django 5.0.4 on 2024-05-02 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Books', '0014_alter_profile_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.ImageField(default='default/no_image.jpg', upload_to='media/ProfilePic'),
        ),
    ]
