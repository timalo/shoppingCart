import "./ProductCard.css";
import { addToCart } from "./CartHandler.js";
import { useOutletContext } from "react-router-dom";

const ProductCard = (props) => {
  const [cart, setCart] = useOutletContext();
  return (
    <div className="productCard">
      <img
        className="productImage"
        src={props.item.image}
        alt={props.item.name}
      />
      <h3 className="productName">{props.item.name}</h3>
      <div className="bottomSection">
        <p className="productPrice">{props.item.price} €</p>
        <button
          onClick={() => addToCart(cart, setCart, props.item)}
          className="buyProductBtn"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
