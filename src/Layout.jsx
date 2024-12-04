import { Link } from "react-router-dom";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import bgImage from "/images/backgroundRainImage.jpeg";

const Layout = () => {
  const [cart, setCart] = useState([]);

  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container">
      <header className="header">
        <nav className="navBar">
          <ul className="nav-links-start">
            <div className="verticalSeparator"></div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <div className="verticalSeparator"></div>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <div className="verticalSeparator"></div>
            <li>
              <Link to="/about">About</Link>
            </li>
            <div className="verticalSeparator"></div>
          </ul>
          <ul className="nav-links-end">
            <div className="verticalSeparator"></div>
            <li>
              <Link to="/cart">
                Cart <span className="totalPrice">{totalPrice} €</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Outlet context={[cart, setCart]} />
      </main>
    </div>
  );
};

export default Layout;
