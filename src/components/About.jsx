import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiTypescript,
  SiAngular,
  SiVuedotjs,
  SiVite,
  SiGithub,
  SiNpm,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

import profileImage from "/download.jpg";

const technologies = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-[#E34F26]" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-[#1572B6]" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-[#F7DF1E]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-[#61DAFB]" />,
  },
  {
    name: "Angular",
    icon: <SiAngular className="text-[#DD0031]" />,
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs className="text-[#42B883]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-[#7952B3]" />,
  },
  {
    name: "Vite",
    icon: <SiVite className="text-[#646CFF]" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-[#FFCA28]" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#68A063]" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="dark:text-white text-black" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248]" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-[#4479A1]" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-[#F05032]" />,
  },
  {
    name: "GitHub",
    icon: <SiGithub className="dark:text-white text-black" />,
  },
  {
  name: "VS Code",
  icon: <VscCode className="text-[#007ACC]" />,
},
  {
    name: "npm",
    icon: <SiNpm className="text-[#CB3837]" />,
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-[#F24E1E]" />,
  },
];
const fadeIn = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (index = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: index * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const aboutContent = [
  "I am a Computer Programming graduate from Georgian College with a strong foundation in frontend and web development.",

  "I build modern, responsive and user friendly web applications using React, JavaScript, HTML5, CSS3 and modern styling frameworks.",

  "My projects have given me practical experience with component based development, Firebase authentication, REST API integration and responsive design.",

  "I enjoy creating clean interfaces, writing maintainable code and turning ideas into functional digital experiences.",

  "I am currently seeking a Frontend Developer, React Developer or Web Developer opportunity where I can contribute, learn and continue growing as a developer.",
];

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#a3989d]
        via-[#c9b9b3]
        to-[#e5dace]
        px-6
        py-32
        text-black
        md:px-20
      "
    >
      {/* Background glow */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-[-250px]
          top-[-300px]
          h-[700px]
          w-[700px]
          bg-rose-400
          opacity-25
          blur-[200px]
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-[-250px]
          right-[-200px]
          h-[600px]
          w-[600px]
          bg-purple-400
          opacity-25
          blur-[180px]
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          right-[10%]
          top-[20%]
          h-[500px]
          w-[500px]
          animate-pulse
          bg-pink-300
          opacity-20
          blur-[160px]
        "
      />

      {/* Grid texture */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)]
          bg-[size:24px_24px]
        "
      />

      {/* Decorative graphics */}

      <div
        aria-hidden="true"
        className="
          animate-spinSlow
          absolute
          left-[-80px]
          top-20
          h-48
          w-48
          rotate-[30deg]
          rounded-[25%]
          border-[3px]
          border-rose-400
          opacity-80
        "
      />

      <div
        aria-hidden="true"
        className="
          animate-pulseSlow
          absolute
          right-[-80px]
          top-[50%]
          h-80
          w-80
          rotate-[45deg]
          rounded-[25%]
          border-4
          border-pink-400
          opacity-60
        "
      />

      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-32 w-full opacity-20"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#a42440"
          fillOpacity="0.8"
          d="
            M0,128
            L60,144
            C120,160,240,192,360,202.7
            C480,213,600,203,720,197.3
            C840,192,960,192,1080,186.7
            C1200,181,1320,171,1380,165.3
            L1440,160
            V320
            H0
            Z
          "
        />
      </svg>

      {/* Heading */}

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        variants={fadeIn}
        className="
          relative
          z-10
          mb-20
          text-center
          text-5xl
          font-extrabold
          tracking-wide
        "
      >
        About Me
      </motion.h2>

      {/* Main content */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          gap-14
          md:flex-row
          md:gap-20
        "
      >
        {/* Profile image */}

        <motion.div
          variants={fadeIn}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative shrink-0"
        >
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              rounded-3xl
              bg-pink-300
              opacity-40
              blur-3xl
            "
          />

          <img
            src={profileImage}
            alt="Jaspreet Kaur"
            className="
              relative
              h-64
              w-64
              rounded-3xl
              border
              border-white
              object-cover
              shadow-2xl
            "
          />
        </motion.div>

        {/* About card */}

        <motion.div
          variants={fadeIn}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            relative
            max-w-3xl
            overflow-hidden
            rounded-3xl
            border
            border-black/10
            bg-grey/75
            p-8
            shadow-2xl
            backdrop-blur-xl
            sm:p-10
            md:p-12
          "
        >
          {/* Glass shine */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-3xl
              bg-gradient-to-br
              from-white/60
              to-transparent
              opacity-40
            "
          />

          <div className="relative z-10">
            <p
              className="
                mb-7
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-pink-600
              "
            >
              Frontend Developer • React Developer • Web Developer
            </p>

            <div className="space-y-5">
              {aboutContent.map((text) => (
                <p
                  key={text}
                  className="
                    text-base
                    leading-relaxed
                    text-black/80
                    sm:text-lg
                  "
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technology stack */}

      <motion.div
        variants={fadeIn}
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="relative z-10 mt-32"
      >
        <h3
          className="
            mb-12
            text-center
            text-2xl
            font-semibold
            uppercase
            tracking-wider
          "
        >
          Tech Stack
        </h3>

        <div className="overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="flex w-max gap-10"
          >
            {[...technologies, ...technologies].map((technology, index) => (
              <div
                key={`${technology.name}-${index}`}
                className="
                  group
                  relative
                  flex
                  h-28
                  w-28
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-black/10
                  bg-black/10
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-pink-200/60
                    to-purple-200/50
                    opacity-0
                    blur-xl
                    transition
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10 mb-2 text-3xl">
                  {technology.icon}
                </div>

                <span className="relative z-10 text-xs text-black/80">
                  {technology.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;