# Generated by Django 3.0.5 on 2020-05-01 03:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
  dependencies = [
    ('model_garden', '0001_initial'),
  ]

  operations = [
    migrations.CreateModel(
      name='BucketItem',
      fields=[
        ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
        ('path', models.CharField(max_length=1024)),
        ('bucket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='model_garden.Bucket')),
      ],
    ),
  ]