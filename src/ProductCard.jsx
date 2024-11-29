import "./ProductCard.css";
import { addToCart } from "./CartHandler.js";

const ProductCard = (props) => {
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
        <button onClick={() => addToCart(props.item)} className="buyProductBtn">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
