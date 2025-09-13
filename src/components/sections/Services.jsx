import React, { useState, useRef, useEffect } from "react";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaDatabase } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: <FaLaptopCode className="service-icon text-blue-400" />,
      description:
        "I build responsive and dynamic websites using Java (Servlet & JSP), React, and modern front-end technologies.",
      tech: ["Java", "Servlet", "JSP", "React", "HTML", "CSS", "JavaScript", "SQL"],
    },
    {
      title: "App Development",
      icon: <FaMobileAlt className="service-icon text-pink-400" />,
      description:
        "Developing Android applications with smooth UI, user-friendly interfaces, and optimized performance.",
      tech: ["Android", "Java", "XML", "SQLite"],
    },
    {
      title: "Database & Backend",
      icon: <FaDatabase className="service-icon text-green-400" />,
      description:
        "Designing, developing, and maintaining efficient backend systems with SQL, JDBC, and server-side programming.",
      tech: ["SQL", "JDBC", "Java", "MySQL"],
    },
    {
      title: "UI/UX Design",
      icon: <FaPaintBrush className="service-icon text-yellow-400" />,
      description:
        "Designing modern, responsive, and interactive user interfaces using HTML, CSS, and React.",
      tech: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
    },
  ];

  const [expandedIndices, setExpandedIndices] = useState([]);
  const descRefs = useRef([]);

  const toggleDescription = (index) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  useEffect(() => {
    descRefs.current.forEach((ref, index) => {
      if (ref) {
        if (expandedIndices.includes(index)) {
          ref.style.maxHeight = ref.scrollHeight + "px";
          ref.style.opacity = "1";
          ref.style.transform = "translateY(0)";
        } else {
          ref.style.maxHeight = "0px";
          ref.style.opacity = "0";
          ref.style.transform = "translateY(-10px)";
        }
      }
    });
  }, [expandedIndices]);

  return (
    <section
      id="services"
      className="relative min-h-screen py-20 pb-32"
      style={{
        backgroundImage: "url('/certificates/certbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-center animate-pulse leading-tight hover:brightness-125 transition duration-300">
            My Services
          </h2>
        </RevealOnScroll>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-2xl border border-gray-700 bg-gray-900/80 backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:shadow-[0_4px_24px_rgba(59,130,246,0.4)] hover:-translate-y-2"
            >
              {/* Clickable Icon */}
              <div
                className="flex justify-center mb-4 text-5xl cursor-pointer"
                onClick={() => toggleDescription(index)}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-white text-center">
                {service.title}
              </h3>

              {/* Description */}
              <div
                ref={(el) => (descRefs.current[index] = el)}
                className="overflow-hidden mb-4 text-gray-300 text-sm md:text-base leading-relaxed text-center transition-all duration-500"
                style={{ maxHeight: "0px", opacity: 0, transform: "translateY(-10px)" }}
              >
                {service.description}
              </div>

              {/* Tech stack */}
              <div className="mt-auto flex flex-wrap justify-center gap-2">
                {service.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/20 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
