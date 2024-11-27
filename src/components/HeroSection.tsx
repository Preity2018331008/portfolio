import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-primary">Samia Preity</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Software Engineer at Samsung R&D Bangladesh
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Passionate about solving complex problems through code. Expert competitive programmer with a focus on building scalable solutions.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-full opacity-10 blur-2xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/profile-placeholder.png"
                alt="Samia Preity"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
