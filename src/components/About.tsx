import React from "react";
import { Code, Palette, Zap } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-red-500 via-red-700 to-red-900 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full" />
        </div>

        {/* Text content */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            “Design with intention. Build with impact.”
          </h3>

          <p className="text-base text-gray-300 mb-4 leading-relaxed">
            I’m <span className="font-semibold text-white">Aditya Negi</span>, a
            19-year-old web developer, entrepreneur and automation builder. I
            create modern, performant websites and automation pipelines using{" "}
            <span className="text-red-400 font-semibold">React</span>,{" "}
            <span className="text-red-400 font-semibold">Tailwind</span>,{" "}
            <span className="text-red-400 font-semibold">Vite</span>, HTML,
            CSS, JavaScript — and I have core experience in C, C++ and
            Python.
          </p>

          <p className="text-base text-gray-300 mb-10 leading-relaxed">
            I run a marketing agency and a clothing brand, and I help companies
            scale with smart automations using{" "}
            <span className="font-semibold text-white">n8n</span> and AI tools. 
            I focus on clean code, intentional design, and measurable results.
          </p>

          {/* Feature highlights */}
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { Icon: Code, title: "Clean Code", desc: "Readable, testable, and maintainable." },
              { Icon: Palette, title: "Design", desc: "Focused on clarity, hierarchy & feel." },
              { Icon: Zap, title: "Automation", desc: "Workflows that save time and reduce friction." }
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="flex flex-col items-center sm:items-start gap-3 p-5 rounded-xl border border-gray-800 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-red-700 to-red-500">
                  <Icon size={20} className="text-black" />
                </div>
                <div className="text-sm text-center sm:text-left">
                  <h4 className="font-semibold text-white">{title}</h4>
                  <p className="text-gray-400 text-xs mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <p className="mt-8 text-sm text-gray-400">
            Interested in a modern website, or automations that scale?{" "}
            <a
              href="https://osirismarketing.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 font-semibold hover:underline"
            >
              Let’s build it.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
