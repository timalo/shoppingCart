//Not even sure if this entire file is needed or do I just define
//all the cart functions in other files

export const addToCart = (cart, setCart, item) => {
  setCart([...cart, item]);
};

export const removeFromCart = (cart, setCart, item) => {
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
