import { RevealOnScroll } from "../RevealOnScroll";

export const Certificates = () => {
  const base = "/Urvashi-Personal_Portfolio/";

  const certificates = [
    {
      name: "Java Full-Stack",
      org: "Udemy",
      pdf: `${base}certificates/certificate1.pdf`,
    },
    {
      name: "Mobile App Development",
      org: "Babu Banarasi Das University",
      pdf: `${base}certificates/certificate2.pdf`,
    },
  ];

  return (
    <section
      id="certificates"
      className="relative min-h-screen py-20 bg-gray-900 pb-32"
      style={{
        backgroundImage: "url('/Urvashi-Personal_Portfolio/certificates/certbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content wrapper */}
      <div className="relative z-10 container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">
            Certificates
          </h2>
        </RevealOnScroll>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <RevealOnScroll key={index} animation="fade-up">
              <div className="p-6 rounded-xl border border-blue-600 bg-gray-900/80 backdrop-blur-sm hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:border-blue-400 transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 w-80">
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{cert.org}</p>

                <div className="flex gap-4">
                  {/* View button */}
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition"
                  >
                    View
                  </a>

                  {/* Download button */}
                  <a
                    href={cert.pdf}
                    download={cert.name.replace(/\s+/g, "_") + ".pdf"}
                    className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 hover:scale-105 transition"
                  >
                    Download
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
