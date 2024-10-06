document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the stored books from localStorage
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const bookList = document.getElementById('bookList');

    // Loop through the books and create HTML elements for each one
    books.forEach((book) => {
        let add=document.querySelector(".featured-books");
        let divi=document.createElement("div");
        divi.setAttribute("class","book card");
        divi.append(document.createElement("img").setAttribute("src","https://i.pinimg.com/originals/cb/b2/e9/cbb2e9e16a9c7b4b75ba5ff18024bab3.jpg"));
        let heading=document.createElement("h3");
        heading.innerHTML=bookTitle;
        divi.append(heading);
        let desc=document.createElement("p");
        desc.innerHTML=description;
        divi.append(desc);
        
        add.append("divi");
    });
});



function searchBooks() {
    // Get the search input value
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    
    // Get all the book cards
    const books = document.querySelectorAll(".book-card");
    
    // Loop through each book and filter based on the title or description
    books.forEach(book => {
        const title = book.querySelector("h3").textContent.toLowerCase();
        const description = book.querySelector("p").textContent.toLowerCase();

        // If the title or description matches the search input, display the book
        if (title.includes(searchInput) || description.includes(searchInput)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}


