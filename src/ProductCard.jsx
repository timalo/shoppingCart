import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="productCard">
      <img
        className="productImage"
        src={props.item.image}
        alt={props.item.name}
      />
      <h3 className="productName">{props.item.name}</h3>
      <p className="productDesc">{props.item.description}</p>
      <p className="productPrice">{props.item.price}</p>
    </div>
  );
};

export default ProductCard;
