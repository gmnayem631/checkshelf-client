import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/books"}>Books</NavLink>
      </li>
      <li>
        <NavLink to={"/courses"}>Courses</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-white font-bold text-xl">CheckShelf</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-white">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <a className="btn rounded-lg bg-[#EBBD67] border-none hover:bg-black hover:text-[#EBBD67]">
          Login
        </a>
        <a className="btn rounded-lg btn-outline border-[#EBBD67] border-2 text-[#EBBD67] hover:bg-[#EBBD67] hover:text-black">
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
