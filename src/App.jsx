import { useState } from "react";
import "./App.css";
import Cheack from "./Pages/Cart";
import Router from "./Router/Router";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Details from "./Pages/Details";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Cheack />,
//   },
//   {
//     path: "/details",
//     element: <Details />,
//   },
// ]);
function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
