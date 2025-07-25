import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#2b2a2f] via-[#943a4a] to-[#343444] text-white px-6 py-8 font-medium rounded-none">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6"
      >
        {/* Left Column */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h4 className="text-xl font-extrabold tracking-wider uppercase mb-1">
            Contact
          </h4>
          <p className="text-base">jaspreetkaur29783@gmail.com</p>
          <p className="text-base">+1 437 808 9783</p>
        </div>

        {/* Right Column */}
        <div className="text-center md:text-right w-full md:w-1/2">
          <h4 className="text-xl font-extrabold tracking-wider uppercase mb-1">
            Location
          </h4>
          <p className="text-base">Ontario, Canada</p>
        </div>
      </motion.div>

      {/* Bottom Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 py-3 text-center text-xs text-[#999] font-semibold tracking-wide border-t border-gray-700"
      >
        © {new Date().getFullYear()} Jaspreet Kaur. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;









