import { createBrowserRouter } from "react-router-dom";
import Test from "./Test";
import Edit from "./edit";
import { ProductByCatagoryId } from "./productByCatagoryId";
import App from "../App";
import Navbar from "./nav";
export const router = createBrowserRouter([
  {
    // element: <Navbar />,
    // children: [
    //   {
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
  //   ],
  // },
]);
