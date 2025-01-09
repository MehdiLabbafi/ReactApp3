import React, { useState } from 'react';

function AddBookPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/backend/add_book.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        title, 
        author, 
        price, 
        rating,
        description  // Send description
      })
    })
      .then(res => res.json())
      .then(data => {
        if(data.error){
          setMessage(data.error);
        } else {
          setMessage(data.message);
          setTitle('');
          setAuthor('');
          setPrice('');
          setRating('');
          setDescription('');
        }
      });
  };

  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} required/>

        <label>Author:</label>
        <input value={author} onChange={(e)=>setAuthor(e.target.value)} required/>

        <label>Price:</label>
        <input 
          type="number" 
          step="0.01" 
          value={price} 
          onChange={(e)=>setPrice(e.target.value)} 
          required
        />

        <label>Rating:</label>
        <input 
          type="number" 
          step="0.01" 
          value={rating} 
          onChange={(e)=>setRating(e.target.value)} 
          required
        />

        <label>Description:</label>
        <textarea 
          value={description} 
          onChange={(e)=>setDescription(e.target.value)} 
          rows="4"
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBookPage;