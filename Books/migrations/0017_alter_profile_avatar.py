# Generated by Django 5.0.4 on 2024-05-02 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Books', '0016_alter_profile_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.ImageField(default='media\\media\\jpg\\sda_.jpg', upload_to='media/ProfilePic'),
        ),
    ]
