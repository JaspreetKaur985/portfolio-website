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
<div className="relative mt-12 flex min-h-[460px] w-full items-center justify-center md:mt-0 md:min-h-[600px] md:justify-end">

  {/* Ticker Image */}
  <div
    onMouseEnter={() => setHoveredImage("ticker")}
    onMouseLeave={() => setHoveredImage(null)}
    className={`absolute top-4 left-6 sm:left-12 md:left-auto md:right-44 md:top-8
      h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72
      rounded-2xl bg-white/10 p-2 backdrop-blur-md cursor-pointer transition-all duration-300
      ${
        hoveredImage === "ticker"
          ? "scale-105 shadow-[0_0_100px_20px_rgba(255,105,135,0.6)] z-30"
          : "shadow-[0_0_60px_10px_rgba(255,105,135,0.3)] z-20"
      }`}
  >
    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-rose-300 via-pink-300 to-yellow-300 opacity-30 blur-3xl" />

    <img
      src={tickerImage}
      alt="Ticker Graphic"
      className="h-full w-full rounded-2xl object-cover"
    />
  </div>

  {/* Profile Image */}
  <div
    onMouseEnter={() => setHoveredImage("profile")}
    onMouseLeave={() => setHoveredImage(null)}
    className={`absolute bottom-4 right-6 sm:right-12 md:right-0 md:bottom-10
      h-60 w-60 sm:h-68 sm:w-68 md:h-80 md:w-80
      rounded-2xl bg-white/10 p-2 backdrop-blur-md cursor-pointer transition-all duration-300
      ${
        hoveredImage === "profile"
          ? "scale-105 shadow-[0_0_100px_20px_rgba(255,105,135,0.6)] z-30"
          : "shadow-[0_0_60px_10px_rgba(255,105,135,0.3)] z-10"
      }`}
  >
    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-rose-300 via-pink-300 to-yellow-300 opacity-30 blur-3xl" />

    <img
      src={profileImage}
      alt="Jaspreet Kaur"
      className="h-full w-full rounded-2xl object-contain p-2"
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

