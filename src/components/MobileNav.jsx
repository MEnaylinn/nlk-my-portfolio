import React from "react";
import logo from "../assets/logo.png";

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


const MobileNav = () => {
  return (
    <div className="m-6 flex flex-col items-center gap-5 justify-center text-xl tracking-tight lg:flex-row">
      {links.map((link, index) => {
        return (
          <a href={link.path} key={index}>
            {link.name}
          </a>
        );
      })}
    </div>
  );
};

export default MobileNav;
