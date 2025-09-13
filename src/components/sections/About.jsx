import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "TailwindCSS", "JSP"];
  const backendSkills = ["JDBC", "Servlets"];
  const languages = ["Java", "HTML", "CSS", "Javascript", "SQL", "Python"];
  const versionControl = ["Git", "GitHub", "GitLab"];

  return (
    <section
      id="about"
      className="relative min-h-screen py-20"
      style={{
        backgroundImage:
          "url('/certificates/certbg.jpg')", // 🔹 your bg
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content wrapper */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <RevealOnScroll>
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse leading-tight">
            About <span className="font-extrabold">Me</span>
          </h2>

          {/* About Card */}
          <div className="max-w-6xl mx-auto rounded-2xl p-10 bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-purple-700 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all">
            <p className="text-gray-200 mb-8 text-lg text-center">
              Passionate developer skilled in creating full-stack solutions that
              merge functionality with great user experience.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend */}
              <SkillCard title="Frontend" skills={frontendSkills} />

              {/* Backend */}
              <SkillCard title="Backend" skills={backendSkills} />

              {/* Languages */}
              <SkillCard title="Languages" skills={languages} />

              {/* Version Control */}
              <SkillCard title="Version Control" skills={versionControl} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"> 
                <div className="p-6 rounded-xl border-gray-700 border bg-gray-800 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:border-pink-600 hover:-translate-y-1 transition-all"> 
                    <h3 className="text-xl font-semibold mb-4 text-pink-400">📚Education</h3> 
                    <ul className="list-disc list-inside text-gray-200 space-y-2 text-sm md:text-base"> 
                        <li> <strong>Masters in Computer Application</strong> - Babu Banarasi Das University (2023-2025) </li> 
                        <li> Relevant Coursework: Object Oriented Programming(Java), Data Structures & Algorithms, Database Management System, Web Technologies... </li> 
                    </ul> 
                </div> 

                <div className="p-6 rounded-xl border-gray-700 border bg-gray-800 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:border-blue-400 hover:-translate-y-1 transition-all"> 
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">💼Industrial Training</h3> 
                        <div className="space-y-4 text-gray-200 text-sm md:text-base"> 
                            <div> 
                                <h4 className="font-medium"> Java FullStack Developer Trainee at JSpiders, Noida (March 2025-Present) </h4> 
                                <p> 
                                    Completed intensive training in Core Java, Advanced Java (JDBC, Servlets, JSP), SQL, HTML, CSS, and JavaScript. Gained hands-on experience in building web applications using Java technologies. Worked on practical assignments and mini-projects to strengthen problem-solving and debugging skills. 
                                </p> 
                            </div> 
                        </div> 
                </div> 
            </div> 
        </RevealOnScroll>
      </div>
    </section>
  );
};

// 🔹 Reusable Skill Card Component
const SkillCard = ({ title, skills }) => (
  <div className="rounded-xl p-6 bg-gray-800 hover:bg-purple-900 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((tech, key) => (
        <span
          key={key}
          className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-sm hover:bg-purple-500/40 transition"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);
