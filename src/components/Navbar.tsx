import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileClassesOpen, setMobileClassesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-[0_1px_12px_rgba(15,23,42,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/Logo_-_250px_x_100px.png"
                alt="Chris Tiley Physiotherapy"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-navy-700 hover:text-sky-500 px-3 py-2 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/services" className="text-navy-700 hover:text-sky-500 px-3 py-2 font-medium transition-colors duration-200">
              Services
            </Link>

            {/* Classes Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-navy-700 hover:text-sky-500 px-3 py-2 font-medium transition-colors duration-200">
                Classes
                <ChevronDown size={16} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-60 bg-white shadow-lg rounded-md border border-gray-100 pt-1 z-50">
                <Link
                  to="/strength-rehab-classes"
                  className="block px-4 py-2.5 text-sm text-navy-700 hover:text-sky-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  Strength &amp; Rehab Classes
                </Link>
                <Link
                  to="/over-60s-strength-classes"
                  className="block px-4 py-2.5 text-sm text-navy-700 hover:text-sky-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  Over 60s Strength Classes
                </Link>
              </div>
            </div>

            <Link to="/about" className="text-navy-700 hover:text-sky-500 px-3 py-2 font-medium transition-colors duration-200">
              About
            </Link>
            <Link to="/events" className="text-navy-700 hover:text-sky-500 px-3 py-2 font-medium transition-colors duration-200">
              Events
            </Link>
            <Link to="/contact" className="text-navy-700 hover:text-sky-500 px-3 py-2 font-medium transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:01215170806"
              className="inline-flex items-center space-x-2 text-navy-700 hover:text-sky-500 transition-colors duration-200 font-medium"
            >
              <Phone size={18} className="text-sky-500" />
              <span>0121 517 0806</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-md text-white bg-navy-700 hover:bg-navy-800 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile phone + menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href="tel:01215170806"
              className="inline-flex items-center space-x-2 text-navy-700 hover:text-sky-500 transition-colors duration-200 font-medium"
            >
              <Phone size={20} className="text-sky-500" />
              <span className="text-sm">0121 517 0806</span>
            </a>
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
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-3 pt-2 pb-4 space-y-1">
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

            {/* Classes expandable */}
            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-navy-700 hover:text-sky-500"
                onClick={() => setMobileClassesOpen(!mobileClassesOpen)}
              >
                <span>Classes</span>
                <ChevronDown size={18} className={`transition-transform duration-200 ${mobileClassesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileClassesOpen && (
                <div className="pl-6 space-y-1">
                  <Link
                    to="/strength-rehab-classes"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-navy-700 hover:text-sky-500"
                    onClick={() => { setMobileMenuOpen(false); setMobileClassesOpen(false); }}
                  >
                    Strength &amp; Rehab Classes
                  </Link>
                  <Link
                    to="/over-60s-strength-classes"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-navy-700 hover:text-sky-500"
                    onClick={() => { setMobileMenuOpen(false); setMobileClassesOpen(false); }}
                  >
                    Over 60s Strength Classes
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-navy-700 hover:text-sky-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 rounded-md text-base font-medium text-navy-700 hover:text-sky-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-navy-700 hover:text-sky-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:01215170806"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-navy-700 hover:text-sky-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone size={18} className="text-sky-500" />
              <span>0121 517 0806</span>
            </a>
            <a
              href="/contact"
              className="block w-full text-center mt-2 px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-navy-700 hover:bg-navy-800"
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
