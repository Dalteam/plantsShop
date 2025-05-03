import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {
  const plants = useSelector(state => state.plants);
  const dispatch = useDispatch();

  const handleIncrease = (plant) => {
    dispatch({ type: 'ADD_TO_CART', payload: plant });
  };

  const handleDecrease = (plant) => {
    if (plant.quantity > 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: plant });
    }
  };

  const totalCost = plants.reduce((total, plant) => total + plant.price * plant.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {plants.filter(plant => plant.quantity > 0).map(plant => (
        <div key={plant.id}>
          <img src={plant.img} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => handleIncrease(plant)}>+</button>
          <p>{plant.quantity}</p>
          <button onClick={() => handleDecrease(plant)}>-</button>
        </div>
      ))}
      <h3>Total: ${totalCost}</h3>
      <button>Checkout - Coming Soon</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default ShoppingCartPage;
