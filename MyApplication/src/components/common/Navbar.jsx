import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    marginRight: '15px',
  };

  const logoStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
  };

  return (
    <div style={navbarStyle}>
      <div style={logoStyle}>Code</div>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
      </div>
    </div>
  );
};

export default Navbar;
