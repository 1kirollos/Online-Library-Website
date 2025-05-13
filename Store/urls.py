"""
URL configuration for Store project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from Books.views import Book_detail_view, Book_Create, view_list, register,custom_login,custom_logout,profile_view,update_profile,update_password,ava_book,Book_detail_edit,browes_book,delete_book,undo_borrow, owner,add_review
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', view_list, name='home'),
    path('Home_Page.html', view_list, name='home'),
    path('Browes/', browes_book, name = 'Browes'),
    path('Book_info/<int:my_id>', Book_detail_view, name = 'Book-info'),
    path('Book_edit/<int:book_id>', Book_detail_edit, name = 'Book-edit'),
    path('Create/', Book_Create, name = 'Add_Book'),
    path('register/', register, name='register'),
    path('update_pass', update_password, name='update_pass'),
    path('register/Home_Page.html', view_list, name='home_page'),
    path('login', custom_login, name='login'),
    path('logout', custom_logout, name='logout'),
    path('profile', profile_view, name='profile'),
    path('ava_book', ava_book, name='ava_book'),
    path('updata_profile', update_profile, name='updata_profile'),
    path('delete_book/<int:book_id>', delete_book, name = 'delete_book'),
    path('undo_borrow/<int:book_id>', undo_borrow, name = 'undo_borrow'),
    path('add_review/<int:book_id>', add_review, name = 'add_review'),
    path('owner', owner, name = 'owner'),

    
    
    path('mylib/', include('Mylibrary.urls'))

]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)