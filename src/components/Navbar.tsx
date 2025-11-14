import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://i0.wp.com/christileyphysiotherapy.com/wp-content/uploads/2021/12/cropped-Chris-Tiley-Logo-SIte-Icon-e1639001748464.png?fit=150%2C122&ssl=1"
                alt="Chris Tiley Physiotherapy"
                className="h-10 w-auto"
                onError={(e) => {
                  console.log('Logo failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-navy-700 hover:text-sky-500 px-3 py-2 font-medium">
              Home
            </Link>
            <Link to="/services" className="text-navy-700 hover:text-sky-500 px-3 py-2 font-medium">
              Services
            </Link>

            <Link to="/about" className="text-navy-700 hover:text-sky-500 px-3 py-2 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-navy-700 hover:text-sky-500 px-3 py-2 font-medium">
              Contact
            </Link>
            <button className="text-navy-700 hover:text-sky-500 px-3 py-2">
              <Search size={20} />
            </button>
          </nav>

          {/* Book Online Button */}
          <div className="hidden md:flex">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-navy-700 hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-navy-700 hover:text-sky-500 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-navy-700 hover:text-sky-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-navy-700 hover:text-sky-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>

            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-navy-700 hover:text-sky-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-navy-700 hover:text-sky-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center px-3 py-2">
              <Search size={20} className="text-navy-700" />
              <span className="ml-2 text-navy-700">Search</span>
            </div>
            <a
              href="/contact"
              className="block w-full text-center px-4 py-2 rounded-md text-base font-medium text-white bg-navy-700 hover:bg-navy-800"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
