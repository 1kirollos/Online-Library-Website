from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=120)
    author = models.CharField(max_length=100)
    BookCover = models.ImageField( upload_to='media/jpg', null=True)
    TheBook = models.FileField(upload_to='media/pdfs', null= True)
    price = models.DecimalField(decimal_places=2, max_digits=10000,default=0.00)
    BorrowingPrice = models.DecimalField(decimal_places=2, max_digits=10000,default=0.00)
    description = models.TextField(blank=True, null=True)
    featured = models.BooleanField(default=True )
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.title
##############################################################
class Review(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'Review by {self.user.username} on {self.book.title}'
##################################################################   
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    avatar = models.ImageField(upload_to='media/ProfilePic', default='default/no_image.jpg')
    def __str__(self):
        return self.user.username
    
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        print("Creating profile for user:", instance.username)
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    print("Saving profile for user:", instance.username)
    instance.profile.save()