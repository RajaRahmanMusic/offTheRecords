# Generated by Django 3.2.5 on 2021-08-04 13:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('offTheRecords', '0017_project_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='task',
            field=models.ManyToManyField(through='offTheRecords.ProjectItem', to='offTheRecords.Item'),
        ),
        migrations.AddField(
            model_name='projectitem',
            name='project',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.PROTECT, to='offTheRecords.project'),
            preserve_default=False,
        ),
    ]