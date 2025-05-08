
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Our Six Pillars', path: '/pillars' },
    { title: 'Our Programs', path: '/programs'},
    { title: 'For Schools', path: '/schools' },
    { title: 'For Parents', path: '/parents' },
    { title: 'Preparation Resources', path: '/resources' },
    { title: 'Reach Us', path: '/contact' },
    { title: 'Register Now', path: '/register' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img 
              src="/lovable-uploads/ff69c831-61a7-4117-890e-d61bf5887221.png" 
              alt="ThinkOsphere Logo" 
              className="h-11 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              link.dropdown ? (
                <div key={index} className="relative group">
                  <button 
                    className={`px-4 py-2 flex items-center transition-colors font-medium ${
                      link.dropdown.some(item => item.path === location.pathname)
                        ? 'text-thinksphere-blue'
                        : 'text-gray-700 hover:text-thinksphere-blue'
                    }`}
                    onClick={() => toggleDropdown(link.title)}
                  >
                    {link.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                    <div className="py-1">
                      {link.dropdown.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          to={dropdownItem.path}
                          className={`block px-4 py-2 text-sm ${
                            location.pathname === dropdownItem.path
                              ? 'bg-thinksphere-blue/5 text-thinksphere-blue'
                              : 'text-gray-700'
                          } hover:bg-thinksphere-blue/5 hover:text-thinksphere-blue`}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  className={`px-4 py-2 font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-thinksphere-blue'
                      : 'text-gray-700 hover:text-thinksphere-blue'
                  }`}
                >
                  {link.title}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="container mx-auto px-4 py-2">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.dropdown ? (
                    <div>
                      <button
                        className={`flex items-center justify-between w-full px-4 py-2 text-left ${
                          link.dropdown.some(item => item.path === location.pathname)
                            ? 'text-thinksphere-blue font-medium'
                            : 'text-gray-700'
                        }`}
                        onClick={() => toggleDropdown(link.title)}
                      >
                        <span>{link.title}</span>
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === link.title ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === link.title && (
                        <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-100">
                          {link.dropdown.map((dropdownItem, idx) => (
                            <Link
                              key={idx}
                              to={dropdownItem.path}
                              className={`block px-4 py-2 text-sm ${
                                location.pathname === dropdownItem.path
                                  ? 'text-thinksphere-blue font-medium'
                                  : 'text-gray-600'
                              }`}
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-4 py-2 ${
                        location.pathname === link.path
                          ? 'text-thinksphere-blue font-medium'
                          : 'text-gray-700'
                      }`}
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
