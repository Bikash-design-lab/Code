import React from 'react';

const NotFound = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '72px',
    margin: '0',
  };

  const subheadingStyle = {
    fontSize: '24px',
    marginTop: '10px',
  };

  const linkStyle = {
    marginTop: '20px',
    fontSize: '18px',
    color: '#007bff',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404</h1>
      <p style={subheadingStyle}>Page Not Found</p>
      <a href="/" style={linkStyle}>Go back to Home</a>
    </div>
  );
};

export default NotFound;
