Assignment 4
# Book Management App Updates

This repository contains a Book Management application built with React (frontend) and PHP/MySQL (backend). The following features and changes have been added:

1. **Pagination**  
   - Displays at most 5 books per page.
   - Includes **Prev** and **Next** buttons for navigation.
   - Shows page numbers at the bottom of the table.
   - If there are 5 or fewer books, only one page is needed.

2. **"Details" Button and Popup (Modal)**  
   - In the "Actions" column, each book has a **Details** button.
   - Clicking **Details** opens a popup (modal) showing the book’s full information, including its description (if present in the database).
   - The modal can be closed by clicking the **X** button (or outside the modal area, depending on your styling/implementation).

3. **Frontend Code Structure (`BookListPage.js`)**  
   - The following `state` variables are used:
     - `books`: stores the full list of books.  
     - `query`: the search keyword.  
     - `currentPage`: the current page index for pagination.  
     - `showModal` and `selectedBook`: manage the visibility of the modal and store the book details to be displayed.
   - The `fetchBooks()` function sends requests to the API (`get_books.php` or `search_books.php`).
   - The books for the current page are determined by:
     ```js
     const indexOfLastBook = currentPage * booksPerPage;
     const indexOfFirstBook = indexOfLastBook - booksPerPage;
     const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
     ```
   - The total number of pages is calculated as:
     ```js
     const totalPages = Math.ceil(books.length / booksPerPage);
     ```
   - **Prev**, **Next**, and page number buttons are displayed below the table, created via a simple loop using `Array.from`.

4. **Backend Files (`get_books.php` or `get_book.php`)**  
   - Make sure to select the `description` column or any other new columns in your SQL query if you want them to appear in the JSON output. For example:
     ```php
     $stmt = $pdo->query("SELECT id, title, author, price, rating, description FROM books ORDER BY id DESC");
     $books = $stmt->fetchAll(PDO::FETCH_ASSOC);
     echo json_encode($books);
     ```
   - In `get_book.php`, if an `id` parameter is provided (e.g., `?id=5`), it returns the data for that specific book as an object. If no `id` parameter is given, it returns an array of all books.

5. **Styling (CSS)**  
   - Use classes like `.modal-overlay` and `.modal-content` to create and style the popup.
   - Add a `.details-btn` class for your **Details** button, giving it a suitable color, padding, etc.
   - You can similarly style pagination buttons.

## How to Run the Project

1. **Install Frontend Dependencies**  
   Navigate to the React folder (e.g., `book-manager`) and run:
   ```bash
   npm install
   npm start

This starts the React app on http://localhost:3000.
	2.	Run the Backend
	•	Place the backend folder on a local server (e.g., XAMPP) or use a local PHP environment.
	•	Edit db_connect.php to match your database credentials (host, user, password, dbname).
	•	Create the database and run the queries to build the books table (in exported_database.sql).

 
 
# ReactApp3
Assignment 3


# Book Management Web App (ReactApp3)

This project is a simple web application for managing books, built with React on the frontend and PHP/MySQL on the backend.

## Features

- **Add New Books:** Users can add books by entering the title, author, price, and rating.
- **View Book List:** Displays all registered books in a table.
- **Search Books:** Allows searching for books by title or author.
- **Simple UI:** Includes a header, navigation bar, and footer.
- **Routing:** Utilizes React Router for navigating between pages (Home, Add Book, Books List).

- **backend:** Contains PHP files to connect to the database and handle book addition, retrieval, and search requests.
- **book-manager:** Contains the React application code, including components, pages, CSS, and images.

## Getting Started

1. **Database Setup:**
   - Create a `reactapp3` database in phpMyAdmin or your database tool.
   - Import the `exported_database.sql` file or run its queries to create the `books` table.

2. **Backend Configuration:**
   - Open `db_connect.php` and update the database credentials (host, user, password, dbname) according to your environment.
   - Place the `backend` folder on your local server (e.g., `http://localhost/backend`).

3. **Install Frontend Dependencies:**
   ```bash
   cd ReactApp3/book-manager
   npm install
   npm start

   This starts the React app at http://localhost:3000.
	4.	Run the Backend:
	•	Ensure your server is running and accessible at http://localhost/backend.
	•	The React app will fetch data from this backend endpoint.

Pages
	•	Home Page: Displays a welcome message and an image centered on the screen.
	•	Add Book Page: Allows entering book details (title, author, price, rating) and adding them to the database.
	•	Books List Page: Displays all books, with a search function to filter by title or author.

Additional Notes
	•	Routing: Implemented via react-router-dom.
	•	Styling: Basic styling provided in App.css using Flexbox.
	•	Improvements: For more advanced features, consider adding a state management library (like Redux), UI libraries (like Material UI), or more complex backend operations.

