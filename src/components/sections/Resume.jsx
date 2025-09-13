import { RevealOnScroll } from "../RevealOnScroll";

export const Resume = () => {
<<<<<<< HEAD
  const base = "/";
=======
  // const base = "/";
>>>>>>> 9f92f9cefcbfe98042ffee097bed1aad63ac17f9

  return (
    <section
      id="resume"
      className="relative min-h-screen py-20 bg-gray-900 pb-32"
      style={{
        backgroundImage: "url('/certificates/certbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content wrapper */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Heading (same as certificates) */}
        <RevealOnScroll>
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center 
                         bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                         bg-clip-text text-transparent animate-pulse">
            Resume
          </h2>
        </RevealOnScroll>

        {/* Resume Card (same border style as certificates) */}
        <div className="flex justify-center">
          <RevealOnScroll animation="fade-up">
            <div className="p-8 rounded-xl border border-blue-600 bg-gray-900/80 
                            backdrop-blur-sm hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] hover:border-blue-400 
                            transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 
                            max-w-2xl text-center">
              <p className="text-gray-300 text-lg mb-6">
                View my updated resume to see my academic background, skills, and key projects.
              </p>

              {/* Download Resume Button */}
              <a
                href={`/resume/Urvashiii_Mishra-9555430122.pdf`}
                download="Urvashiii_Mishra_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 
                           text-white py-3 px-8 rounded-xl font-medium 
                           hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30
                           transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
