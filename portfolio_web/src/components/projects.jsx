export default function Projects() {
  const projects = [
    {
      title: "Blood Donation App",
      desc: "Matches donors based on blood group and location",
    },
    {
      title: "Home Renting App",
      desc: "Platform to list and rent properties",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-slate-900 text-white px-6 scroll-mt-25">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        {projects.map((p, i) => (
          <div key={i} className="group bg-slate-800 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-sky-500/20">
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-sky-400">
              {p.title}
            </h3>

            <p className="text-slate-400 mb-4">{p.desc}</p>

            <div className="flex gap-4 justify-center">
              <button className="bg-sky-400 text-black px-4 py-2 rounded hover:scale-105 transition">
                Live
              </button>
              <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}