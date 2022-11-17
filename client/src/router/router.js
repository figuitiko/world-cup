import {
  createBrowserRouter,  
} from "react-router-dom";
import App from "../App";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
  },
  {
    path: "/home",
    element: <Home />,  
  },
  {
    path: "/login",
    element: <Login />,  
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "*", element: <h1>404</h1> },
]);

export default router