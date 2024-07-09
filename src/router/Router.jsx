import React from "react";
import Cheack from "../Pages/Cart";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "../Pages/Details";
// import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
// import Login from "../Pages/Login";
// import Cheackout from ".../Pages/Cheackout";
import Cart from "../Pages/Cart";

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
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
