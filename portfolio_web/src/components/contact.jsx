export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 fade-in">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <p className="text-slate-400 mb-6">Let's build something great.</p>
      <a href="mailto:dhruvkotadiya90@gmail.com" className="bg-sky-400 text-black px-6 py-3 rounded-xl hover:scale-105 transition">
        Send Email
      </a>
    </section>
  );
}