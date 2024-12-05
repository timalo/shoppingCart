import "./Products.css";
import "./Layout.css";
import ProductCard from "./ProductCard.jsx";
import { useState, useEffect } from "react";
//import { useOutletContext } from "react-router-dom";
import { addToCart } from "./CartHandler.js";
import { v4 as uuidv4 } from "uuid";

const Products = () => {
  const [products, setProducts] = useState([]); //Showing shop page products. Not cart
  const [loading, setLoading] = useState(true); //For showing loading icon while waiting for API call
  const [notifications, setNotifications] = useState([]);

  const handleAddToCart = (cart, setCart, item) => {
    //This function is passed to ProductCard component and called when add to cart button is clicked
    addToCart(cart, setCart, item);
    const newNotification = {
      id: uuidv4(),
      message: `${item.name} added to cart!`,
    };
    setNotifications([...notifications, newNotification]);
    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === newNotification.id
            ? { ...notification, exiting: true }
            : notification
        )
      );
      setTimeout(() => {
        setNotifications((prevNotifications) =>
          prevNotifications.filter(
            (notification) => notification.id !== newNotification.id
          )
        );
      }, 500); // Match the duration of the exit animation
    }, 3000); // Hide notification after 3 seconds
  };

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
      <div className="notifications">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification ${notification.exiting ? "exit" : ""}`}
          >
            {notification.message}
          </div>
        ))}
      </div>
      <div className="productArea">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
