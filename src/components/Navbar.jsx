import React from "react";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Resume",
  "Contact",
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 z-50 w-full">
    <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-5 gap-y-2 px-4 py-4 text-xs font-semibold tracking-wide text-[#FAF3E0] sm:gap-x-7 sm:text-sm md:flex-nowrap md:gap-x-10 md:px-8 md:text-base">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="whitespace-nowrap transition duration-300 ease-in-out hover:text-[#E7A6A1]"
        >
          {item}
        </a>
      ))}
    </div>
  </nav>
);

export default Navbar;


