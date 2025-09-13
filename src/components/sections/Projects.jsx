import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "PneumoScan: AI Driven Pneumonia Detection Using X-ray Images",
      desc: "AI-powered chest X-ray analysis for fast and accurate pneumonia detection.",
      tech: ["Python", "TensorFlow", "Keras", "Flask", "HTML", "CSS", "JavaScript"],
      live: "#",
      github: "https://github.com/Urvashii09/Final_Year_Project-PneumoScan",
      color: "blue",
    },
    {
      title: "Personal Portfolio Website",
      desc: "A modern, interactive portfolio featuring my projects with polished UI, smooth animations, and responsive design.",
      tech: ["React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
      live: "https://urvashii09.github.io/Urvashi-Personal_Portfolio/",
      github: "https://github.com/Urvashii09/Urvashi-Personal_Portfolio",
      color: "pink",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 pb-32 bg-gray-900"
      style={{
        backgroundImage: "url('/certificates/certbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content wrapper */}
      <div className="relative z-10 container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse leading-tight hover:brightness-125 transition duration-300">
            Featured Projects
          </h2>
        </RevealOnScroll>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {projects.map((proj, idx) => (
            <RevealOnScroll key={idx} animation="fade-up" className="h-full w-full">
              <div
                className={`h-full flex flex-col justify-between p-8 rounded-2xl bg-gray-800/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-105 w-full max-w-lg border border-gray-700
                ${
                  proj.color === "blue"
                    ? "hover:border-blue-400 hover:shadow-[0_4px_16px_rgba(59,130,246,0.4)]"
                    : "hover:border-pink-400 hover:shadow-[0_4px_16px_rgba(236,72,153,0.4)]"
                }`}
              >
                <div>
                  {/* Title */}
                  <h3
                    className={`text-2xl font-semibold mb-4 transition-colors ${
                      proj.color === "blue"
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-pink-400 hover:text-pink-300"
                    }`}
                  >
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                    {proj.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {proj.tech.map((tech, key) => (
                      <span
                        key={key}
                        className={`py-1.5 px-4 rounded-full text-sm font-medium transition-all ${
                          proj.color === "blue"
                            ? "bg-blue-500/20 text-blue-300 hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
                            : "bg-pink-500/20 text-pink-300 hover:bg-pink-500/40 hover:shadow-[0_2px_8px_rgba(236,72,153,0.3)]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links pinned to bottom */}
                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm md:text-base font-medium transition-colors ${
                      proj.color === "blue"
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-pink-400 hover:text-pink-300"
                    }`}
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
