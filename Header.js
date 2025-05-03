import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartCount = useSelector(state => state.plants.reduce((count, plant) => count + plant.quantity, 0));

  return (
    <header>
      <h1>Plant Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;
