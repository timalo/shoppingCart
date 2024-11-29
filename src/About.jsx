import "./Products.css"; // reducing redefinitions, just using this.
import "./About.css";

const About = () => {
  return (
    <div className="productContent">
      <div className="productArea">
        <h1 className="centerTitle">About</h1>
        <p>
          This is a simple mock e-commerce site built with React and React
          Router
        </p>
        <p>
          All shop data is fetched from{" "}
          <a href="https://fakestoreapi.com">fakestoreapi.com</a>
        </p>
        <p>
          Built as a part of{" "}
          <a href="https://www.theodinproject.com">The Odin Project</a>
        </p>
      </div>
    </div>
  );
};

export default About;
