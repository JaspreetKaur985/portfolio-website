import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
  FaFigma, FaBootstrap, FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb, SiFirebase, SiCanva, SiAdobeillustrator,
} from "react-icons/si";
import profileImage from "/download.jpg";

const technologies = [
  { name: "HTML5", icon: <FaHtml5 className="text-[#e34c26]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#264de4]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#f0db4f]" /> },
  { name: "React", icon: <FaReact className="text-[#61dbfb]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#68a063]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#4db33d]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#ffcb2b]" /> },
  { name: "MySQL", icon: <FaDatabase className="text-[#00758f]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#f05032]" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952b3]" /> },
  { name: "Figma", icon: <FaFigma className="text-[#f24e1e]" /> },
  { name: "Canva", icon: <SiCanva className="text-[#00c4cc]" /> },
  { name: "Illustrator", icon: <SiAdobeillustrator className="text-[#ff9a00]" /> },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const About = () => (
  <section
    id="about"
    className="relative overflow-hidden py-28 px-6 md:px-20 bg-gradient-to-br from-[#a3989d] via-[#c9b9b3] to-[#e5dace] text-black"
  >
    {/* Background pink & purple glowing blobs */}
    <div
      className="absolute rounded-full bg-rose-500 opacity-20 blur-[160px] w-[600px] h-[600px] top-[-220px] left-[-220px]"
      style={{ filter: "brightness(1.3)" }}
    />
    <div
      className="absolute rounded-full bg-purple-500 opacity-15 blur-[140px] w-[450px] h-[450px] bottom-[-160px] right-[-160px]"
      style={{ filter: "brightness(1.1)" }}
    />

    {/* Title */}
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-5xl font-extrabold text-center mb-20 tracking-wide text-black drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]"
    >
      About Me
    </motion.h2>

    {/* Content wrapper */}
    <div className="flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto relative z-10">
      {/* Profile image with glowing border */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
        className="relative w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border border-pink-500/40"
        style={{ boxShadow: "0 0 30px 8px rgba(255,79,154,0.3)" }}
      >
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 rounded-3xl pointer-events-none border border-pink-400/40" />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={2}
        className="space-y-10 max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-black/20 shadow-lg"
      >
        {/* Break text into statements with accent bars */}
        {[
          "Computer Programming graduate specialized in web & graphic design instruction.",
          "This portfolio is crafted exclusively for Access Business College to demonstrate teaching expertise and mastery of modern web technologies.",
          "Skilled in React, Node.js, MongoDB, Adobe Illustrator, Figma, and Canva, integrating practical project-based learning with creativity.",
          "Committed to student-centered teaching with hands-on exercises preparing learners for professional success."
        ].map((statement, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="block w-1 h-10 bg-pink-500 rounded-full" />
            <p className="text-base text-black tracking-wide leading-relaxed font-medium">
              {statement}
            </p>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Technologies & Tools */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      custom={3}
      className="mt-28 z-10 relative"
    >
      <h3 className="text-2xl font-semibold text-center mb-12 tracking-wider text-black uppercase drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        Technologies & Tools
      </h3>

      <div className="overflow-x-auto whitespace-nowrap px-4 md:px-8 scrollbar-hide">
        <div className="inline-flex gap-8 items-center">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
              className="flex flex-col items-center justify-center min-w-[100px] bg-white/20 px-6 py-5 rounded-2xl border border-black/10 cursor-default select-none transition-colors duration-300"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <span className="text-sm text-black font-semibold tracking-wide">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Scrollbar hide */}
    <style>{`
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}</style>
  </section>
);

export default About;
