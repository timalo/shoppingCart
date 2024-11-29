import "./Products.css";
import "./Layout.css";
import ProductCard from "./ProductCard.jsx";
import { useState, useEffect } from "react";
//import { useOutletContext } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]); //Showing shop page products. Not cart
  const [loading, setLoading] = useState(true); //For showing loading icon while waiting for API call
  //const [cart, setCart] = useOutletContext();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((response) => response.json())
      .then((data) => {
        const newProducts = data.map((item) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.image,
        }));
        setProducts(newProducts);
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading)
    return (
      <div className="productContent">
        <h2 className="centerTitle">Product page</h2>
        <div className="productArea loading">
          <p>Loading...</p>
          <img
            className="loadingIcon"
            src="/images/reset-update-icon.png"
          ></img>
        </div>
      </div>
    );
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
