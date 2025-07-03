import React from 'react';
import { Facebook, Instagram, Linkedin, TrendingUp } from 'lucide-react';

const WebsiteFooter: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 hover:text-yellow-300 transition">
              <h3 className="text-2xl font-bold">Growvy</h3>
              <TrendingUp className="text-white" size={32} />
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Optimize your business with smart asset management, growth strategies, and cutting-edge solutions to boost sales and efficiency with Growvy!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', id: 'home' },
                { label: 'Services', id: 'services' },
                { label: 'Plans & Pricing', id: 'pricing' },
                { label: 'Business Solutions', id: 'services' },
                { label: 'Success Stories', id: 'success' },
                { label: 'Jobs', id: 'jobs' }
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-green-100 hover:text-white hover:underline transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Rating and Icon */}
          <div className="space-y-4">
            <div className="flex text-yellow-300 text-xl space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <div className="relative">
              <TrendingUp className="text-white w-20 h-20 hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="mt-12 pt-8 border-t border-green-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-100 text-sm">
              © 2025 Growvy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-green-100 hover:text-white text-sm transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
