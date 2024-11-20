import { Link } from "react-router-dom";
import "./Layout.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
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
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
