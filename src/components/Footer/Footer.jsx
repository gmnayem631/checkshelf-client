import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <nav>
        <Link to={"/"} className="flex gap-1 items-center font-bold">
          <img src={logo} alt="CheckShelf logo" className="h-12 sm:h-16" />
          <span className="text-xl">CheckShelf</span>
        </Link>
        <p className="text-sm text-base-content/60 max-w-40">
          Train your mind. Master the game.
        </p>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Courses</a>
        <a className="link link-hover">Books</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <Link to={"/contact"} className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to={"/terms"} className="link link-hover">
          Terms of use
        </Link>
        <Link to={"/privacy"} className="link link-hover">
          Privacy policy
        </Link>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join my-4">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-accent text-black join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
