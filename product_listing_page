import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductListingPage = () => {
  const plants = useSelector(state => state.plants);
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch({ type: 'ADD_TO_CART', payload: plant });
  };

  return (
    <div>
      <h1>Product Listing</h1>
      <div>
        {plants.map(plant => (
          <div key={plant.id}>
            <img src={plant.img} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button
              disabled={plant.quantity > 0}
              onClick={() => handleAddToCart(plant)}
            >
              {plant.quantity > 0 ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
      <Link to="/cart">
        <button>Go to Cart</button>
      </Link>
    </div>
  );
};

export default ProductListingPage;
