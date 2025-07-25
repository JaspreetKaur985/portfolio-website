import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 w-full text-[#FAF3E0] z-50">
    <div className="max-w-6xl mx-auto px-6 md:px-20 py-4 flex justify-center space-x-10 text-base font-semibold tracking-wide">
      {["Home", "About", "Skills", "Projects", "Graphics", "Resume", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:text-[#E7A6A1] transition duration-300 ease-in-out"
        >
          {item}
        </a>
      ))}
    </div>
  </nav>
);

export default Navbar;


