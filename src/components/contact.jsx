import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white px-6 overflow-hidden fade-in"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
        Contact
      </h2>

      <p className="text-slate-300 mb-6">
        Let's build something great together.
      </p>

      <div className="flex flex-row flex-wrap justify-center items-center gap-6 mt-6">

  {/* Email */}
  <a
    href="mailto:dhruvkotadiya90@zohomail.in"
    className="flex items-center gap-3 bg-red-600 px-6 py-3 rounded-xl hover:bg-red-500 hover:scale-105 transition-all duration-300"
  >
    <FaEnvelope size={20} />
    <span>Email</span>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/Dhruvkotadiya90"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-slate-800 px-6 py-3 rounded-xl hover:bg-slate-700 hover:scale-105 transition-all duration-300"
  >
    <FaGithub size={20} />
    <span>GitHub</span>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/dhruv-kotadiya-8b843b2b3"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 hover:scale-105 transition-all duration-300"
  >
    <FaLinkedin size={20} />
    <span>LinkedIn</span>
  </a>

  {/* Resume Download Button */}
  <a
          href="/Dhruv(Resume).pdf"
          download="Dhruv(Resume).pdf"
          className="bg-lime-400 text-black px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg text-center"
        >
          Download Resume
        </a>

</div>

    </section>
  );
}