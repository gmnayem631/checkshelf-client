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
import BookDetails from "../../pages/BookDetails/BookDetails";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import InstructorDetails from "../../pages/InstructorDetails/InstructorDetails";
import AddBook from "../../components/AddBook/AddBook";
import MyCart from "../../pages/MyCart/MyCart";
import AIAssistant from "../../pages/AIAssistant/AIAssistant";

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
        loader: () => fetch("https://checkshelf-server.vercel.app/books"),
        element: (
          <Suspense fallback=<LoadingSpinner />>
            <Books />
          </Suspense>
        ),
      },
      {
        path: "/books/:id",
        loader: ({ params }) =>
          fetch(`https://checkshelf-server.vercel.app/books/${params.id}`),
        element: <BookDetails />,
      },
      {
        path: "/courses",
        loader: () => fetch("https://checkshelf-server.vercel.app/courses"),
        element: (
          <Suspense fallback=<LoadingSpinner />>
            <Courses />
          </Suspense>
        ),
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(`https://checkshelf-server.vercel.app/courses/${params.id}`),
        element: <CourseDetails />,
      },
      {
        path: "/instructors/:id",
        loader: ({ params }) =>
          fetch(
            `https://checkshelf-server.vercel.app/instructors/${params.id}`,
          ),
        element: <InstructorDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/aiRecommendation",
        element: <AIAssistant />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart />
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
