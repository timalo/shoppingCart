import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Welcome to the Shopping page!</h1>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Landing;
