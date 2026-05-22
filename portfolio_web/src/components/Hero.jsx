import { useEffect, useState } from "react";

export default function Hero() {
  const texts = [
    "Java + Spring Boot Enthusiast",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typing = setTimeout(() => {
      if (charIndex < texts[textIndex].length) {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 60);

    return () => clearTimeout(typing);
  }, [charIndex, textIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white px-6 overflow-hidden fade-in">
      <div className="absolute w-72 h-72 bg-sky-500 opacity-20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl bottom-10 right-10"></div>

      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Hi, I'm <span className="text-sky-400">Dhruv</span>
      </h1>

      <p className="text-lg md:text-2xl text-slate-300 mb-6 h-8">
        {displayText}
        <span className="animate-pulse">|</span>
      </p>

      <div className="flex gap-4 mb-10">
        <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="bg-sky-400 text-black px-6 py-2 rounded-xl hover:scale-105 transition-all duration-300">
          Projects
        </button>
        <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition-all duration-300">
          Contact
        </button>
      </div>

      <div className="absolute bottom-10 animate-bounce text-2xl">↓</div>
    </section>
  );
}