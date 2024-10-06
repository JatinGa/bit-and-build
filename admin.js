Attdocument.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
    }

    const addBookForm = document.getElementById('addBookForm');
    const logoutButton = document.getElementById('logoutButton');

    addBookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const bookTitle = document.getElementById('bookTitle').value;
        const author = document.getElementById('author').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;


        let add=document.querySelector("featured-books");
        let divi=document.createElement("div");
        divi.setAttribute("class","book card");
        divi.createElement("img").setAttribute("src","https://i.pinimg.com/originals/cb/b2/e9/cbb2e9e16a9c7b4b75ba5ff18024bab3.jpg");
        divi.createElement("h3").innnerHTML=bookTitle;
        divi.createElement("p").innnerHTML=description;
        add.append("divi");
    
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
z
