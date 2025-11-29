import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  return (
    <div>
      {currentLocation !== "/" && <Navbar />}

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
