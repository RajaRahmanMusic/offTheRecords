# Generated by Django 3.2.5 on 2021-08-02 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offTheRecords', '0008_alter_artist_date_of_birth'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artist',
            name='date_of_birth',
            field=models.DateField(blank=True, null=True),
        ),
    ]
