# Generated by Django 4.1 on 2022-12-22 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0002_skill_date_added'),
    ]

    operations = [
        migrations.CreateModel(
            name='Texts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('intro_text', models.CharField(max_length=200)),
                ('about_text', models.CharField(max_length=500)),
            ],
        ),
    ]
