import React, { useEffect, useState } from 'react';

function BookListPage() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const fetchBooks = () => {
    fetch(`http://localhost/backend/${query ? 'search_books.php?q=' + query : 'get_books.php'}`)
      .then(res => res.json())
      .then(data => setBooks(data));
  }

  useEffect(() => {
    fetchBooks();
  }, [query]);

  return (
    <div className="book-list-page">
      <h2>Books List</h2>
      <input 
        className="search-input"
        placeholder="Search by title or author" 
        value={query} 
        onChange={(e)=>setQuery(e.target.value)} />
      <table className="books-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 && (
            <tr><td colSpan="5">No books found.</td></tr>
          )}
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>{book.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookListPage;