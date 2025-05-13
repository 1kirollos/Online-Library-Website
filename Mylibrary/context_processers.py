from .mylib import mylib

def lib(request):
    return {'lib' : mylib(request)}