# Generated by Django 3.2.5 on 2021-08-03 04:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offTheRecords', '0012_auto_20210803_0421'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artist',
            name='artist_name',
            field=models.CharField(max_length=64, unique=True),
        ),
    ]
