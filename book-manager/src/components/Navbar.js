import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  // Checks if the user has a token in localStorage
  const isLoggedIn = !!localStorage.getItem('token');

 // Subject logout
  const handleLogout = () => {
    // Delete any login information such as token and user
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <nav className="navbar">
      {/* Home page link always available */}
      <Link to="/" className="navbar-link">Home</Link>

      {isLoggedIn ? (
        <>
          {/* If the user is logged in, the add book menu and the list of books will be shown */}
          <Link to="/add-book" className="navbar-link">Add Book</Link>
          <Link to="/books" className="navbar-link">Books List</Link>
          
          {/* logout button with separate style */}
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          {/* If the user is not logged in, the Login and Register menu will be displayed */}
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/register" className="navbar-link">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;