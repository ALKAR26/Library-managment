class Book:
    def __init__(self, title, author, ISBN):
        self.title = title
        self.author = author
        self.ISBN = ISBN

class Library:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)

    def remove_book(self, ISBN):
        for book in self.books:
            if book.ISBN == ISBN:
                self.books.remove(book)
                return

    def display_books(self):
        for book in self.books:
            print(f"Title: {book.title}, Author: {book.author}, ISBN: {book.ISBN}")

def main():
    library = Library()

    while True:
        print("\nLibrary Management System")
        print("1. Add a Book")
        print("2. Remove a Book")
        print("3. Display Books")
        print("4. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            title = input("Enter the book title: ")
            author = input("Enter the author: ")
            ISBN = input("Enter the ISBN: ")
            book = Book(title, author, ISBN)
            library.add_book(book)
            print("Book added successfully.")
        elif choice == "2":
            ISBN = input("Enter the ISBN of the book to remove: ")
            library.remove_book(ISBN)
            print("Book removed successfully.")
        elif choice == "3":
            library.display_books()
        elif choice == "4":
            print("Exiting the program.")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
