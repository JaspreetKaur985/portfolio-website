import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  {
    name: "HTML / CSS / JavaScript",
    level: 90,
    icon: <FaHtml5 className="text-gray-800" />,
  },
  {
    name: "React / Vite",
    level: 85,
    icon: <FaReact className="text-gray-800" />,
  },
  {
    name: "Bootstrap / Tailwind",
    level: 90,
    icon: <FaBootstrap className="text-gray-800" />,
  },
  {
    name: "Node.js / Express",
    level: 80,
    icon: <FaNodeJs className="text-gray-800" />,
  },
  {
    name: "MongoDB / MySQL",
    level: 75,
    icon: <FaDatabase className="text-gray-800" />,
  },
  {
    name: "REST API Integration",
    level: 80,
    icon: <FaCode className="text-gray-800" />,
  },
  {
    name: "Git / GitHub",
    level: 85,
    icon: <FaGitAlt className="text-gray-800" />,
  },
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const dotPositions = [
    { top: "8%", left: "7%" },
    { top: "18%", left: "88%" },
    { top: "34%", left: "13%" },
    { top: "46%", left: "82%" },
    { top: "61%", left: "6%" },
    { top: "71%", left: "91%" },
    { top: "84%", left: "17%" },
    { top: "91%", left: "76%" },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative mx-auto w-full max-w-full overflow-hidden px-6 py-28 md:px-20"
      style={{
        background:
          "linear-gradient(to bottom right, #a3989d, #c9b9b3, #e5dace)",
        color: "black",
      }}
    >
      {/* Background blurred shapes */}
      <div
        aria-hidden="true"
        className="animate-floatSlow absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-rose-300 opacity-30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="animate-floatSlow absolute bottom-[-150px] right-[-150px] h-[350px] w-[350px] rounded-full bg-pink-200 opacity-30 blur-2xl"
      />

      {/* Floating decorative dots */}
      {dotPositions.map((position, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="absolute rounded-full bg-pink-500"
          style={{
            width: `${10 + index * 3}px`,
            height: `${10 + index * 3}px`,
            top: position.top,
            left: position.left,
            animation: `pulse 4s ease-in-out ${index * 0.5}s infinite`,
            filter: "blur(2px)",
          }}
        />
      ))}

      {/* Side gradient lines */}
      <div
        aria-hidden="true"
        className="absolute left-8 top-0 h-full w-[2px] rounded bg-gradient-to-b from-transparent via-black to-transparent opacity-30"
      />

      <div
        aria-hidden="true"
        className="absolute right-8 top-0 h-full w-[2px] rounded bg-gradient-to-b from-transparent via-black to-transparent opacity-30"
      />

      {/* Title */}
      <h2 className="relative z-10 mb-6 text-center text-5xl font-extrabold tracking-wide">
        Technical Skills
      </h2>

      <p className="relative z-10 mx-auto mb-20 max-w-2xl text-center text-lg leading-relaxed text-gray-700">
        Technologies and tools I use to build modern, responsive and
        user-friendly web applications.
      </p>

      {/* Skills List */}
      <div className="relative z-10 mx-auto max-w-3xl space-y-10">
        {skills.map(({ name, level, icon }, index) => (
          <div
            key={name}
            className={`flex transform items-center gap-6 transition-all duration-700 ease-out ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            {/* Icon */}
            <div className="flex-shrink-0 text-3xl">{icon}</div>

            {/* Skill name */}
            <div className="flex w-1/3 items-center gap-4">
              <span className="block h-10 w-1 rounded-full bg-pink-500" />

              <p className="text-base font-medium leading-relaxed tracking-wide">
                {name}
              </p>
            </div>

            {/* Progress bar */}
            <div className="h-4 flex-grow overflow-hidden rounded-full bg-gray-300 shadow-inner">
              <div
                className="h-4 rounded-full transition-all duration-[2500ms] ease-in-out"
                style={{
                  width: visible ? `${level}%` : "0%",
                  background:
                    "linear-gradient(90deg, #aa3455ff, #c37478ff)",
                }}
              />
            </div>

            {/* Percentage */}
            <span className="ml-4 w-12 text-right font-semibold">
              {level}%
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }

          50% {
            opacity: 0.3;
            transform: scale(1.2);
          }
        }

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
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;






