import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const links = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Skill",
    path: "/skill",
  },
  {
    name: "Project",
    path: "/project",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const logomotion = (delay) => ({
  hidden: { opacity: 0, y: -100 },
  visiable: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: delay },
  },
});

const Navbar = () => {
  const [isMenu, setMenu] = useState(false);

  const onMenu = () => {
    setMenu((pre) => !pre);
  };

  return (
    <nav className="mb-6 flex items-center justify-between py-4">
      
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-25 h-20 rounded-2xl" />
      </div>

      <div className="flex flex-col items-center justify-center">

{/* desktop  */}
        <div className="m-6 items-center gap-8 justify-center text-xl tracking-tight hidden lg:flex">
          {links.map((link, index) => {
            return (
              <a href={link.path} key={index}>
                {link.name}
              </a>
            );
          })}
        </div>
        
      </div>
       {/* android */}
        {isMenu ? (
          <div className="my-4 flex">
          <div className="m-6 flex flex-col items-center gap-5 justify-center text-xl tracking-tight lg:hidden">
              {links.map((link, index) => {
                return (
                  <a href={link.path} key={index}>
                    {link.name}
                  </a>
                );
              })}
            </div>
                      <HiX className="text-5xl lg:hidden" onClick={onMenu} />

          </div>
        ) : (
          <div>
            <HiMenu className="text-5xl lg:hidden" onClick={onMenu} />
          </div>
        )}
    </nav>
  );
};

export default Navbar;