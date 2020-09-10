import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import useLocalStorage from './useLocalStorage';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import { ItemContext } from './contexts/ItemContext';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('cart', []);

	const addItem = item => {
    // add the given item to the cart
    if (cart.includes(item)) {
      return;
    }
    setCart([...cart, item]);
	};
  const removeItem = id => {
    setCart(cart.filter((item) => item.id !== id))
  };
	return (
		<div className="App">
      <ProductContext.Provider value={{ products, addItem}} >
        <CartContext.Provider value={cart} > 
          <Navigation />

          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ItemContext.Provider value={removeItem}>
              <ShoppingCart />
            </ItemContext.Provider>
          </Route>
        </CartContext.Provider>
      </ProductContext.Provider>
		</div>
	);
}

export default App;
