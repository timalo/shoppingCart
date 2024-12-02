import { Link } from "react-router-dom";
import "./Layout.css";
import "./Landing.css";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    const mainComp = document.querySelector("main");
    mainComp.style.overflow = "hidden";
    const timer = setTimeout(() => {
      mainComp.style.overflow = "auto";
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="content">
      <h1>Welcome to the Shopping page!</h1>
      <h2>Here you will find plenty of products at affordable prices</h2>
      <Link to="/products" className="landingLink">
        Start shopping
      </Link>
    </div>
  );
};

export default Landing;
