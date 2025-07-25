import React, { useState } from "react";
import { motion } from "framer-motion";

const graphicsData = {
  birthday: [
    { title: "Birthday Post 1", img: "/graphics/birthday1.png" },
    { title: "Birthday Post 2", video: "/graphics/birthday2.mp4" },
    { title: "Birthday Post 3", img: "/graphics/birthday3.png" },
  ],
  promotions: [
    { title: "Business Promo 1", video: "/graphics/promo1.mp4" },
    { title: "Business Promo 2", video: "/graphics/promo2.mp4" },
    { title: "Business Promo 3", video: "/graphics/promo3.mp4" },
  ],
  weddings: [
    { title: "Wedding Card 1", img: "/graphics/wedding1.png" },
    { title: "Wedding Card 2", img: "/graphics/wedding2.png" },
    { title: "Wedding Card 3", img: "/graphics/wedding3.png" },
  ],
};

const Graphics = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (item) => setModalContent(item);
  const closeModal = () => setModalContent(null);

  return (
    <section
      id="graphics"
      className="relative w-full min-h-screen py-28 px-6 md:px-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #a3989d 0%, #c9b9b3 50%, #e5dace 100%)",
        color: "black",
      }}
    >
      {/* Background Graphics */}
      <div className="absolute top-20 left-[-80px] w-48 h-48 border-[3px] border-rose-400 opacity-80 rotate-[30deg] rounded-[25%] animate-spinSlow" />
      <div className="absolute top-[50%] right-[-80px] w-80 h-80 border-4 border-pink-400 opacity-60 rotate-[45deg] rounded-[25%] animate-pulseSlow" />
      <svg
        className="absolute bottom-0 left-0 w-full h-32 opacity-20"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#a42440ff"
          fillOpacity="0.8"
           animated="fluid"
          d="M0,128L60,144C120,160,240,192,360,202.7C480,213,600,203,720,197.3C840,192,960,192,1080,186.7C1200,181,1320,171,1380,165.3L1440,160V320H0Z"
        />
      </svg>

      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-center mb-20 tracking-wide text-black">
        Featured Graphics
      </h2>

      {/* Sections */}
      {Object.entries(graphicsData).map(([section, items]) => (
        <div key={section} className="mb-16 relative z-10">
          <h3 className="text-3xl font-semibold mb-10 text-center text-[#9c2942ff] capitalize">
            {section.replace(/([a-z])([A-Z])/g, "$1 $2")}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-brown-500 cursor-pointer"
                onClick={() => openModal(item)}
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <video
                    src={item.video}
                    className="w-full h-64 object-cover"
                    muted
                    loop
                    autoPlay
                  />
                )}
                <div className="p-4 text-center font-semibold text-[#4f2a2a] text-lg">
                  {item.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal for full view */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10 hover:scale-110 transition"
            >
              &times;
            </button>
            <div className="rounded-2xl overflow-hidden">
              {modalContent.img ? (
                <img
                  src={modalContent.img}
                  alt={modalContent.title}
                  className="w-full max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={modalContent.video}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] object-contain"
                />
              )}
            </div>
            <p className="text-center mt-4 text-white text-lg">
              {modalContent.title}
            </p>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spinSlow {
          animation: spinSlow 20s linear infinite;
        }

        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulseSlow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Graphics;
