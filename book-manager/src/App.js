// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import BookListPage from './pages/BookListPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute'; // <- اضافه می‌کنیم
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Navbar />
        <div className="main-content">
          <Routes>
            {/* home page can be free */}
            <Route path="/" element={<HomePage />} />

            {/* Shaddah Governorate pages */}
            <Route 
              path="/add-book" 
              element={
                <ProtectedRoute>
                  <AddBookPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/books" 
              element={
                <ProtectedRoute>
                  <BookListPage />
                </ProtectedRoute>
              } 
            />

            {/* registration and login paths */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;