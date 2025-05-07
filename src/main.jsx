import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import Productpage from "./components/Productpage.jsx";
import Cart from "./components/Cartpage.jsx";
import Errorpage from "./components/Errorpage.jsx";
import Home from "./components/Home.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Errorpage />,
  },
  { path: "/products", element: <Productpage /> },
  {
    path: "/products/:productid",
    element: <ProductDetails />,
  },
  { path: "/cart", element: <Cart /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
