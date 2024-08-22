import React, { useState } from 'react';
import './ShoppingCart.css'; 

const ShoppingCart = () => {
  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart((prevCart) => {
      return {
        ...prevCart,
        [item]: (prevCart[item] || 0) + 1, 
      };
    });
  };

  return (
    <div className="container">
     <div class="box">
      <h1>Shopping Cart</h1></div>
      <button onClick={() => addToCart('Apple')}>Apple</button>
      <button onClick={() => addToCart('Orange')}>Orange</button>
      <button onClick={() => addToCart('Pine Apple')}>Pine Apple</button>
      <button onClick={() => addToCart('Mango')}>Mango</button>
      <button onClick={() => addToCart('Jack Fruit')}>Jack Fruit</button>

      <h2>Your Cart:</h2>
      <ul>
        {Object.entries(cart).map(([item, count]) => (
          <li key={item}>
            {item}  {count} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
