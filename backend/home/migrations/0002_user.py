# Generated by Django 5.0.4 on 2024-04-23 08:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.IntegerField(max_length=20)),
                ('uname', models.CharField(max_length=50)),
                ('uemail', models.EmailField(max_length=254)),
                ('ucontact', models.IntegerField()),
            ],
            options={
                'db_table': 'user',
            },
        ),
    ]
