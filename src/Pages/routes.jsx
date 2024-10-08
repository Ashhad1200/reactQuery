import { createBrowserRouter } from "react-router-dom";
import Test from "./Test";
import { ProductByCatagoryId } from "./productByCatagoryId";
import App from "../App";
import Navbar from "./nav";
import LoginForm from "./login";
import AddProduct from "./addProduct";
import RegistrationForm from "./registration";
import Protected from "./Protected";
import EditProduct from "./editProduct";
import EditUserProfile from "./editUserProfile";


// Define the router
export const router = createBrowserRouter([
  {
    element: <Navbar />, // Wrap all child routes with Navbar
    children: [
      {
        path: "/",
        element: <Protected Component={App} />,
      },
      {
        path: "/test",
        element: <Protected Component={Test} />,
      },
      {
        path: "/addProduct",
        element: <Protected Component={AddProduct} />,
      },
      {
        path: "/catagoryId",
        element: <Protected Component={ProductByCatagoryId} />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/registration",
        element: <RegistrationForm />,
      },
      {
        path: "/editProduct/:id",
        element: <EditProduct />,
      },
      {
        path: "/editUserProfile/:id",
        element: <EditUserProfile />,
      },
    ],
  },
]);
