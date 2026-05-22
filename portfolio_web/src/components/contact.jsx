export default function Contact() {
  return (
    <section
  id="contact"
  className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white px-6 overflow-hidden fade-in"
>
  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    Contact
  </h2>

  <p className="text-slate-300 mb-6">
    Let's build something great together.
  </p>

  <a
    href="mailto:dhruvkotadiya90@gmail.com"
    className="bg-sky-400 text-black px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
  >
    Send Email
  </a>
</section>
  );
}