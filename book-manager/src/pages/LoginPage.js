import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage]   = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost/backend/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => {
        console.log('Server response:', data);

        if (data.error) {
          setMessage(data.error);
        } else {
          setMessage(data.message);

          // You can store token or user data in localStorage
          localStorage.setItem('token', 'myRandomTokenOrJWT');

          // If the user's data was in the server's response
          if (data.user) {
            localStorage.setItem('user', JSON.stringify(data.user));
          }

          // Direct the user to the desired page
          navigate('/books');
        }
      })
      .catch(err => {
        setMessage('Error: ' + err);
      });
  };

  return (
    <div className="add-book-form" style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;