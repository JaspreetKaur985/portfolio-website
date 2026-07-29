import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  FaExchangeAlt,
  FaUtensils,
  FaReact,
  FaShoppingCart,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArrowButton = ({ onClick, direction }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === "next" ? "Next project" : "Previous project"}
    className={`
      absolute top-1/2 z-20 -translate-y-1/2
      rounded-full bg-rose-500 p-3 text-white shadow-md
      transition-all duration-300 hover:scale-110 hover:bg-rose-700
      ${direction === "next" ? "right-1 md:right-6" : "left-1 md:left-6"}
    `}
  >
    <span className="block text-3xl leading-none">
      {direction === "next" ? "›" : "‹"}
    </span>
  </button>
);

const projects = [
  {
    title: "Currency Converter",
    tech: ["HTML", "CSS", "JavaScript", "Exchange Rate API"],
    description:
      "A responsive currency conversion application that retrieves current exchange-rate data and allows users to convert between multiple international currencies through a clean and simple interface.",
    liveLink: "https://currency-converter-app-indol.vercel.app/",
    githubLink:
      "https://github.com/JaspreetKaur985/currency-converter-app",
    icon: <FaExchangeAlt />,
  },
  {
    title: "Restaurant Website",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    description:
      "A modern and responsive restaurant website featuring an attractive menu presentation, organized content sections and a user-friendly design across desktop and mobile devices.",
    liveLink: "https://jaspreetkaur985.github.io/restaurant-website/",
    githubLink: "https://github.com/JaspreetKaur985/restaurant-website",
    icon: <FaUtensils />,
  },
  {
    title: "Netflix Clone",
    tech: ["React", "Vite", "Firebase", "TMDB API"],
    description:
      "A responsive Netflix-inspired streaming interface featuring Firebase authentication, dynamic movie data from the TMDB API and reusable React components.",
    liveLink: "https://clone-netflix-sable.vercel.app/",
    githubLink: "https://github.com/JaspreetKaur985/Clone-Netflix",
    icon: <FaReact />,
  },
  {
    title: "E-Commerce Website",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    description:
      "A responsive e-commerce storefront with organized product displays, interactive shopping functionality and a clean interface designed to create a smooth browsing experience.",
    liveLink: "https://jaspreetkaur985.github.io/E-commerce/",
    githubLink: "https://github.com/JaspreetKaur985/E-commerce",
    icon: <FaShoppingCart />,
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
  pauseOnHover: true,
  arrows: true,
  nextArrow: <ArrowButton direction="next" />,
  prevArrow: <ArrowButton direction="previous" />,
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden px-6 py-28 md:px-20"
      style={{
        background:
          "linear-gradient(135deg, #a3989d 0%, #c9b9b3 50%, #e5dace 100%)",
        color: "black",
      }}
    >
      {/* Decorative background circle */}
      <div
        aria-hidden="true"
        className="animate-floatSlow absolute left-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full border-4 border-rose-800 opacity-30"
      />

      {/* Decorative background circle */}
      <div
        aria-hidden="true"
        className="animate-floatSlow absolute bottom-[-150px] left-[-120px] h-[380px] w-[280px] rounded-full border-4 border-rose-500 opacity-20"
      />

      {/* Decorative background square */}
      <div
        aria-hidden="true"
        className="animate-floatSlow absolute right-[-100px] top-24 h-[250px] w-[250px] rotate-12 rounded-lg border-8 border-rose-500 opacity-70"
      />

      {/* Decorative background square */}
      <div
        aria-hidden="true"
        className="animate-floatSlow absolute bottom-[-140px] right-[-140px] h-[320px] w-[320px] rotate-6 rounded-lg border-8 border-purple-300 opacity-65"
      />

      {/* Heading */}
      <div className="relative z-10 mb-20 text-center">
        <h2 className="text-5xl font-extrabold tracking-wide text-black drop-shadow-[0_0_5px_rgba(0,0,0,0.1)]">
          Featured Projects
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-700">
          A selection of responsive web applications built using modern
          frontend technologies, APIs and reusable components.
        </p>
      </div>

      {/* Projects slider */}
      <Slider
        {...sliderSettings}
        className="relative z-10 mx-auto max-w-5xl"
      >
        {projects.map(
          (
            {
              title,
              tech,
              description,
              liveLink,
              githubLink,
              icon,
            },
            index
          ) => (
            <div key={title} className="outline-none">
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="p-6 outline-none"
              >
                <div
                  className="
                    mx-4 rounded-3xl border border-rose-700/30
                    bg-gradient-to-br from-[#a3989d] via-[#c9b9b3]
                    to-[#e5dace] p-8 text-black shadow-lg
                    transition-all duration-500
                    hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(159,18,57,0.25)]
                    md:mx-16 md:p-10
                  "
                >
                  {/* Project icon */}
                  <div
                    className="
                      mb-6 flex h-16 w-16 items-center justify-center
                      rounded-xl bg-gradient-to-br from-rose-200
                      to-rose-400 text-3xl text-rose-800 shadow-inner
                    "
                  >
                    {icon}
                  </div>

                  {/* Project title */}
                  <h3 className="mb-3 text-3xl font-bold text-rose-800">
                    {title}
                  </h3>

                  {/* Technologies */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {tech.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full border border-rose-700/20
                          bg-white/30 px-3 py-1 text-xs font-semibold
                          tracking-wide text-rose-800 backdrop-blur-sm
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="mb-7 max-w-3xl leading-relaxed text-gray-800">
                    {description}
                  </p>

                  {/* Project links */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2 rounded-full
                        bg-rose-600 px-6 py-3 text-sm font-semibold
                        text-white shadow-md transition-all duration-300
                        hover:-translate-y-1 hover:bg-rose-700
                      "
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2 rounded-full
                        border-2 border-rose-700 px-6 py-3 text-sm
                        font-semibold text-rose-800 transition-all
                        duration-300 hover:-translate-y-1
                        hover:bg-rose-700 hover:text-white
                      "
                    >
                      <FaGithub className="text-lg" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        )}
      </Slider>

      <style>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(15px);
          }
        }

        .animate-floatSlow {
          animation: floatSlow 7s ease-in-out infinite;
        }

        .slick-dots {
          bottom: -40px;
        }

        .slick-dots li {
          margin: 0 4px;
        }

        .slick-dots li button::before {
          font-size: 12px;
          color: #881337;
          opacity: 0.4;
          transition: all 0.3s ease;
        }

        .slick-dots li.slick-active button::before {
          color: #9f1239;
          opacity: 1;
          transform: scale(1.2);
        }

        @media (max-width: 640px) {
          .slick-prev,
          .slick-next {
            display: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-floatSlow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
