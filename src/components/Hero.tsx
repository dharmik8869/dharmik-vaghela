import { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = ['Frontend Developer', 'Problem Solver','Web Developer'];
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center relative overflow-hidden ${
        darkMode ? 'bg-gray-950' : 'bg-white'
      }`}
    >
      <div
        className={`absolute inset-0 ${
          darkMode
            ? 'bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_50%)]'
            : 'bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_50%)]'
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                darkMode ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-gray-50'
              }`}
            >
              <Sparkles size={16} className={darkMode ? 'text-emerald-400' : 'text-emerald-600'} />
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Available for work
              </span>
            </div>

            <div>
              <h1
                className={`text-6xl md:text-7xl lg:text-8xl font-bold leading-tight ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Dharmik
                <br />
                <span
                  className={`bg-gradient-to-r ${
                    darkMode ? 'from-blue-400 to-emerald-400' : 'from-blue-600 to-emerald-600'
                  } bg-clip-text text-transparent`}
                >
                  Vaghela
                </span>
              </h1>
            </div>

            <div className="h-8">
              <p className={`text-xl md:text-2xl font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className={`text-lg leading-relaxed max-w-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Crafting pixel-perfect web experiences with React, JavaScript, and modern design principles.
              Let's build something amazing together.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Scroll to Contact Button */}
              <button
                onClick={scrollToContact}
                className={`group px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  darkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Let's Talk
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Resume Download Button */}
              <a
                href="/resume.pdf"
                download
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border ${
                  darkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-900' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>1+</div>
                <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>Years Exp.</div>
              </div>
              <div className={darkMode ? 'text-gray-800' : 'text-gray-200'}>|</div>
              <div>
                <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>10+</div>
                <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>Projects</div>
              </div>
              <div className={darkMode ? 'text-gray-800' : 'text-gray-200'}>|</div>
              <div>
                <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>100%</div>
                <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative hidden lg:block">
            <div
              className={`rounded-2xl overflow-hidden border-8 w-full max-w-md mx-auto ${
                darkMode ? 'border-gray-900' : 'border-gray-100'
              }`}
              style={{ height: '600px' }} // Manual height to fix top cut
            >
              <img
                src="/profile.jpg"
                alt="Dharmik Vaghela"
                className="w-full h-full object-cover " // Top part visible
              />
            </div>

            <div
              className={`absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl border-8 ${
                darkMode ? 'border-gray-950 bg-emerald-500/20' : 'border-white bg-emerald-100'
              }`}
            ></div>
            <div
              className={`absolute -top-6 -left-6 w-32 h-32 rounded-2xl border-8 ${
                darkMode ? 'border-gray-950 bg-blue-500/20' : 'border-white bg-blue-100'
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
