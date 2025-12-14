import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  const location = useLocation();
  const currentLocation = location.pathname;

  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div>
      <header className="">
        <Navbar />
      </header>
      <main
        className={`${
          currentLocation !== "/" && currentLocation !== "/about" && "pt-24"
        }`}
      >
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
