

    addBookForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;

        if (title && author) {
            const li = document.createElement("li");
            li.innerHTML = `<strong>Title:</strong> ${title}, <strong>Author:</strong> ${author}`;
            bookList.appendChild(li);
            addBookForm.reset();
        }
    });

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const books = bookList.getElementsByTagName("li");

        Array.from(books).forEach(function (book) {
            const bookText = book.textContent.toLowerCase();
            if (bookText.includes(searchTerm)) {
                book.style.display = "block";
            } else {
                book.style.display = "none";






            document.addEventListener("DOMContentLoaded", function () {
    const addBookForm = document.getElementById("add-book-form");
    const bookList = document.getElementById("book-list");
    const searchInput = document.getElementById("search");

    addBookForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;

        if (title && author) {
            const li = document.createElement("li");
            li.innerHTML = `<strong>Title:</strong> ${title}, <strong>Author:</strong> ${author}`;
            bookList.appendChild(li);
            addBookForm.reset();
        }
    });

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const books = bookList.getElementsByTagName("li");

        Array.from(books).forEach(function (book) {
            const bookText = book.textContent.toLowerCase();
            if (bookText.includes(searchTerm)) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });
    });
});

            }
        });
    });
});
