"use client";
import Link from "next/link";
import React from "react"; // Remove { useState }
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

// ... (importaciones)

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="w-full top-[39px] relative">
      <div className="fixed w-full h-[200px] top-0 left-0 z-[999] [background:linear-gradient(180deg,rgba(3.35,3.85,6.38,0.95)_10%,rgba(0,0,0,0)_100%)]"></div>
      <div className="flex items-center justify-center w-full">
        <div className="!fixed top-[60px] flex items-center justify-between w-full md:w-[1074px] h-[75px] rounded-[25px] border border-solid border-[#ffffff2b] shadow-[9px_4px_15.7px_#00000040] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] [background:linear-gradient(190deg,rgba(226.31,221.6,221.6,0.15)_0%,rgba(0,0,0,0.15)_100%)] container lg:py-4 flex-wrap mx-auto px-4 py-2 z-[1000]">
          <Link href={"/"} className="ml-10 text-2xl md:text-l text-white font-medium">
            Home
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className={`menu md:flex ${navbarOpen ? 'block' : 'hidden'}`} id="navbar">
            <ul className="flex p-0 md:p-0 md:flex-row md:space-x-0 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
