import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'IUPACpalV2',
    description: 'A user-friendly website to efficiently identify the Inverted Repeats (IR) in IUPAC encoded DNA sequence.',
    technologies: ['TypeScript', 'NodeJS', 'ExpressJS', 'NextJS', 'C++', 'MySQL', 'Firebase'],
    githubUrl: 'https://github.com/yourusername/IUPACpalV2',
  },
  {
    title: 'Hostel Management',
    description: 'A web-based system to improve hostel management efficiency and communication between administrators and students.',
    technologies: ['React', 'Bootstrap', 'NodeJS', 'ExpressJS', 'MySQL'],
    githubUrl: 'https://github.com/yourusername/hostel-management',
  },
  {
    title: 'FunBook',
    description: 'An app for kids to enjoy their textbooks and practice creativity by making animated movies from poems and short stories.',
    technologies: ['Android', 'Java', 'Firebase'],
    githubUrl: 'https://github.com/yourusername/funbook',
  },
  {
    title: 'HealthCal',
    description: 'A Disease Prediction App using ML to predict the risk of diabetes, maternal health risks, heart attack, and stroke.',
    technologies: ['Python', 'JavaScript', 'Flask'],
    githubUrl: 'https://github.com/yourusername/healthcal',
  },
  {
    title: 'Labtastic',
    description: 'A platform to significantly improve the education experience for students, particularly those with limited access to equipment and resources for practical classes.',
    technologies: ['MongoDB', 'P5JS', 'NextJS'],
    githubUrl: 'https://github.com/yourusername/labtastic',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">
            Here are my key projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Preity2018331008"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-blue-600"
          >
            <span className="mr-2">View More on GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
