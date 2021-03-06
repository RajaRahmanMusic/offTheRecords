# Generated by Django 3.2.5 on 2021-08-02 04:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offTheRecords', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Website',
        ),
        migrations.AlterField(
            model_name='artist',
            name='ascap',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='bandCamp',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='bmi',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='cashapp',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='email',
            field=models.EmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name='artist',
            name='facebook',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='googleDrive',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='instagram',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='linkedIn',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='mlc',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='payPal',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='songTrust',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='soundCloud',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='soundExchange',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='spotifyForArtists',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='tikTok',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='twitter',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='venmo',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='youTube',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.DeleteModel(
            name='ASCAP',
        ),
        migrations.DeleteModel(
            name='BandCamp',
        ),
        migrations.DeleteModel(
            name='BMI',
        ),
        migrations.DeleteModel(
            name='Cashapp',
        ),
        migrations.DeleteModel(
            name='Facebook',
        ),
        migrations.DeleteModel(
            name='GoogleDrive',
        ),
        migrations.DeleteModel(
            name='Instagram',
        ),
        migrations.DeleteModel(
            name='LinkedIn',
        ),
        migrations.DeleteModel(
            name='MLC',
        ),
        migrations.DeleteModel(
            name='PayPal',
        ),
        migrations.DeleteModel(
            name='SongTrust',
        ),
        migrations.DeleteModel(
            name='SoundCloud',
        ),
        migrations.DeleteModel(
            name='SoundExchange',
        ),
        migrations.DeleteModel(
            name='SpotifyForArtists',
        ),
        migrations.DeleteModel(
            name='TikTok',
        ),
        migrations.DeleteModel(
            name='Twitter',
        ),
        migrations.DeleteModel(
            name='Venmo',
        ),
        migrations.DeleteModel(
            name='YouTube',
        ),
    ]
