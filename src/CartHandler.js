export const addToCart = (cart, setCart, item) => {
  //If the item is already in the cart, increase the quantity by one
  //Otherwise, add the item to the cart with a quantity of one
  const itemInCart = cart.find((product) => product.id === item.id);
  if (itemInCart) {
    const newCart = cart.map((product) => {
      if (product.id === item.id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(newCart);
  } else {
    setCart([...cart, { ...item, quantity: 1 }]);
  }
};

export const removeFromCart = (cart, setCart, item) => {
  //Removes the item from the cart, regardless of quantity
  setCart(cart.filter((product) => product.id !== item.id));
};

export const changeQuantity = (cart, setCart, item, number) => {
  const newCart = cart.map((product) => {
    if (product.id === item.id) {
      return { ...product, quantity: number };
    }
    return product;
  });
  setCart(newCart);
};

export const checkout = (setCart) => {
  //Empties the cart and moves the  user to purchased page
  window.location.href = "/purchased";
  setCart([]);
};
