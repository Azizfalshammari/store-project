import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import PreviousOrders from "../Pages/PreviousOrders";
import OrderDetailsPage from "../Pages/OrderDetailsPage";
// import Signup from "../Pages/Signup";
// import Cheackout from ".../Pages/Cheackout";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    },
    // {
    //   path: "/checkout",
    //   element: <Cheackout />,
    // },
    {
      path: "/cart",
      element: <Cart />,
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
      path: "/orders/:orderId",
      element: <OrderDetailsPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
