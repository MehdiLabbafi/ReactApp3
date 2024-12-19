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

## Project Structure
ReactApp3/
├─ backend/
│  ├─ db_connect.php
│  ├─ add_book.php
│  ├─ get_books.php
│  ├─ search_books.php
│  ├─ exported_database.sql
│
└─ book-manager/
├─ public/
│  ├─ images/
│  │  └─ welcome.jpg
│  ├─ index.html
├─ src/
│  ├─ components/
│  │  ├─ Header.js
│  │  ├─ Footer.js
│  │  ├─ Navbar.js
│  ├─ pages/
│  │  ├─ HomePage.js
│  │  ├─ AddBookPage.js
│  │  ├─ BookListPage.js
│  ├─ App.js
│  ├─ App.css
│  ├─ index.js
├─ package.json
├─ …

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

