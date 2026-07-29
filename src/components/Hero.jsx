import React, { useState } from "react";
import tickerImage from "/download.png";
import profileImage from "/jaspreet.png";

const Hero = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2b2a2f] via-[#943a4a] to-[#343444] px-6 py-24 md:px-20"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Text Section */}
        <div
          className="space-y-7 text-center md:translate-x-10 md:text-left"
          style={{
            opacity: 0,
            animation: "fadeInUp 1s forwards",
            animationDelay: "0.3s",
          }}
        >
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Hi, I’m{" "}
            <span className="text-rose-400 drop-shadow-[0_0_10px_#ff4f9a]">
              Jaspreet Kaur
            </span>

            <br />

            <span className="text-3xl font-semibold tracking-wide text-rose-300 drop-shadow-[0_0_12px_#ff4f9a] md:text-4xl">
              Frontend Developer • Web Developer
            </span>
          </h1>

          <h2 className="mx-auto max-w-xl text-xl font-medium leading-relaxed text-rose-100 md:mx-0 md:text-2xl">
            Building modern, responsive and user-friendly web applications with
            clean code and engaging user experiences.
          </h2>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-300 md:mx-0 md:text-lg">
            Computer Programming graduate from Georgian College with hands-on
            experience developing responsive web applications using React,
            JavaScript, HTML, CSS, Tailwind CSS and Firebase. I enjoy turning
            ideas into polished digital experiences that work smoothly across
            different devices.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col justify-center gap-5 sm:flex-row md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-700 px-7 py-3 font-semibold text-white shadow-lg shadow-rose-600/40 transition-all duration-300 hover:-translate-y-1 hover:from-rose-500 hover:to-pink-800 hover:shadow-pink-600/60"
            >
              View Resume
            </a>

            <a
              href="https://github.com/JaspreetKaur985"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-700 px-7 py-3 font-semibold text-white shadow-lg shadow-rose-600/40 transition-all duration-300 hover:-translate-y-1 hover:from-rose-500 hover:to-pink-800 hover:shadow-pink-600/60"
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* Image Section */}
<div className="relative flex justify-center md:justify-end md:pr-10 mt-10">
  {/* Ticker Image - Top Layer */}
  <div
    onMouseEnter={() => setHoveredImage("ticker")}
    onMouseLeave={() => setHoveredImage(null)}
    className={`absolute top-[-60px] left-[-160px] relative z-20 w-64 h-64 md:w-72 md:h-72 rounded-2xl p-2 bg-white/10 backdrop-blur-md transition-transform duration-300 cursor-pointer
      ${
        hoveredImage === "ticker"
          ? "scale-105 shadow-[0_0_100px_20px_rgba(255,105,135,0.6)]"
          : "shadow-[0_0_60px_10px_rgba(255,105,135,0.3)]"
      }
    `}
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-rose-300 via-pink-300 to-yellow-300 opacity-30 rounded-2xl blur-3xl -z-10" />

    <img
      src={tickerImage}
      alt="Ticker Graphic"
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>

  {/* Profile Image - Slightly Overlapping Bottom Right */}
  <div
    onMouseEnter={() => setHoveredImage("profile")}
    onMouseLeave={() => setHoveredImage(null)}
    className={`absolute bottom-[-80px] right-[-50px] w-64 h-64 md:w-72 md:h-72 rounded-2xl p-2 bg-white/10 backdrop-blur-md transition-transform duration-300 cursor-pointer
      ${
        hoveredImage === "profile"
          ? "scale-105 shadow-[0_0_100px_20px_rgba(255,105,135,0.6)]"
          : "shadow-[0_0_60px_10px_rgba(255,105,135,0.3)]"
      }
    `}
    style={{ zIndex: hoveredImage === "profile" ? 25 : 10 }}
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-rose-300 via-pink-300 to-yellow-300 opacity-30 rounded-2xl blur-3xl -z-10" />

    <img
      src={profileImage}
      alt="Jaspreet Kaur"
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>
</div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

