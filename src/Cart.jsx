import { Link } from "react-router-dom";
import "./Cart.css";
import { useOutletContext } from "react-router-dom";
import { changeQuantity, removeFromCart, checkout } from "./CartHandler.js";

const Cart = () => {
  const [cart, setCart] = useOutletContext();
  if (cart.length === 0) {
    return (
      <div className="cartContent">
        <h2 className="centerTitle">Your cart</h2>
        <div
          className="cartArea"
          style={{ flexDirection: "column", justifyContent: "flex-start" }}
        >
          <p className="cartEmpty">Your cart is empty!</p>
          <p className="cartEmptyProductLink">
            {" "}
            You can add items to your cart from the{" "}
            <Link to="/products">Products</Link> page
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="cartContent">
      <h2 className="centerTitle">Your cart</h2>
      <div className="cartArea">
        <div className="cartProductsDiv">
          {cart.map((product) => (
            <div key={product.id} className="cartProduct">
              <img
                className="cartProductImage"
                src={product.image}
                alt={product.name}
              />

              <h3 className="cartProductName">{product.name}</h3>

              <div className="cartProductQuantity">
                <button
                  onClick={() =>
                    changeQuantity(cart, setCart, product, product.quantity - 1)
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  className="cartQuantityInput"
                  value={product.quantity}
                  readOnly
                />
                <button
                  onClick={() =>
                    changeQuantity(cart, setCart, product, product.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <div className="cartFinalDiv">
                <p className="cartProductPrice">{product.price} €</p>
                <p className="productMult">x {product.quantity}</p>
                <p className="cartProductTotal">
                  = {(product.price * product.quantity).toFixed(2)} €
                </p>
                <button
                  onClick={() => removeFromCart(cart, setCart, product)}
                  className="removeBtn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cartPriceDiv">
          {cart.map((product) => {
            return (
              <div key={product.id} className="totalProduct">
                <p className="totalProductMult">
                  {product.quantity} x {product.name} ={"  "}
                  <span className="lineTotal">
                    {(product.price * product.quantity).toFixed(2)} €
                  </span>
                </p>
              </div>
            );
          })}
          <div className="cartTotalFinalDiv">
            <p className="cartTotalPrice">
              Total:{" "}
              {cart
                .reduce(
                  (acc, product) => acc + product.price * product.quantity,
                  0
                )
                .toFixed(2)}{" "}
              €
            </p>
            <Link
              to="/purchased"
              className="cartCheckoutBtn"
              onClick={() => checkout(setCart)}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
