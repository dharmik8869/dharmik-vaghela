import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin,  ArrowRight } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Github, link: 'https://github.com/dharmik8869', label: 'GitHub' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/dharmik-vaghela-9443a633a/', label: 'LinkedIn' },
    
  ];

  return (
    <section
      id="contact"
      className={`py-32 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div
              className={`inline-block px-4 py-2 rounded-full mb-6 ${
                darkMode ? 'bg-gray-900 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
              }`}
            >
              <span className="text-sm font-semibold">GET IN TOUCH</span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Let's create something{' '}
              <span
                className={`bg-gradient-to-r ${
                  darkMode
                    ? 'from-blue-400 to-emerald-400'
                    : 'from-blue-600 to-emerald-600'
                } bg-clip-text text-transparent`}
              >
                amazing
              </span>
            </h2>
            <p
              className={`text-lg leading-relaxed mb-8 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Have a project in mind? I'd love to hear about it. Drop me a message and let's start
              building something great together.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl ${
                    darkMode ? 'bg-gray-900' : 'bg-gray-100'
                  }`}
                >
                  <Mail
                    className={darkMode ? 'text-blue-400' : 'text-blue-600'}
                    size={24}
                  />
                </div>
                <div>
                  <p
                    className={`text-sm font-medium mb-1 ${
                      darkMode ? 'text-gray-500' : 'text-gray-600'
                    }`}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:dharmik@example.com"
                    className={`font-semibold transition-colors ${
                      darkMode
                        ? 'text-white hover:text-blue-400'
                        : 'text-gray-900 hover:text-blue-600'
                    }`}
                  >
                    dharmikvaghela8869@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl ${
                    darkMode ? 'bg-gray-900' : 'bg-gray-100'
                  }`}
                >
                  <MapPin
                    className={darkMode ? 'text-emerald-400' : 'text-emerald-600'}
                    size={24}
                  />
                </div>
                <div>
                  <p
                    className={`text-sm font-medium mb-1 ${
                      darkMode ? 'text-gray-500' : 'text-gray-600'
                    }`}
                  >
                    Location
                  </p>
                  <p
                    className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Ahmedabad, India
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p
                className={`text-sm font-semibold mb-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                FOLLOW ME
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl transition-all hover:scale-110 ${
                      darkMode
                        ? 'bg-gray-900 text-gray-400 hover:text-white'
                        : 'bg-gray-100 text-gray-600 hover:text-gray-900'
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`p-8 rounded-2xl border ${
              darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 text-sm font-semibold ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                    darkMode
                      ? 'bg-gray-950 border-gray-800 text-white focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-semibold ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                    darkMode
                      ? 'bg-gray-950 border-gray-800 text-white focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 text-sm font-semibold ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors resize-none ${
                    darkMode
                      ? 'bg-gray-950 border-gray-800 text-white focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full px-6 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                  darkMode
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
              {submitStatus === 'success' && (
                <p className="text-emerald-500 text-center font-medium">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
