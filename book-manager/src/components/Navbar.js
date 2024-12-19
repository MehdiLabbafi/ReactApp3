import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/add-book">Add Book</Link>
      <Link to="/books">Books List</Link>
    </nav>
  );
}

export default Navbar;