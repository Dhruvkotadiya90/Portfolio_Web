export default function Experience() {
  const experience = [
    {
      title: "Java Developer Intern – XYZ Company",
      duration: "Jan 2025 – Mar 2025",
      desc: "Worked on backend development using Java and contributed to real-world features.",
      link: "https://www.linkedin.com/company/xyz", // 🔥 add your link
    },
    {
      title: "Academic Projects",
      duration: "2024 – Present",
      desc: "Built multiple applications including a blood donation system and home renting platform.",
      link: "https://www.linkedin.com/", // optional or remove
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-slate-900 text-white px-6 fade-in"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">

        {experience.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-sky-500/20 block cursor-pointer"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-1 group-hover:text-sky-400">
              💼 {item.title}
            </h3>

            {/* Duration */}
            <p className="text-sm text-slate-500 mb-3">
              {item.duration}
            </p>

            {/* Description */}
            <p className="text-slate-400">
              {item.desc}
            </p>
          </a>
        ))}

      </div>
    </section>
  );
}