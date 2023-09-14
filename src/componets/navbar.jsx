import React, { useState } from "react";
import { FaAlignRight, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigations = [
    { name: "Home", link: "home" },
    { name: "About Me", link: "about-me" },
    { name: "Service", link: "service" },
    { name: "Portfolio", link: "portfolio" },
  ];

  return (
    <div className="flex justify-between py-4 mx-5 md:mx-20 text-white font-bold">
      <span className="text-sm md:text-2xl">Andika</span>

      <ul className="hidden md:flex items-center">
        {navigations.map((navigation, index) => (
          <li key={index} className="">
            <a href="" className="p-3 hover:border-b-4 hover:border-white link">
              {navigation.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {!open ? <FaAlignRight /> : <FaTimes />}
        <ul className={open ? "block absolute ml-[-50px] text-end" : "hidden"}>
          <li>Home</li>
          <li>About Me</li>
          <li>Service</li>
          <li>Portfolio</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
