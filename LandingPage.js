import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ backgroundImage: 'url(background.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <h1>Company Name</h1>
      <p>Welcome to our plant store. Find the best plants for your home and garden.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
