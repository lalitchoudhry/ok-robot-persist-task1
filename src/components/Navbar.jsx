import React, {useState} from "react";

import logo from "../assets/images/robo-logo.jpg"

const Navbar = () => {
  // STATES AND VARIABLES
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="xl:max-w-screen-xl w-full flex justify-between p-2 items-center sticky top-0 z-30 shadow-lg  bg-brand">
      <span className="font-black text-2xl py-2 px-4 cursor-pointer text-center text-white underline decoration-hover decoration-4 flex items-center">
        <img className="w-8 mr-2 rounded" src={logo} alt="logo" />
        Open Droids
      </span>
      <nav className="hidden lg:flex justify-between items-center">
        <ul className="flex items-center">
          <li><a className="px-4 mx-1 py-1 font-bold text-white hover:underline decoration-hover" href="#videos">Videos</a></li>
          <li><a className="px-4 mx-1 py-1 font-bold text-white hover:underline decoration-hover" href="#analysis">Analysis</a></li>
          <li><a className="px-4 mx-1 py-1 font-bold text-white hover:underline decoration-hover" href="#paper">Paper</a></li>
          <li><a className="px-4 mx-1 py-1 font-bold text-white hover:underline decoration-hover" href="#code">Code</a></li>
          <li><a className="px-4 mx-1 py-1 font-bold text-white hover:underline decoration-hover" href="https://docs.dobb-e.com/contact-us">Contact Us</a></li>
        </ul>
      </nav>
      <div 
        className="flex lg:hidden flex-col justify-between align-center bg-space rounded p-1 shadow-md"
        onClick={()=>setShowMobileMenu(!showMobileMenu)}
      >
        <div className="w-6 p-0.5 m-0.5 bg-gray rounded"></div>
        <div className="w-6 p-0.5 m-0.5 bg-gray rounded"></div>
        <div className="w-6 p-0.5 m-0.5 bg-gray rounded"></div>
      </div>

      {/* MOBILE MENU */}
      { showMobileMenu && <ul className="absolute h-96 flex flex-col top-16 w-full justify-between items-center bg-space text-brand right-0 shadow-md child:w-full child:h-full child:flex child:justify-center child:items-center z-40">
        <a className="px-4 py-1 font-bold rounded-full hover:underline decoration-hover" href="#videos">Videos</a>
        <a className="px-4 py-1 font-bold rounded-full hover:underline decoration-hover" href="#analysis">Analysis</a>
        <a className="px-4 py-1 font-bold rounded-full hover:underline decoration-hover" href="#paper">Paper</a>
        <a className="px-4 py-1 font-bold rounded-full hover:underline decoration-hover" href="#code">Code</a>
        <a className="px-4 py-1 font-bold rounded-full hover:underline decoration-hover" href="https://docs.dobb-e.com/contact-us">Contact Us</a>
      </ul>
      }
    </header>
  );
};

export default Navbar;
