import Layout from "./Layout";

import Products from "./Products";
import Cart from "./Cart";
import Landing from "./Landing";
import About from "./About";
import Purchased from "./Purchased";
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
      { path: "about", element: <About /> },
      { path: "purchased", element: <Purchased /> },
    ],
  },
];

export default routes;
