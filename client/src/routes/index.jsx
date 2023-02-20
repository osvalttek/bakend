import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Isadmin from "../Components/Isadmin";
import AllProducts from "../views/AllProducts";
import CreateProduct from "../views/CreateProduct";
import DeleteProduct from "../views/DeleteProduct";
import Home from "../views/Home";
import Login from "../views/Login";
import LogOut from "../views/LogOut";
import Profile from "../views/Profile";
import Register from "../views/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "admin",
        element: <Isadmin />,
        children: [
          {
            path: "createproduct",
            element: <CreateProduct />,
          },
          {
            path: "deleteproduct",
            element: <DeleteProduct />,
          },
        ],
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <LogOut /> },
]);

export default router;
