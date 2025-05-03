import { createStore } from 'redux';

// Initial state for the Redux store
const initialState = {
  cart: [],
  plants: [
    { id: 1, name: 'Aloe Vera', price: 10, category: 'Indoor', img: 'aloe.jpg', quantity: 0 },
    { id: 2, name: 'Cactus', price: 12, category: 'Outdoor', img: 'cactus.jpg', quantity: 0 },
    { id: 3, name: 'Fern', price: 15, category: 'Indoor', img: 'fern.jpg', quantity: 0 },
    { id: 4, name: 'Bamboo', price: 20, category: 'Outdoor', img: 'bamboo.jpg', quantity: 0 },
    { id: 5, name: 'Orchid', price: 25, category: 'Indoor', img: 'orchid.jpg', quantity: 0 },
    { id: 6, name: 'Succulent', price: 8, category: 'Outdoor', img: 'succulent.jpg', quantity: 0 }
  ]
};

// Reducer function
const plantReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      const updatedPlants = state.plants.map(plant =>
        plant.id === action.payload.id ? { ...plant, quantity: plant.quantity + 1 } : plant
      );
      return { ...state, plants: updatedPlants };
    case 'REMOVE_FROM_CART':
      const reducedPlants = state.plants.map(plant =>
        plant.id === action.payload.id ? { ...plant, quantity: 0 } : plant
      );
      return { ...state, plants: reducedPlants };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(plantReducer);

export default store;
