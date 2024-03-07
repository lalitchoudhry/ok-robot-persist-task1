import React, {useState} from "react";

const Navbar = () => {
  // STATES AND VARIABLES
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="xl:max-w-screen-xl w-full flex justify-between p-2 items-center">
      <span className="font-black text-2xl py-2 px-4 shadow-md cursor-pointer rounded-full text-center bg-main text-white">
        Open Droids
      </span>
      <nav className="hidden lg:flex justify-between items-center">
        <ul className="flex items-center">
          <li><a className="px-4 mx-1 py-1 font-bold hover:shadow-md hover:bg-main hover:text-white rounded-full" href="#videos">Videos</a></li>
          <li><a className="px-4 mx-1 py-1 font-bold hover:shadow-md hover:bg-main hover:text-white rounded-full" href="#">Analysis</a></li>
          <li><a className="px-4 mx-1 py-1 font-bold hover:shadow-md hover:bg-main hover:text-white rounded-full" href="#">Paper</a></li>
          <li><a className="px-4 mx-1 py-1 font-bold hover:shadow-md hover:bg-main hover:text-white rounded-full" href="#">Code</a></li>
          <li><a className="px-4 mx-1 py-1 font-bold hover:shadow-md hover:bg-main hover:text-white rounded-full" href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div 
        className="flex lg:hidden flex-col justify-between align-center hover:bg-gray-light rounded p-1 shadow-md"
        onClick={()=>setShowMobileMenu(!showMobileMenu)}
      >
        <div className="w-6 p-0.5 m-0.5 bg-black rounded"></div>
        <div className="w-6 p-0.5 m-0.5 bg-black rounded"></div>
        <div className="w-6 p-0.5 m-0.5 bg-black rounded"></div>
      </div>

      {/* MOBILE MENU */}
      { showMobileMenu && <ul className="h-4/5 flex flex-col absolute top-16 w-full justify-between items-center bg-white right-0 shadow-md child:w-full child:h-full child:flex child:justify-center child:items-center z-20">
        <a className="px-4 py-1 font-bold rounded-full hover:shadow-md" href="#videos">Videos</a>
        <a className="px-4 py-1 font-bold rounded-full hover:shadow-md" href="#">Analysis</a>
        <a className="px-4 py-1 font-bold rounded-full hover:shadow-md" href="#">Paper</a>
        <a className="px-4 py-1 font-bold rounded-full hover:shadow-md" href="#">Code</a>
        <a className="px-4 py-1 font-bold rounded-full hover:shadow-md" href="#">Contact Us</a>
      </ul>
      }
    </header>
  );
};

export default Navbar;
