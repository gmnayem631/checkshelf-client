import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div>
      {/* {currentLocation !== "/" && <Navbar />} */}
      <Navbar />
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
