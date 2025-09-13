import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "emailjs-com"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_Service_Id,
        import.meta.env.VITE_Template_Id,
        e.target,
        import.meta.env.VITE_Public_Key
      )
      .then(() => {
        alert("Message Sent!!")
        setFormData({ name: "", email: "", message: "" })
      })
      .catch(() =>
        alert("OOPS! Something went wrong. Please try again.")
      )
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-20 text-gray-100"
      style={{
        backgroundImage:
          "url('/Urvashi-Personal_Portfolio/certificates/certbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-3xl px-4">
        <RevealOnScroll>
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse leading-tight hover:brightness-125 transition duration-300">
            Get In Touch
          </h2>

          <div className="p-10 rounded-2xl border border-gray-700 bg-gray-800 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:border-blue-500 transition-all">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-gray-900/30 border border-gray-700 rounded px-4 py-3 text-gray-100 placeholder-gray-400 transition focus:outline-none focus:border-blue-500 focus:bg-gray-900/50"
              />

              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-gray-900/30 border border-gray-700 rounded px-4 py-3 text-gray-100 placeholder-gray-400 transition focus:outline-none focus:border-blue-500 focus:bg-gray-900/50"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-gray-900/30 border border-gray-700 rounded px-4 py-3 text-gray-100 placeholder-gray-400 transition focus:outline-none focus:border-blue-500 focus:bg-gray-900/50"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
