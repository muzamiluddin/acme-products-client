// Initial state of our application
// For now setting application initial state to dummy tasks
const StoreInitialState = {
  products: [{
    name: 'test product',
    price: 20
  }],
  departments: [{
    name: "Books"
  },
  {
    name: "Clothes"
  }],
  promotions: []
};

export default StoreInitialState;
