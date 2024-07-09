import React from "react";
import Cheack from "../Pages/Cart";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "../Pages/Details";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Cheack />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

function Router() {
  return (
    <>
      {" "}
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
