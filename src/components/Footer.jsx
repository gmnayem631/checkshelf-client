import { Github, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Products</h6>
        <Link to={"/courses"} className="link link-hover">
          Courses
        </Link>
        <Link to={"/books"} className="link link-hover">
          Books
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to={"/about"} className="link link-hover">
          About us
        </Link>
        <Link to={"/contact"} className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://linkedin.com/in/gulam-mustafa-nayem/"
            target="_blank"
          >
            <Linkedin color="#0C61BF" />
          </a>
          <a href="https://github.com/gmnayem631/" target="_blank">
            <Github />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
