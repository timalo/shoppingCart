import "./Layout.css";
import "./Products.css";
import items from "./data/initialItems.js";
import ProductCard from "./ProductCard.jsx";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(items);
  return (
    <div className="productContent">
      <h2 className="centerTitle">Product page</h2>
      <h3 className="centerTitle">Very good products here</h3>
      <div className="productArea">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
