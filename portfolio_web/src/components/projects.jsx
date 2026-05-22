export default function Projects() {
  const projects = [
    { title: "Blood Donation App", desc: "Matches donors" },
    { title: "Home Renting App", desc: "Property listing platform" }
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-slate-900 text-white px-6 fade-in">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        {projects.map((p, i) => (
          <div key={i} className="bg-slate-800 p-6 rounded-2xl hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl mb-2">{p.title}</h3>
            <p className="text-slate-400 mb-4">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
