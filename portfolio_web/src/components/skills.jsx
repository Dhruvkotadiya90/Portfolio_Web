export default function Skills() {
  const skills = ["Java", "React", "MySQL", "Tailwind"];

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white px-6 fade-in">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap gap-6">
        {skills.map((s, i) => (
          <div key={i} className="px-6 py-3 bg-slate-800 rounded-full hover:scale-110 transition">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}