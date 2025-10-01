import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const projects = [
     {
      title: 'Portfolio',
      description:
        'Hi, I’m Dharmik Vaghela, a Frontend Developer passionate about React, JavaScript, HTML, CSS, and Bootstrap. I build responsive, interactive, and user-friendly web applications that combine clean code with modern design.',
      technologies: [ 'React','JavaScript','CSS'],
      liveLink: 'https://dharmik-vaghela.netlify.app/',
      githubLink: '',
      image: '',
    },
    {
      title: 'Nayka-Fashion',
      description:
        'Full-featured shopping experience with product catalog, cart management, and seamless checkout flow.',
      technologies: ['HTML','CSS', 'JavaScript', 'MediaQuery'],
      liveLink: 'https://nayka-fashion.onrender.com',
      githubLink: 'https://github.com/username/nayka-fashion', 
      image: 'https://www.dealsshutter.com/uploads/stores/nykaafashiondealsshutterpng-1570622859.png',
    },
    {
      title: 'Hotel Web',
      description:
        'Experience comfort, luxury, and warm hospitality in the heart of Ahemdabad. Enjoy modern rooms, exquisite dining, and top-notch facilities for a memorable stay.',
      technologies: ['React', 'API', 'HTML'],
      liveLink: 'https://hotel-web-8oi6.onrender.com',
      githubLink: 'https://github.com/dharmik8869/Hotel_Web',
      image: 'https://woodbinedevelopment.com/wp-content/uploads/2019/05/hero-legacy-2000x700.jpg',
    },
     {
      title: 'Traveling Web',
      description:
        'Experience comfort, luxury, and warm hospitality in the heart of Ahemdabad. Enjoy modern rooms, exquisite dining, and top-notch facilities for a memorable stay.',
      technologies: [ 'HTML','CSS'],
      liveLink: 'https://travel-web-nh5h.onrender.com',
      githubLink: 'https://github.com/dharmik8869/Travel_web',
      image: 'https://i.pinimg.com/736x/84/70/94/847094a5d2df67f4fc7a7a6b77bcfe7b.jpg',
    },
  ];

  return (
    <section id="projects" className={`py-32 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div
            className={`inline-block px-4 py-2 rounded-full mb-6 ${
              darkMode ? 'bg-gray-900 text-blue-400' : 'bg-blue-50 text-blue-700'
            }`}
          >
            <span className="text-sm font-semibold">RECENT WORK</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured{' '}
            <span
              className={`bg-gradient-to-r ${
                darkMode ? 'from-blue-400 to-emerald-400' : 'from-blue-600 to-emerald-600'
              } bg-clip-text text-transparent`}
            >
              Projects
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02] ${
                darkMode
                  ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Image */}
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      darkMode
                        ? 'from-gray-900 via-gray-900/60 to-transparent'
                        : 'from-gray-50 via-gray-50/60 to-transparent'
                    }`}
                  ></div>
                  <div className="absolute top-4 right-4 p-3 rounded-full transition-all duration-300 group-hover:scale-110 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </a>

              {/* Content + GitHub on right */}
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          darkMode
                            ? 'bg-gray-800 text-gray-300'
                            : 'bg-white text-gray-700 border border-gray-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub button on right side */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ml-4 flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-colors duration-300 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
