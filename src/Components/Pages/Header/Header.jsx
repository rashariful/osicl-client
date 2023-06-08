import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">services</Link>
      </li>
      <li>
        <Link to="/">universities</Link>
      </li>
      <li>
        <Link to="/">gallery</Link>
      </li>
      <li>
        <Link to="/">success story</Link>
      </li>
      <li>
        <Link to="/">about</Link>
      </li>
      <li>
        <Link to="/contact-us">contact</Link>
      </li>
    </React.Fragment>
  );
  return (
    <header className="text-gray-600 bg-gradient-to-bl from-[#002] via-[#000] to-[#150024] body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* <img
            className="w-16 h-auto"
            src="https://uniclients.com/_next/static/media/logo.90a55cc6.svg"
            alt="uniclients.com"
          /> */}
          <div>
            <p className="ml-3 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6C38F8] via-[#6C38F8] to-[#BB2BFF]">
             OSICL
            </p>
            <p className="ml-3 text-md text-slate-200">Oversis</p>
          </div>
        </Link>
        <nav className="md:mr-auto md:ml-16 flex flex-wrap items-center text-base justify-center">
          <ul className="list-none gap-5 leading-8 capitalize font-semibold text-white md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            {menuItems}
          </ul>
        </nav>
        <div className="flex leading-normal mt-3 gap-3">
          <button className="inline-flex px-5 py-4 text-white font-semibold  items-center border focus:outline-none hover:bg-gray-200 hover:text-black rounded md:mt-0">
          Sign in
          </button>
          <button className="inline-flex px-5 py-4 text-white font-semibold bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] items-center bg-gray-100 border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
