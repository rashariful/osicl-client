import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import NotFound from "../Components/Pages/NotFound/NotFound";
import Main from "../Layout/Main";
import Contact from "../Components/Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFound/>,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/contact-us",
            element: <Contact />,
          },
        ],
      }, 
]);

export default router