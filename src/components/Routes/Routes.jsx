import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;  