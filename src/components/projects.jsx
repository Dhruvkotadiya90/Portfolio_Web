export default function Projects() {
  const projects = [
    {
      title: "Blood Donation App",
      desc: "A simple blood donation android application allows user to register and inquire for relevant blood groups and provides donor contacts.",
      link: "https://github.com/Dhruvkotadiya90/Blood-Donation"
    },
    {
      title: "Stock Price Prediction Using ML",
      desc: "Built a machine learning model to predict stock prices using historical market data and data preprocessing techniques.",
      link: "https://github.com/Dhruvkotadiya90/Stock-Price-Prediction-Using-ML"
    },
    {
      title: "REST API CRUD in Spring Boot",
      desc: "Built a machine learning model to predict stock prices using historical market data and data preprocessing techniques.",
      link: "https://github.com/Dhruvkotadiya90/REST_API"
    },
    {
      title: "FullStack Student Management System",
      desc: "Built a full-stack Student Management System with a Spring Boot REST API, implementing CRUD operations to efficiently manage student data, along with frontend integration and data handling.",
      link: "https://github.com/Dhruvkotadiya90/student-management-system-SprintBoot-"
    }
  ];

  return (
    <section id="projects" className="p-12 flex flex-col justify-center items-center bg-gradient-to-br from-black to-slate-900 text-white px-6 fade-in">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-400">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 p-6 rounded-2xl hover:scale-105 hover:bg-slate-700 transition-all duration-300 cursor-pointer block hover:text-blue-400"
          >
            <h3 className="text-2xl mb-2 font-bold underline">{p.title}</h3>
            <p className="text-slate-400 mb-4">{p.desc}</p>
            <span className="text-sm text-blue-400 mt-4 opacity-70 group-hover:opacity-100">
              Click for code →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}