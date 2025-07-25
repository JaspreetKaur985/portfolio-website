import React from "react";

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
  <div className="absolute w-72 h-72 bg-[#7f4ca5]/40 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[100px] animate-bounce mix-blend-lighten" />

  {/* Pink Outline Squares - Left Side */}
{[...Array(6)].map((_, i) => (
  <div
    key={`left-${i}`}
    className="absolute w-10 h-10 rounded-sm"
    style={{
      border: "2px solid #da5e79ff", // dark rose pink outline
      opacity: 0.7,
      top: `${15 + (i * 13) % 70}%`,
      left: `${10 + (i * 20) % 30}%`,  // Left side positions
      animation: `fadeScale 4s ease-in-out ${i * 0.7}s infinite alternate`,
    }}
  />
))}

{/* Pink Outline Squares - Right Side */}
{[...Array(6)].map((_, i) => (
  <div
    key={`right-${i}`}
    className="absolute w-10 h-10 rounded-sm"
    style={{
      border: "2px solid #da5e79ff",
      opacity: 0.7,
      top: `${20 + (i * 15) % 70}%`,
      right: `${10 + (i * 20) % 30}%`, // Right side positions
      animation: `fadeScale 4s ease-in-out ${i * 0.7}s infinite alternate`,
    }}
  />
))}

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
`}</style>

</div>

    {/* Content */}
    <div className="relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black tracking-wide">
        Resume & Cover Letter
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="bg-[#9c2942] hover:bg-[#7f4ca5] text-white px-10 py-4 rounded-xl shadow-lg transition duration-300 ease-in-out"
        >
          Download Resume
        </a>
        <a
          href="/coverletter.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="bg-[#9c2942] hover:bg-[#7f4ca5] text-white px-10 py-4 rounded-xl shadow-lg transition duration-300 ease-in-out"
        >
          Download Cover Letter
        </a>
      </div>
    </div>
  </section>
);

export default Resume;
