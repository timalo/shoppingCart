import "./Cart.css";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useOutletContext();
  if (cart.length === 0) {
    return (
      <div className="productContent">
        <h2 className="centerTitle">Your cart</h2>
        <div className="cartArea">
          <p className="cartEmpty">Your cart is empty!</p>
          <p className="cartEmptyProductLink">
            {" "}
            {/* uuh, that's a lot of maybe unnecessary classes */}
            You can add items to your cart from the{" "}
            <a href="/products">Products</a> page
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="productContent">
      <h2 className="centerTitle">Your cart</h2>

      <div className="cartArea">
        {cart.map((item) => (
          <div key={item.id} className="productCard">
            <img className="productImage" src={item.image} alt={item.name} />
            <h3 className="productName">{item.name}</h3>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Cart;
