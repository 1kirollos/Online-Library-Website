from django.shortcuts import render, get_object_or_404, redirect
from .mylib import mylib
from django.contrib import messages
from Books.models import Book
from django.http import JsonResponse
# Create your views here.
def mylib_summary(request):

    lib_book = Book.objects.all().filter(featured = False, user = request.user)
    
    
    return render(request, "Mylib/My_library.HTML", {'lib_book' : lib_book})

def mylib_add(request, book_id):
    lib = mylib(request)
        
    book = get_object_or_404(Book, id= book_id)
    book.featured = False
    book.user = request.user
    print(book)
    book.save()
    lib.add(book = book)
    
    messages.success(request,"The Book Has Been Borrowed")
    response = JsonResponse({'Book Name: ' : book.title})

    
    return response   
        
