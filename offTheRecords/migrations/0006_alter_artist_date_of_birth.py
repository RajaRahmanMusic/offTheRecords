# Generated by Django 3.2.5 on 2021-08-02 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offTheRecords', '0005_auto_20210802_1833'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artist',
            name='date_of_birth',
            field=models.DateField(),
        ),
    ]
