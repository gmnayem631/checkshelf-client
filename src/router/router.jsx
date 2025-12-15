import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Books from "../pages/Books";
import Courses from "../pages/Courses";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import TermsOfUse from "../pages/TermsOfUse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/terms",
        element: <TermsOfUse />,
      },
    ],
  },
]);

export default router;
