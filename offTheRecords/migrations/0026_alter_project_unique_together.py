# Generated by Django 3.2.5 on 2021-08-05 07:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('offTheRecords', '0025_alter_projectitem_project'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='project',
            unique_together={('artist', 'name')},
        ),
    ]