import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/urvashi-mishra-8b222922a/", icon: <FaLinkedin /> },
    { name: "GitHub", url: "https://github.com/Urvashii09", icon: <FaGithub /> },
  ];

  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-700">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Urvashi Mishra. All Rights Reserved.
        </p>
        
        <div className="flex gap-4 text-2xl">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
