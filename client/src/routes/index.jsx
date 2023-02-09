import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Isadmin from "../Components/Isadmin";
import AllProducts from "../views/AllProducts";
import CreateProduct from "../views/CreateProduct";
import DeleteProduct from "../views/DeleteProduct";
import Home from "../views/Home";
import Login from "../views/Login";
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
      //   {
      //     path: "/admin/createproduct",
      //     element: (
      //       <Isadmin>
      //         <CreateProduct />
      //       </Isadmin>
      //     ),
      //   },
      //   {
      //     path: "admin/deleteproduct",
      //     element: (
      //       <Isadmin>
      //         <DeleteProduct />
      //       </Isadmin>
      //     ),
      //   },

      {
        path: "",
        element: <Isadmin />,
        children: [
          {
            path: "admin/createproduct",
            element: <CreateProduct />,
          },
          {
            path: "admin/deleteproduct",
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
]);

export default router;
