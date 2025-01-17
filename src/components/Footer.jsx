import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { currentYear } from "../utils/functions";
import { socialMediaLinksData } from "../utils/social-media-link-data";
import { ACTIVE_LINK_HANDLER } from "../redux/activeLinkSlice";
import { useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer className="flex flex-col">
      <div className="flex justify-around py-16 px-56 bg-[#fae9e6] max-sm:flex-col max-sm:px-8 max-sm:gap-16 max-lg:px-16  max-lg:gap-12">
        <div className="w-full max-sm:flex max-sm:justify-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-80 hover:scale-105 max-sm:w-48 max-lg:w-56" />
          </Link>
        </div>
        <div className="flex justify-evenly w-full max-sm:gap-8 max-sm:justify-between  max-lg:gap-12">
          <div className="flex flex-col font-serif text-lg gap-1">
            <h2 className="font-julius text-4xl mb-4 font-bold max-sm:text-3xl max-sm:mb-2 max-lg:text-3xl">Links</h2>
            <Link to="products" className="hover:text-rose-900" onClick={() => dispatch(ACTIVE_LINK_HANDLER("products"))}>
              Products
            </Link>
            <Link to="/" className="hover:text-rose-900" onClick={() => dispatch(ACTIVE_LINK_HANDLER("/"))}>
              Home
            </Link>
            <Link to="about" className="hover:text-rose-900" onClick={() => dispatch(ACTIVE_LINK_HANDLER("about"))}>
              About
            </Link>
            <Link to="signin" className="hover:text-rose-900" onClick={() => dispatch(ACTIVE_LINK_HANDLER("signin"))}>
              Signin
            </Link>
          </div>
          <div className="flex flex-col font-serif text-lg gap-1">
            <h2 className="font-julius text-4xl mb-4 font-bold max-sm:text-3xl max-sm:mb-2 max-lg:text-3xl">Connect</h2>
            <a
              href="/"
              className="hover:text-rose-900"
            >
              Email
            </a>
            <Link to="contact" className="hover:text-rose-900">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-around py-8 bg-black text-white max-sm:flex-col max-sm:px-8 max-sm:gap-12 max-sm:items-center">
        <p className="font-mono max-sm:text-center">
          Copyright &copy; {currentYear()} <span className="max-sm:whitespace-pre">Designed by Parth Vijay and Aarav vijay</span> 
        </p>

        <div className="flex gap-6">
          {socialMediaLinksData.map(({ id, icon, link }) => (
            <a href={link} className="hover:scale-110" key={id}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
