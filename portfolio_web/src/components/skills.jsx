export default function Skills() {
  const skills = ["Java", "React", "MySQL", "Tailwind"];

  return (
    <section id="skills" className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white px-6 overflow-hidden fade-in">

<div className="absolute w-72 h-72 bg-red-600 opacity-30 rounded-full blur-3xl top-10 left-10"></div>
<div className="absolute w-72 h-72 bg-yellow-600 opacity-30 rounded-full blur-3xl bottom-10 right-10"></div>

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