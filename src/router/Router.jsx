
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Cheackout from "../pages/Cheackout";
import Cart from "../pages/Cart";


function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/details/:id",
          element: <Details/>
        },
        {
            path: "/checkout",
            element: <Cheackout/>
          },
        {
            path: "/cart",
            element: <Cart/>
          },
          {
            path: "/signup",
            element: <Signup/>
          },
          {
            path: "/login",
            element: <Login/>
          },
      ]);
      return(
        <RouterProvider router={router} />
      )
}

export default Router