import React, { useEffect, useState, useRef } from "react";
import {
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
  FaPaintBrush,
} from "react-icons/fa";

const skills = [
  { name: "HTML/CSS/JS", level: 90, icon: <FaHtml5 className="text-black" /> },
  { name: "React/Vite", level: 85, icon: <FaReact className="text-black" /> },
  { name: "Bootstrap/Tailwind", level: 90, icon: <FaBootstrap className="text-black" /> },
  { name: "Node.js/Express", level: 80, icon: <FaNodeJs className="text-black" /> },
  { name: "MongoDB/MySQL", level: 75, icon: <FaDatabase className="text-black" /> },
  { name: "Figma/Sketch/Canva", level: 95, icon: <FaPaintBrush className="text-black" /> },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 px-6 md:px-20 w-full max-w-full mx-auto overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #a3989d, #c9b9b3, #e5dace)",
        color: "black",
      }}
    >
      {/* Background blurred shapes */}
      <div
        aria-hidden="true"
        className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-rose-300 opacity rounded-full filter blur-3xl animate-floatSlow"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-pink-200 opacity  rounded-full filter blur-2xl animate-floatSlow"
      />

      {/* Floating decorative dots */}
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          className={`absolute rounded-full bg-pink-500`}
          style={{
            width: `${10 + i * 3}px`,
            height: `${10 + i * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `pulse 4s ease-in-out ${i * 0.5}s infinite`,
            filter: "blur(2px)",
          }}
        />
      ))}

      {/* Side gradient lines */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-8 w-[2px] h-full bg-gradient-to-b from-transparent via-black to-transparent opacity-30 rounded"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-8 w-[2px] h-full bg-gradient-to-b from-transparent via-black to-transparent opacity-30 rounded"
      />

      {/* Title */}
      <h2 className="text-5xl font-extrabold text-center mb-20 tracking-wide relative z-10">
        Skills
      </h2>

      {/* Skills List */}
      <div className="max-w-3xl mx-auto space-y-10 relative z-10">
        {skills.map(({ name, level, icon }, idx) => (
          <div
            key={name}
            className={`flex items-center gap-6 transform transition-all duration-800 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Icon */}
            <div className="text-3xl flex-shrink-0">{icon}</div>

            {/* Text with vertical black bar */}
            <div className="flex items-center gap-4 w-1/3">
              <span className="block w-1 h-10 bg-pink-500 rounded-full" />
              <p className="font-medium tracking-wide leading-relaxed text-base">
                {name}
              </p>
            </div>

            {/* Progress bar container */}
            <div className="flex-grow bg-gray-300 rounded-full h-4 overflow-hidden shadow-inner">
              <div
  className="h-4 rounded-full transition-all duration-[2500ms] ease-in-out"
  style={{
    width: visible ? `${level}%` : "0%",
    background: "linear-gradient(90deg, #aa3455ff, #c37478ff)",
  }}
/>

            </div>

            {/* Percentage text */}
            <span className="ml-4 font-semibold w-12 text-right">
              {level}%
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.2); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;






