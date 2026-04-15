import { createBrowserRouter } from "react-router";
import { Suspense } from "react";
import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home/Home";
import Books from "../../pages/Books/Books";
import Courses from "../../pages/Courses/Courses";
import About from "../../pages/About/About";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Contact from "../../pages/Contact/Contact";
import TermsOfUse from "../../pages/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "../../pages/PrivacyPolicy/PrivacyPolicy";
import Dashboard from "../../pages/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

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
        loader: () => fetch("http://localhost:3000/books"),
        element: (
          <Suspense fallback=<LoadingSpinner />>
            <Books />,
          </Suspense>
        ),
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
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />,
          </PrivateRoute>
        ),
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
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

export default router;
