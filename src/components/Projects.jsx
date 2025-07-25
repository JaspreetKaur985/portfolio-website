import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  FaReact,
  FaShoppingCart,
  FaComments,
  FaPenNib,
  FaTshirt,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArrowButton = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    aria-label={direction === "next" ? "Next" : "Previous"}
    className={`
      absolute top-1/2 -translate-y-1/2 z-20
      bg-rose-300 hover:bg-brown-500
      text-white p-3 rounded-full shadow-md
      transition
      ${direction === "next" ? "right-6" : "left-6"}
    `}
  >
    {direction === "next" ? "›" : "‹"}
  </button>
);

const projects = [
  {
    title: "Netflix Clone",
    tech: ["React", "TMDB API", "Firebase Auth"],
    description:
      "High fidelity Netflix UI with real-time video data fetching and Firebase authentication.",
    liveLink:
      "https://688175d3bb67360008a0730e--calm-kataifi-c7f44b.netlify.app/login",
    icon: <FaReact />,
  },
  {
    title: "E-Commerce Website",
    tech: ["React", "Tailwind CSS", "Firebase"],
    description:
      "E-commerce app with secure auth, shopping cart, product browsing and checkout flow.",
    icon: <FaShoppingCart />,
  },
  {
    title: "Real-Time Chat App",
    tech: ["Node.js", "Socket.IO", "MongoDB"],
    description:
      "Multi-user chat system with socket.io, real-time updates, private rooms, and persistence.",
    icon: <FaComments />,
  },
  {
    title: "Blog CMS",
    tech: ["Express.js", "EJS", "MongoDB"],
    description:
      "Content system with admin panel, customizable themes and markdown support.",
    icon: <FaPenNib />,
  },
  {
    title: "Gucci Clone",
    tech: ["React", "Tailwind", "Firebase"],
    description:
      "Luxury product UI clone with filters, secure login, smooth animations and shopping cart.",
    icon: <FaTshirt />,
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: true,
  nextArrow: <ArrowButton direction="next" />,
  prevArrow: <ArrowButton direction="prev" />,
  appendDots: (dots) => (
    <ul className="flex justify-center gap-3 mt-6">{dots}</ul>
  ),
  customPaging: () => (
    <div className="w-3 h-3 rounded-full bg-brown-500 opacity-60 hover:opacity-100 transition" />
  ),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-28 px-6 md:px-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #a3989d 0%, #c9b9b3 50%, #e5dace 100%)",
        color: "black",
      }}
    >
      {/* Background Outline Shapes */}

      {/* Circles - lighter outlines */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[280px] h-[280px] rounded-full border-4 border-rose-800 opacity-30 animate-floatSlow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-150px] left-[-120px] w-[280px] h-[380px] rounded-full border-4 border-rose-500 opacity-20 animate-floatSlow"
        aria-hidden="true"
      />

      {/* Squares - thicker and darker outlines */}
      <div
        className="absolute top-24 right-[-100px] w-[250px] h-[250px] rounded-lg border-8 border-rose-500 opacity-70 rotate-12 animate-floatSlow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-140px] right-[-140px] w-[320px] h-[320px] rounded-lg border-8 border-purple-300 opacity-65 rotate-6 animate-floatSlow"
        aria-hidden="true"
      />

      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-center mb-20 tracking-wide text-black drop-shadow-[0_0_5px_rgba(0,0,0,0.1)]">
        Featured Projects
      </h2>

      {/* Slider */}
      <Slider {...sliderSettings} className="max-w-5xl mx-auto relative z-10">
        {projects.map(({ title, tech, description, liveLink, icon }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="p-6 outline-none"
          >
            <div
              className={`
                p-8 mx-4 md:mx-16 rounded-3xl shadow-lg border
                bg-gradient-to-br from-[#a3989d] via-[#c9b9b3] to-[#e5dace] bg-opacity-90
                border-brown-500
                text-black
                hover:shadow-rose-500/50 transition-all duration-500
              `}
            >
              {/* Icon background */}
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg shadow-inner text-2xl bg-gradient-to-br from-rose-200 to-brown-800 text-rose-700">
                {icon}
              </div>

              <h3 className="text-3xl font-bold mb-2 text-brown-700">{title}</h3>

              <p className="text-sm font-medium tracking-wide mb-4 text-rose-500">
                {tech.join(" • ")}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-rose-500 text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-rose-600 transition"
                >
                  View Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </Slider>

      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-floatSlow {
          animation: floatSlow 7s ease-in-out infinite;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #6c0617ff; /* rose-500 */
          opacity: 0.6;
          transition: opacity 0.3s;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #9c2942ff; /* rose-600 */
        }
      `}</style>
    </section>
  );
};

export default Projects;
