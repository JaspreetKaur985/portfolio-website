import React, { useState } from "react";
import tickerImage from "/download.png"; // Top image
import profileImage from "/jaspreet.png"; // Bottom image

const Hero = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  // ✅ Position controls (in Tailwind units or px/rem/%)
  const tickerPosition = {
    top: "0px",
    left: "0px",
  };

  const profilePosition = {
    bottom: "-80px",
    right: "-30px",
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2b2a2f] via-[#943a4a] to-[#343444] px-6 md:px-20">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Text Section */}
        <div
          className="space-y-8 text-center md:text-left md:translate-x-10"
          style={{
            opacity: 0,
            animation: "fadeInUp 1s forwards",
            animationDelay: "0.3s"
          }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Hello, I’m{" "}
            <span className="text-rose-400 drop-shadow-[0_0_10px_#ff4f9a]">
              Jaspreet Kaur
            </span>
            <br />
            <span className="text-rose-300 text-3xl md:text-4xl font-semibold drop-shadow-[0_0_12px_#ff4f9a] tracking-wide">
              Web & Graphics Developer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-md leading-relaxed mx-auto md:mx-0">
            I specialize in creating elegant user interfaces and captivating designs that blend aesthetics with functionality.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5 mt-6">
            <a
              href="resume.pdf"
               target="_blank"           
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-700 hover:from-rose-500 hover:to-pink-800 text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-rose-600/40 hover:shadow-pink-600/60 transition-all duration-300"
            >
              View Resume
            </a>
            <a
              href="/coverletter.pdf"
              target="_blank"           
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-700 hover:from-rose-500 hover:to-pink-800 text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-rose-600/40 hover:shadow-pink-600/60 transition-all duration-300"
            >
              View Cover Letter
            </a>
          </div>
        </div>

       {/* Image Section */}
<div className="relative flex justify-center md:justify-end md:pr-10 mt-10">
  {/* Ticker Image - Top Layer */}
  <div
    onMouseEnter={() => setHoveredImage("ticker")}
    onMouseLeave={() => setHoveredImage(null)}
    className={` absolute top-[-60px] left-[-160px] relative z-20 w-64 h-64 md:w-72 md:h-72 rounded-2xl p-2 bg-white/10 backdrop-blur-md transition-transform duration-300 cursor-pointer
      ${hoveredImage === "ticker"
        ? "scale-105 shadow-[0_0_100px_20px_rgba(255,105,135,0.6)]"
        : "shadow-[0_0_60px_10px_rgba(255,105,135,0.3)]"}
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
      ${hoveredImage === "profile"
        ? "scale-105 shadow-[0_0_100px_20px_rgba(255,105,135,0.6)]"
        : "shadow-[0_0_60px_10px_rgba(255,105,135,0.3)]"}
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

      {/* Fade-in Animation Keyframes */}
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

