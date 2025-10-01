interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Responsive Design', level: 92 },
  ];

  return (
    <section
      id="skills"
      className={`py-32 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className={`inline-block px-4 py-2 rounded-full mb-6 ${
                darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-700'
              }`}
            >
              <span className="text-sm font-semibold">EXPERTISE</span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Skills &{' '}
              <span
                className={`bg-gradient-to-r ${
                  darkMode
                    ? 'from-blue-400 to-emerald-400'
                    : 'from-blue-600 to-emerald-600'
                } bg-clip-text text-transparent`}
              >
                Technologies
              </span>
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              A comprehensive toolkit of modern web technologies, honed through years of hands-on
              experience and continuous learning.
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`font-semibold text-lg ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {skill.name}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  className={`relative h-2 rounded-full overflow-hidden ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}
                >
                  <div
                    className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${
                      darkMode
                        ? 'from-blue-500 to-emerald-500'
                        : 'from-blue-600 to-emerald-600'
                    } transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
