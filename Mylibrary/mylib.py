from Books.models import Book
class mylib():
    def __init__(self, request):
        self.session = request.session
        
        lib = self.session.get('session_key')
        
        if 'session_key' not in request.session:
            lib = self.session['session_key'] = {}
            
        
        self.lib = lib
        
    
    def add(self, book):
        product_id = str(book.id)
        
        if product_id in self.lib:
            pass
        else:
            self.lib[product_id] = {'Price': str(book.price)}
        

        self.session.modified = True

    
    def get_book(self):
        book_ids = self.lib.keys()
        
        books = Book.objects.filter(id__in = book_ids)

        return books