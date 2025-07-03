import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  id: string;
}

const FloatingNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navItems: NavItem[] = [
    { name: 'Home', id: 'home' },
    { name: 'Jobs', id: 'jobs' },
    { name: 'Success', id: 'success' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const isActive = (sectionId: string): boolean => activeSection === sectionId;

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1 px-6 py-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              isActive(item.id)
                ? 'bg-green-600 text-white'
                : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-2">
          <span className="text-lg font-bold text-green-600">Growvy</span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="py-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.id)
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FloatingNavigation;

