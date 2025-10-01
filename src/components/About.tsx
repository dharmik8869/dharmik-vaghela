import { Quote } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <section
      id="about"
      className={`py-32 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <div
              className={`inline-block px-4 py-2 rounded-full mb-6 ${
                darkMode ? 'bg-gray-800 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
              }`}
            >
              <span className="text-sm font-semibold">ABOUT ME</span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Turning ideas into{' '}
              <span
                className={`bg-gradient-to-r ${
                  darkMode
                    ? 'from-blue-400 to-emerald-400'
                    : 'from-blue-600 to-emerald-600'
                } bg-clip-text text-transparent`}
              >
                reality
              </span>
            </h2>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div
              className={`p-8 rounded-2xl border ${
                darkMode ? 'bg-gray-800/50 border-gray-800' : 'bg-white border-gray-200'
              }`}
            >
              <Quote
                className={`mb-4 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}
                size={32}
              />
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                I'm Dharmik Vaghela, a passionate Frontend Developer who believes that great design
                and clean code go hand in hand. My mission is to create web experiences that are
                not just functional, but delightful.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                With expertise in HTML, CSS, JavaScript, React, and Bootstrap, I transform complex
                problems into simple, beautiful, and intuitive designs. Every line of code I write
                is crafted with attention to detail and a commitment to excellence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div
                className={`p-6 rounded-2xl border ${
                  darkMode ? 'bg-gray-800/50 border-gray-800' : 'bg-white border-gray-200'
                }`}
              >
                <div
                  className={`text-4xl font-bold mb-2 bg-gradient-to-r ${
                    darkMode
                      ? 'from-blue-400 to-emerald-400'
                      : 'from-blue-600 to-emerald-600'
                  } bg-clip-text text-transparent`}
                >
                  Fast
                </div>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Optimized for performance with lightning-fast load times
                </p>
              </div>
              <div
                className={`p-6 rounded-2xl border ${
                  darkMode ? 'bg-gray-800/50 border-gray-800' : 'bg-white border-gray-200'
                }`}
              >
                <div
                  className={`text-4xl font-bold mb-2 bg-gradient-to-r ${
                    darkMode
                      ? 'from-blue-400 to-emerald-400'
                      : 'from-blue-600 to-emerald-600'
                  } bg-clip-text text-transparent`}
                >
                  Responsive
                </div>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Seamless experience across all devices and screen sizes
                </p>
              </div>
              <div
                className={`p-6 rounded-2xl border ${
                  darkMode ? 'bg-gray-800/50 border-gray-800' : 'bg-white border-gray-200'
                }`}
              >
                <div
                  className={`text-4xl font-bold mb-2 bg-gradient-to-r ${
                    darkMode
                      ? 'from-blue-400 to-emerald-400'
                      : 'from-blue-600 to-emerald-600'
                  } bg-clip-text text-transparent`}
                >
                  Intuitive
                </div>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  User-friendly interfaces that anyone can navigate
                </p>
              </div>
              <div
                className={`p-6 rounded-2xl border ${
                  darkMode ? 'bg-gray-800/50 border-gray-800' : 'bg-white border-gray-200'
                }`}
              >
                <div
                  className={`text-4xl font-bold mb-2 bg-gradient-to-r ${
                    darkMode
                      ? 'from-blue-400 to-emerald-400'
                      : 'from-blue-600 to-emerald-600'
                  } bg-clip-text text-transparent`}
                >
                  Modern
                </div>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Built with cutting-edge technologies and best practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
