import { createBrowserRouter } from "react-router-dom";
import Test from "./Test";
import { ProductByCatagoryId } from "./productByCatagoryId";
import App from "../App";
import Navbar from "./nav";
import LoginForm from "./login";
import Edit from "./edit";
import RegistrationForm from "./registration";
import Protected from "./Protected";

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
        path: "/edit",
        element: <Protected Component={Edit} />,
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
    ],
  },
]);
