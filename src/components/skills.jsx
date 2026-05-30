export default function Experience() {
  const internship = [
    {
      title: "Android Developer Intern at Stypix Ahmedabad",
      duration: "June 2024 – July 2024",
      desc: "Designed and developed basic Android UI layouts using XML.\n Implemented simple application features and activity lifecycle handling. \n Performed activity navigation to enhance user flow within the application. \n Gained hands-on experience with Android Studio and app structure.",
      link: "https://www.linkedin.com/company/stypixahmd/", // 🔥 add your link
    },
    {
      title: "Android Developer Intern at BrainyBeam Infotech Ahmedabad",
      duration: "May 2025 – June 2025",
      desc: "Managed smooth navigation and data flow between different application activities. \n Integrated MySQL database with application frontend for data storage and retrieval. \n Implemented basic CRUD operations using MySQL and Java. \n Worked with core Java concepts to handle application logic and data processing.",
      link: "https://www.linkedin.com/company/brainybeam-technologies-pvt-ltd/", // optional or remove
    },
  ];

  return (
    <section
      id="internships"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-slate-900 text-white px-6 fade-in"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-400">
        Internships
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">

        {internship.map((item, i) => (
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