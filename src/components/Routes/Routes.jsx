import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorElement from "../Layout/ErrorPage/ErrorElement";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Login/Register";
import Login from "../Pages/Login/Login";

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
        ]
    },
    {
        path: '*',
        element: <ErrorElement></ErrorElement>
    }
]);

export default router;  