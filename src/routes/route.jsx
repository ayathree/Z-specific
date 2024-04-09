import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Update from "../pages/Update";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../components/Register";
import PrivateRoute from "../private/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/update',
          element:<PrivateRoute><Update></Update></PrivateRoute>
        },
        {
          path:'/about',
          element:<PrivateRoute><About></About></PrivateRoute>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;