// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // We check if the 'token' value is in localStorage?
  const isLoggedIn = !!localStorage.getItem('token');
  // If not logged in, redirect to the login page
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;