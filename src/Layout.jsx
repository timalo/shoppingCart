import { Link } from "react-router-dom";
import "./Layout.css"; // Assuming you have a CSS file for styling
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="header">
        <nav className="navBar">
          <ul className="nav-links-start">
            <div className="verticalSeparator"></div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <div className="verticalSeparator"></div>
            <li>
              <Link to="/about">Products</Link>
            </li>
            <div className="verticalSeparator"></div>
            <li>
              <Link to="/contact">About</Link>
            </li>
            <div className="verticalSeparator"></div>
          </ul>
          <ul className="nav-links-end">
            <div className="verticalSeparator"></div>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
