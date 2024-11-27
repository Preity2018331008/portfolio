const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education & Experience</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">Software Engineer</h4>
                <p className="text-primary">Samsung R&D Institute Bangladesh</p>
                <p className="text-gray-600">March 2024 - Present</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">B.Sc. in Computer Science & Engineering</h4>
                <p className="text-primary">University of Sylhet</p>
                <p className="text-gray-600">2018 - 2024</p>
                <p className="text-gray-800 mt-2">CGPA: 3.91/4.00</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'Python', 'JavaScript', 'TypeScript', 'Java'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Web Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Firebase'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'AWS', 'Linux', 'VS Code', 'Postman'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
