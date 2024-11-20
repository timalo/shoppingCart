import Layout from "./Layout";

import Products from "./Products";
import Cart from "./Cart";
import Landing from "./Landing";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      //Could also add a landing page here if we want to ?  or just shove landing page elements into layout component
      { path: "/", element: <Landing /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
