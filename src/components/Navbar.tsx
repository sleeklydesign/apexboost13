
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import CTAButton from './CTAButton';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-400/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-white font-apex font-bold text-2xl md:text-3xl">
                <span className="text-apex">Apex</span>Boost<span className="text-apex">13</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-300 hover:text-apex transition-colors font-medium">
              Services
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-apex transition-colors font-medium">
              Badges
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-apex transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/cart" className="text-gray-300 hover:text-apex transition-colors font-medium">
              <ShoppingCart className="inline-block mr-1" size={18} />
              Cart
            </Link>
            <CTAButton 
              variant="solid" 
              size="sm" 
              onClick={() => navigate('/contact')}
            >
              Get Started
            </CTAButton>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-apex focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-300 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/services"
                className="block px-3 py-2 text-gray-300 hover:text-apex transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-apex transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Badges
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-apex transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/cart"
                className="block px-3 py-2 text-gray-300 hover:text-apex transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="inline-block mr-1" size={18} />
                Cart
              </Link>
              <div className="px-3 py-2">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/contact');
                  }}
                  className="w-full bg-apex hover:bg-apex-light text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
