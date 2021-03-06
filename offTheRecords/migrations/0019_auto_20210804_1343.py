# Generated by Django 3.2.5 on 2021-08-04 13:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('offTheRecords', '0018_auto_20210804_1310'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projectitem',
            name='depends_on',
        ),
        migrations.RemoveField(
            model_name='projectitem',
            name='duration',
        ),
        migrations.AddField(
            model_name='item',
            name='depends_on',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='offTheRecords.item'),
        ),
        migrations.AddField(
            model_name='item',
            name='duration',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
