import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-primary">
            Portfolio
          </Link>
          
          <div className="hidden sm:flex space-x-8">
            <Link href="/#about" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <Link href="/#projects" className="text-gray-600 hover:text-primary">
              Projects
            </Link>
            <Link href="/#skills" className="text-gray-600 hover:text-primary">
              Skills
            </Link>
            <Link href="/#contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
          </div>

          <button className="sm:hidden">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
