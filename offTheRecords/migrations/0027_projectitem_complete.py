# Generated by Django 3.2.5 on 2021-08-05 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offTheRecords', '0026_alter_project_unique_together'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectitem',
            name='complete',
            field=models.BooleanField(default=False),
        ),
    ]
