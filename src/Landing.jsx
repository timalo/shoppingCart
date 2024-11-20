import { Link } from "react-router-dom";
import "./Layout.css";

const Landing = () => {
  return (
    <div className="content">
      <h1>Welcome to the Shopping page!</h1>
      <h2>Here you will find plenty of products at affordable prices</h2>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Landing;
