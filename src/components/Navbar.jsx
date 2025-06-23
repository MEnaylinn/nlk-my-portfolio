import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { href, Link, useLocation } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/home",
    delay: 0.1,
  },
  {
    name: "About",
    path: "/about",
    delay: 0.15,
  },
  {
    name: "Skill",
    path: "/skill",
    delay: 0.2,
  },
  {
    name: "Project",
    path: "/project",
    delay: 0.25,
  },
  {
    name: "Contact",
    path: "/contact",
    delay: 0.3,
  },
];

const logomotion = (delay) => ({
  hidden: { opacity: 0, y: -200, x: 200 },
  visiable: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.5, delay: delay },
  },
});

const logoxmotion = (delay) => ({
  hidden: { opacity: 0, x: 200, y: -200 },
  visiable: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, delay: delay },
  },
});

const Navbar = () => {
  const [isMenu, setMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const onMenu = () => {
    setMenu((pre) => !pre);
  };

  return (
    <nav className="mb-6 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-25 h-20 rounded-2xl" />
      </div>

      {/* android */}
      {isMenu ? (
        <div className="fixed top-0 right-0 bg-neutral-950 opacity-90 w-1/2 h-full py-6 rounded-2xl">
          <div className="m-6 flex flex-col items-center justify-center gap-10 text-xl tracking-tight w-1/2">
            {links.map((link, index) => {
              return (
                <motion.a
                  variants={logoxmotion(link.delay)}
                  initial="hidden"
                  animate="visiable"
                  href={link.path}
                  key={index}
                  className={`hover:text-fuchsia-400 ${
                    activeLink === link.path
                      ? "text-fuchsia-400 border-fuchsia-400 border-b-2"
                      : "text-neutral-50"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(link.path);
                    setMenu(false);
                  }}
                >
                  {link.name}
                </motion.a>
              );
            })}
          </div>
          <HiX
            className="fixed top-0 right-0 m-4 text-5xl lg:hidden"
            onClick={onMenu}
          />
        </div>
      ) : (
        <div>
          <HiMenu
            className="fixed top-0 right-0 m-4 text-5xl lg:hidden"
            onClick={onMenu}
          />
        </div>
      )}

      <div className="flex flex-col items-center justify-center">
        {/* desktop  */}
        <div className="m-6 items-center gap-8 justify-center text-xl tracking-tight hidden lg:flex">
          {links.map((link, index) => {
            return (
              <motion.a
                variants={logomotion(link.delay)}
                initial="hidden"
                animate="visiable"
                href={link.path}
                key={index}
                className={`hover:text-fuchsia-400 ${
                  activeLink === link.path
                    ? "text-fuchsia-400 border-fuchsia-400 border-b-2"
                    : "text-neutral-50"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.path);
                }}
              >
                {link.name}
              </motion.a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
