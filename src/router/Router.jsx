import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/User/MyCart/MyCart";
import UserHome from "../Pages/Dashboard/User/UserHome/UserHome";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path: "adminHome",
                element: <PrivateRoute><AdminHome></AdminHome></PrivateRoute> 
                
            },
            {
                path: "users",
                element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute> 
                
            },
            {
                path: "userHome",
                element: <PrivateRoute><UserHome></UserHome></PrivateRoute>
            },
            {
                path: "myCart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute> 
                
            },
        ]
    }
]);

export default router;
