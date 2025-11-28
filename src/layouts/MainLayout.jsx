import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import heroBg from "../assets/hero-bg-1.jpg";

const MainLayout = () => {
  return (
    <div>
      <header
        className="inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
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
