import React from "react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Automation Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "Zapier", level: 78 },
        { name: "N8n", level: 70 },
        { name: "Make", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-red-500 via-red-700 to-red-900 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full" />
          <p className="text-sm text-gray-400 mt-4 max-w-2xl mx-auto">
            A focused toolkit for building performant products — design-first, automation-ready, production-grade.
          </p>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="relative overflow-hidden rounded-2xl p-6 border border-gray-800 bg-gradient-to-b from-black/40 to-black/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute -left-8 -top-8 w-40 h-40 bg-gradient-to-br from-red-900/10 to-transparent rounded-full pointer-events-none blur-3xl" />
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-100">{skill.name}</span>
                      <span className="text-red-400 font-semibold">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-900 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-red-600 to-red-800 transition-all duration-1200 ease-out"
                        style={{ width: `${skill.level}%` }}
                        aria-hidden
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* stats */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center justify-center gap-8 bg-gradient-to-b from-black/40 to-black/20 border border-gray-800 rounded-2xl px-8 py-6 shadow-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-gray-400">Websites / Automations Completed</div>
            </div>

            <div className="w-px h-12 bg-gray-800 mx-2" />

            {/* <div className="text-center">
              <div className="text-3xl font-bold text-white">1+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div> */}

            {/* <div className="w-px h-12 bg-gray-800 mx-2" /> */}

            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
