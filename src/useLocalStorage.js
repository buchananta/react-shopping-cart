import { useState } from 'react';

export default function(localVar, initialData) {
  let local = JSON.parse(localStorage.getItem(localVar));
  local = local ? local : initialData;
  const [cart, setCart] = useState(local); 

  function setLocalCart(newCart) {
    localStorage.setItem(localVar, JSON.stringify(newCart));
    setCart(newCart);
  }

  return [ cart, setLocalCart ]
}