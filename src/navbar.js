import React from "react";
import person from "./image/person.png";

const Navbar = () => {
  return (
    <nav className="py-4 outline outline-slate-400">
      <div className="container mx-auto flex justify-center items-center h-16 space-x-4">
        <a href="#about" className="px-3 hover:text-gray-400">
          About
        </a>
        <a href="#project" className="pe-3 hover:text-gray-400">
          Portofolio
        </a>
        <img src={person} alt="person" className="h-10 w-10" />
        <a href="#tech" className="ps-3 hover:text-gray-400">
          Techstack
        </a>
        <a href="#contact" className="px-3 hover:text-gray-400">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
