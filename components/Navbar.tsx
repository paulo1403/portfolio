"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  link: string;
}

const navItems: NavItem[] = [
  { label: "Home", link: "home" },
  { label: "About", link: "about" },
  { label: "Projects", link: "projects" },
  { label: "Contact", link: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between w-full px-6 py-4 mx-auto text-white bg-gray-900 md:px-8 md:py-6">
        <div className="flex items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-xl font-bold tracking-widest uppercase"
          >
            <span className="text-blue-500">P</span>aulo
            <span className="text-blue-500">L</span>lanos
          </Link>
        </div>
        <div className="flex items-center">
          <button
            className="p-1 text-gray-400 transition-colors duration-200 rounded hover:text-blue-500"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <RiSunLine /> : <RiMoonFill />}
          </button>
          <button
            className="p-1 ml-3 text-gray-400 transition-colors duration-200 rounded hover:text-blue-500 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } w-full px-2 py-4 mt-2 text-sm bg-gray-900 md:flex md:items-center md:justify-between md:px-0 md:py-0 md:mt-0 md:bg-transparent`}
        >
          <div className="flex flex-col items-start justify-end w-full md:flex-row">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                smooth={true}
                duration={500}
                className="block px-2 py-1 mt-2 text-white transition-colors duration-200 rounded hover:text-blue-500 md:px-0 md:py-0 md:mt-0 md:ml-6"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
