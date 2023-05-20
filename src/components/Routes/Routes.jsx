import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorElement from "../Layout/ErrorPage/ErrorElement";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Login/Register";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import PrivateRoute from "./PrivateRoutes";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'all-toys',
                element: <PrivateRoute><AllToys></AllToys></PrivateRoute>
            },
            {
                path: 'my-toys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'add-a-toy',
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: 'view-details/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
              },
              {
                path: '/register',
                element: <Register></Register>
              },
              {
                path: '/about',
                element: <About></About>
              },
              {
                path: '/contact',
                element: <Contact></Contact>
              },
        ]
    },
    {
        path: '*',
        element: <ErrorElement></ErrorElement>
    }
]);

export default router;  