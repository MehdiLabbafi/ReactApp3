import React from 'react';

function HomePage() {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',     
    justifyContent: 'center', 
    height: '80vh',           
    textAlign: 'center'       
  };

  const imageStyle = {
    maxWidth: '1000px',
    marginBottom: '100px'
  };

  const welcomeTextStyle = {
    fontSize: '24px',    // Larger font size
    marginBottom: '30px' // distance from the bottom element (photo)
  };

  return (
    <div style={pageStyle}>
      <p style={welcomeTextStyle}>Welcome to the Book Management Web App</p>
      <img src="/images/welcome.jpg" alt="Welcome" style={imageStyle} />
      <h2>
        "Reading a book is a journey to the depths of the soul, 
        a journey that introduces us to diverse cultures, histories, and thoughts."
      </h2>
    </div>
  );
}

export default HomePage;