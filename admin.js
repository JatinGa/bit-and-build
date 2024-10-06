document.addEventListener('DOMContentLoaded', () => {
    
    const addBookForm = document.getElementById('addBookForm');
    const logoutButton = document.getElementById('logoutButton');

    addBookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const bookTitle = document.getElementById('bookTitle').value;
        const author = document.getElementById('author').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;

        let books = JSON.parse(localStorage.getItem('books')) || [];
        books.push({ bookTitle, author, price, description });
        localStorage.setItem('books', JSON.stringify(books));


       
        
    
        // In a real application, you would send this data to a server
        console.log('Adding book:', { bookTitle, author, price, description });
        alert('Book added successfully!');
        addBookForm.reset();
    });

    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'index.html';
    });
});

