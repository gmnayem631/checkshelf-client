import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Books from "../pages/Books";
import Courses from "../pages/Courses";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/courses",
        Component: Courses,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
