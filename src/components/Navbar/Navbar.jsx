import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
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
      {user && (
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    signOutUser();
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-xl">
      <div className={"navbar px-3 max-w-11/12 mx-auto"}>
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
          <Link
            to={"/"}
            className={"flex justify-center items-center font-bold text-xl"}
          >
            <img src={logo} alt="" className="h-16" />
            CheckShelf
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-1 text-lg`}>{links}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          {user ? (
            <button
              onClick={handleLogout}
              className="btn rounded-lg bg-accent border-none hover:bg-black hover:text-accent"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn rounded-lg bg-accent border-none hover:bg-black hover:text-accent"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn rounded-lg btn-outline border-accent border-2 text-accent hover:bg-accent hover:text-black"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
