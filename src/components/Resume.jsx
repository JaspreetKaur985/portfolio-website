import React from "react";
import {
  FaFileAlt,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Resume = () => (
  <section
    id="resume"
    className="relative w-full min-h-[70vh] py-24 px-6 md:px-20 text-center bg-gradient-to-br from-[#a3989d] via-[#c9b9b3] to-[#e5dace] overflow-hidden"
  >
    {/* Background Graphics */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Glow Orbs */}
      <div className="absolute w-96 h-96 bg-[#b08991]/50 rounded-full top-10 left-10 blur-[180px] animate-pulse mix-blend-lighten" />

      <div className="absolute w-[30rem] h-[30rem] bg-[#c27ba0]/40 rounded-full bottom-0 right-0 blur-[500px] animate-ping mix-blend-lighten" />

      <div className="absolute w-72 h-72 bg-[#7f4ca5]/40 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[100px] animate-bounce mix-blend-lighten" />

      {/* Pink Outline Squares - Left Side */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`left-${i}`}
          className="absolute w-10 h-10 rounded-sm"
          style={{
            border: "2px solid #da5e79",
            opacity: 0.7,
            top: `${15 + (i * 13) % 70}%`,
            left: `${10 + (i * 20) % 30}%`,
            animation: `fadeScale 4s ease-in-out ${
              i * 0.7
            }s infinite alternate`,
          }}
        />
      ))}

      {/* Pink Outline Squares - Right Side */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`right-${i}`}
          className="absolute w-10 h-10 rounded-sm"
          style={{
            border: "2px solid #da5e79",
            opacity: 0.7,
            top: `${20 + (i * 15) % 70}%`,
            right: `${10 + (i * 20) % 30}%`,
            animation: `fadeScale 4s ease-in-out ${
              i * 0.7
            }s infinite alternate`,
          }}
        />
      ))}
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-wide">
        Professional Profile
      </h2>

      <p className="max-w-2xl mx-auto mb-14 text-base md:text-lg text-gray-700 leading-relaxed">
        Explore my professional experience, technical skills, and featured
        projects. Download my resume, browse my GitHub repositories, or connect
        with me on LinkedIn.
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download="Jaspreet-Kaur-Resume.pdf"
          className="group inline-flex min-w-[230px] items-center justify-center gap-3 rounded-xl bg-[#9c2942] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#7f4ca5] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#9c2942]/30"
        >
          <FaFileAlt className="text-lg transition-transform duration-300 group-hover:scale-110" />
          <span>Download Resume</span>
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/JaspreetKaur985"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-w-[230px] items-center justify-center gap-3 rounded-xl bg-[#9c2942] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#7f4ca5] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#9c2942]/30"
        >
          <FaGithub className="text-xl transition-transform duration-300 group-hover:scale-110" />
          <span>View GitHub</span>
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/jaspreet-kaur-6013a5382/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-w-[230px] items-center justify-center gap-3 rounded-xl bg-[#9c2942] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#7f4ca5] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#9c2942]/30"
        >
          <FaLinkedinIn className="text-xl transition-transform duration-300 group-hover:scale-110" />
          <span>View LinkedIn</span>
        </a>
      </div>
    </div>

    <style>{`
      @keyframes fadeScale {
        0% {
          opacity: 0.7;
          transform: scale(1);
        }

        100% {
          opacity: 0.3;
          transform: scale(1.2);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  </section>
);

export default Resume;
