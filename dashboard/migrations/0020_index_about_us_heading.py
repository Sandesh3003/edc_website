# Generated by Django 3.2.7 on 2021-12-25 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0019_contact'),
    ]

    operations = [
        migrations.AddField(
            model_name='index',
            name='about_us_heading',
            field=models.TextField(blank=True, null=True),
        ),
    ]
