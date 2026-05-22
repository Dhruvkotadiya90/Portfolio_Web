export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 scroll-mt-25">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact</h2>

      <p className="text-slate-400 mb-6">Let's build something great together.</p>

      <a href="mailto:dhruvkotadiya90@gmail.com" className="bg-sky-400 text-black px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
        Send Email
      </a>
    </section>
  );
}