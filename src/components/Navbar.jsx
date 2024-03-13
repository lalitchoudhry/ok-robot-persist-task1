import React, {useState} from "react";

const Navbar = () => {
  // STATES AND VARIABLES
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="xl:max-w-screen-xl w-full flex justify-between p-2 items-center sticky top-0 z-30 shadow-lg bg-space">
      <span className="font-black text-2xl py-2 px-4 cursor-pointer text-center text-white underline decoration-brand decoration-4">
        Open Droids
      </span>
      <nav className="hidden lg:flex justify-between items-center">
        <ul className="flex items-center">
          <li><a className="px-4 mx-1 py-1 font-bold text-white hover:underline decoration-brand" href="#videos">Videos</a></li>
          <li><a className="px-4 mx-1 py-1 font-bold text-white hover:underline decoration-brand" href="#analysis">Analysis</a></li>
          <li><a className="px-4 mx-1 py-1 font-bold text-white hover:underline decoration-brand" href="#paper">Paper</a></li>
          <li><a className="px-4 mx-1 py-1 font-bold text-white hover:underline decoration-brand" href="#code">Code</a></li>
          <li><a className="px-4 mx-1 py-1 font-bold text-white hover:underline decoration-brand" href="#contactus">Contact Us</a></li>
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
      { showMobileMenu && <ul className="h-4/5 flex flex-col absolute top-16 w-full justify-between items-center bg-space text-white right-0 shadow-md child:w-full child:h-full child:flex child:justify-center child:items-center z-40">
        <a className="px-4 py-1 font-bold rounded-full hover:underline decoration-brand" href="#videos">Videos</a>
        <a className="px-4 py-1 font-bold rounded-full hover:underline decoration-brand" href="#">Analysis</a>
        <a className="px-4 py-1 font-bold rounded-full hover:underline decoration-brand" href="#">Paper</a>
        <a className="px-4 py-1 font-bold rounded-full hover:underline decoration-brand" href="#">Code</a>
        <a className="px-4 py-1 font-bold rounded-full hover:underline decoration-brand" href="#">Contact Us</a>
      </ul>
      }
    </header>
  );
};

export default Navbar;
