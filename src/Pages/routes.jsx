import { createBrowserRouter } from "react-router-dom";
import Test from "./Test";
import Edit from "./Edit";
import { ProductByCatagoryId } from "./productByCatagoryId";
import App from "../App";
import Navbar from "./nav";

// Define the router
export const router = createBrowserRouter([
  {
    element: <Navbar />,  // Wrap all child routes with Navbar
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/edit",
        element: <Edit />,
      },
      {
        path: "/catagoryId",
        element: <ProductByCatagoryId />,
      },
    ],
  },
]);
