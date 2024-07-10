import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import DetailsPage from "../Pages/Details";
import CartPage from "../Pages/Cart";
import Login from "../Pages/Login";
import PreviousOrders from "../Pages/PreviousOrders";

// import Signup from "../Pages/Signup";
import Checkout from '../Pages/Checkout'
import ProductsList from "../Components/ProductList";
function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details/:id",
      element: <DetailsPage />,
    },
    // {
    //   path: "/checkout",
    //   element: <Cheackout />,
    // },
    {
      path: "/cart",
      element: <CartPage />,
    },
    // {
    //   path: "/signup",
    //   element: <Signup />,
    // },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/orders",
      element: <PreviousOrders />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/products",
      element: <ProductsList />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
