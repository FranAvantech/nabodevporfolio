import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Gamepad2, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Mí', to: 'about' },
    { name: 'Proyectos', to: 'projects' },
    { name: 'Premios', to: 'awards' },
    { name: 'Making Of', to: 'making-of' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-500 py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Gamepad2 
              size={28} 
              className={`${isScrolled ? 'text-white' : 'text-primary-500'} transition-colors`} 
            />
            <span className={`font-heading font-bold text-xl ${
              isScrolled ? 'text-white' : 'text-primary-500'
            } transition-colors`}>
              Desarrollador de videojuegos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`font-heading font-medium cursor-pointer transition-all hover:text-primary-300 ${
                  isScrolled ? 'text-white' : 'text-neutral-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className={`${isScrolled ? 'text-white' : 'text-primary-500'}`} />
            ) : (
              <Menu size={24} className={`${isScrolled ? 'text-white' : 'text-primary-500'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading font-medium py-2 text-neutral-800 hover:text-primary-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;