import React from "react";
import person from "/Projek/cv/src/image/person.png";

const Navbar = () => {
  return (
    <nav className="py-4 outline outline-slate-400">
      <div className="container mx-auto flex justify-center items-center h-16 space-x-4">
        <a href="#home" className=" hover:text-gray-400">
          Home
        </a>
        <a href="#about" className="px-3 hover:text-gray-400">
          About Me
        </a>
        <img src={person} alt="person" className="h-10 w-10" />
        <a href="#services" className="px-3 hover:text-gray-400">
          Portofolio
        </a>
        <a href="#contact" className=" hover:text-gray-400">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
