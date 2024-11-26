import "./Layout.css";
import "./Products.css";
import ProductCard from "./ProductCard.jsx";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => response.json())
      .then((data) => {
        const newProducts = data.map((item) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.image,
        }));
        setProducts(newProducts);
      });
  }, []);
  return (
    <div className="productContent">
      <h2 className="centerTitle">Product page</h2>
      <div className="productArea">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
