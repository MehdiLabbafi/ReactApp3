import React, { useEffect, useState } from 'react';

function BookListPage() {
 // List of books
  const [books, setBooks] = useState([]);
  // Search term
  const [query, setQuery] = useState('');

 // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  // Modal and selected book
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // Fetch books
  const fetchBooks = () => {
    const url = query
      ? `http://localhost/backend/search_books.php?q=${query}`
      : `http://localhost/backend/get_books.php`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setCurrentPage(1); // If the search is changed, go to the first page
      });
  };

  useEffect(() => {
    fetchBooks();
  }, [query]);

// Calculate the total number of pages
  const totalPages = Math.ceil(books.length / booksPerPage);

  // Start and end index of the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  // Books on this page
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Previous
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Next
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Click on "Details"
  const handleShowModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setShowModal(false);
  };

  return (
    <div className="book-list-page">
      <h2>Books List</h2>

      {/* search field */}
      <input
        className="search-input"
        placeholder="Search by title or author"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* table of books */}
      <table className="books-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Actions</th> {/* detail button column */}
          </tr>
        </thead>
        <tbody>
          {currentBooks.length === 0 && (
            <tr>
              <td colSpan="6">No books found.</td>
            </tr>
          )}
          {currentBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>{book.rating}</td>
              <td>
                {/* details button */}
                <button
                  className="details-btn"
                  onClick={() => handleShowModal(book)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination section; Instead of the condition totalPages > 1, we just check if there is a book */}
      {books.length > 0 && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          {/* previous page */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            style={{ marginRight: '10px' }}
          >
            Prev
          </button>

          {/* number of pages */}
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                style={{
                  fontWeight: currentPage === pageNumber ? 'bold' : 'normal',
                  marginRight: '5px',
                }}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* next page */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            style={{ marginLeft: '10px' }}
          >
            Next
          </button>
        </div>
      )}

      {/* modal to display book details */}
      {showModal && selectedBook && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={handleCloseModal}>
              X
            </button>
            <h3>Book Details</h3>
            <p><strong>Title:</strong> {selectedBook.title}</p>
            <p><strong>Author:</strong> {selectedBook.author}</p>
            <p><strong>Price:</strong> {selectedBook.price}</p>
            <p><strong>Rating:</strong> {selectedBook.rating}</p>
            {/* if you return the description column in get_books.php */}
            <p><strong>Description:</strong> {selectedBook.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookListPage;