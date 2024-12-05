import "./Products.css"; // reducing redefinitions, just using this.
import "./About.css";
import { Link } from "react-router-dom";

const Purchased = () => {
  return (
    <div className="productContent">
      <div
        className="productArea"
        style={{
          height: "100%",
          justifyContent: "center",
        }}
      >
        <h1 className="centerTitle">
          Thanks for your money :) hehe
          <br />
          <br />
          <Link to="/">Go back to home page</Link>
        </h1>
      </div>
    </div>
  );
};

export default Purchased;
