import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage]   = useState('');
  const [error, setError]       = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost/backend/register.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
          setMessage('');
        } else {
          // Successful registration:
          setMessage(data.message);   // مثلا "User registered successfully"
          setError('');

          // Reset fields
          setUsername('');
          setEmail('');
          setPassword('');

          // 2 seconds later redirect to the login page
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }
      })
      .catch(err => {
        setError('Error: ' + err);
        setMessage('');
      });
  };

  return (
    <div className="add-book-form" style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Register</h2>

      {/* success message */}
      {message && <div className="success-message">{message}</div>}

      {/* error message */}
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;