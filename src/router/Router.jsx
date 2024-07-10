import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Details from "../Pages/Details";
import Cart from "../Pages/Cart";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
