// Function to validate form inputs
function validateForm() {
    // Get the form and its inputs
    const form = document.querySelector('form');
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const bookCover = document.getElementById('bookCover');
    const bookFile = document.getElementById('bookFile');
    const buyingPrice = document.getElementById('buyingPrice');
    const borrowingPrice = document.getElementById('borrowingPrice');
    const description = document.getElementById('description');
    const save = document.getElementById('title');

    let hasError = false;
    const alphabetic = /^[A-Za-z\s]+$/;
    // Validate the title input
    if (title.value.trim() === '') {
        document.getElementById('title-error').textContent = 'Title is required.';
        hasError = true;
    } else if (!alphabetic.test(title.value.trim())) {
        document.getElementById('title-error').textContent = 'Only Alphabetic characters allowed';
        hasError = true;
    } else {
        document.getElementById('title-error').textContent = '';
    }

    // Validate the author input
    if (author.value.trim() === '') {
        document.getElementById('author-error').textContent = 'Author is required.';
        hasError = true;
    } else if (!alphabetic.test(author.value.trim())) {
        document.getElementById('author-error').textContent = 'Only Alphabetic characters allowed';
        hasError = true;
    } 
    else {
        document.getElementById('author-error').textContent = '';
    }

    // Validate the book cover file input
    if (bookCover.files.length == 0) {
        document.getElementById('bookCover-error').textContent = 'The book cover is required';
        hasError = true;
    }
    if (bookCover.files.length > 0) {
        const file = bookCover.files[0];
        const allowedFileTypes = ['image/jpeg', 'image/png'];
        if (!allowedFileTypes.includes(file.type)) {
            document.getElementById('bookCover-error').textContent = 'Invalid file type. Only JPEG and PNG images are allowed.';
            hasError = true;
        } else {
            document.getElementById('bookCover-error').textContent = '';
        }
    }

    // Validate the book file input
    if (bookFile.files.length == 0) {
        document.getElementById('bookFile-error').textContent = 'The book file is required';
        hasError = true;
    }
    else if (bookFile.files.length > 0) {
        const file = bookFile.files[0];
        if (file.type !== 'application/pdf') {
            document.getElementById('bookFile-error').textContent = 'Invalid file type. Only PDF files are allowed.';
            hasError = true;
        } else {
            document.getElementById('bookFile-error').textContent = '';
        }
    }

    // Validate the buying price input
    if (buyingPrice.value < 0) {
        document.getElementById('buyingPrice-error').textContent = 'Buying price must be a non-negative number.';
        hasError = true;
    } else {
        document.getElementById('buyingPrice-error').textContent = '';
    }

    // Validate the borrowing price input
    if (borrowingPrice.value < 0) {
        document.getElementById('borrowingPrice-error').textContent = 'Borrowing price must be a non-negative number.';
        hasError = true;
    } else {
        document.getElementById('borrowingPrice-error').textContent = '';
    }

    // Validate the description input
    if (description.value.trim() === '') {
        document.getElementById('description-error').textContent = 'Description is required.';
        hasError = true;
    } else {
        document.getElementById('description-error').textContent = '';
    }

    return hasError;
}

document.querySelector('form').addEventListener('submit', function(event) {
    if (validateForm()) {
        event.preventDefault();
    }
});


// Function to add book data to local storage
function addBookToLocalStorage(book) {
    // Retrieve existing books data from local storage
    let booksData = localStorage.getItem('books');
    
    // Parse existing data into an array, or initialize an empty array if not found
    let booksArray = booksData ? JSON.parse(booksData) : [];
    
    // Add the new book object to the array
    booksArray.push(book);
    
    // Convert the updated array back to a JSON string
    let updatedBooksData = JSON.stringify(booksArray);
    
    // Save the updated data back to local storage
    localStorage.setItem('books', updatedBooksData);
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get the form data
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const bookCover = document.getElementById('bookCover').files[0];
    const bookFile = document.getElementById('bookFile').files[0];
    const buyingPrice = document.getElementById('buyingPrice').value;
    const borrowingPrice = document.getElementById('borrowingPrice').value;
    const description = document.getElementById('description').value;

    // Create a book object with the form data
    const book = {
        title,
        author,
        bookCover: URL.createObjectURL(bookCover),
        bookFile: URL.createObjectURL(bookFile),
        buyingPrice,
        borrowingPrice,
        description
    };

    // Add the book data to local storage
    addBookToLocalStorage(book);

    // Optionally, display a success message or take other actions
    alert("Book added successfully!");
}

// Add event listener to the form
const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

