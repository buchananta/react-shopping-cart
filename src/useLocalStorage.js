import { useState } from 'react';

export default function(initialData) {
  let localcart = JSON.parse(localStorage.getItem('cart'));
  localcart = localcart ? localcart : initialData;
  const [cart, setCart] = useState(localcart); 

  function setLocalCart(newCart) {
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  }

  return [ cart, setLocalCart ]
}