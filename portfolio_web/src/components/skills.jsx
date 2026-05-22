export default function Skills() {
  const skills = ["Java", "React", "MySQL", "Tailwind", "Spring Boot"];

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white px-6 scroll-mt-25">
      <h2 className="text-4xl md:text-5xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-3xl">
        {skills.map((skill, i) => (
          <div key={i} className="px-6 py-3 bg-slate-800 rounded-full hover:scale-110 transition-all duration-300">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}