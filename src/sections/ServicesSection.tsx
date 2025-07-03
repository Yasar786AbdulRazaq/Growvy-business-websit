import React from 'react';
import { Users, ShoppingCart, BarChart3, TrendingUp, CheckCircle } from 'lucide-react';

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ServicesSection: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services: ServiceCard[] = [
    {
      id: 1,
      title: 'Hiring',
      description: 'Access a vast talent pool to hire the right candidates quickly and efficiently.',
      icon: <Users className="text-green-600" size={48} />,
      features: [
        'Access to 50M+ candidates',
        'AI-powered matching',
        'Quick screening process',
        'Dedicated support team'
      ]
    },
    {
      id: 2,
      title: 'E-commerce',
      description: 'Drive expansion with targeted strategies and market-driven solutions.',
      icon: <ShoppingCart className="text-yellow-600" size={48} />,
      features: [
        'Sales analytics dashboard',
        'Customer behavior insights',
        'Inventory management',
        'Marketing automation'
      ]
    },
    {
      id: 3,
      title: 'Business',
      description: 'Optimize and manage business resources with data-backed insights.',
      icon: <BarChart3 className="text-green-600" size={48} />,
      features: [
        'CRM integration',
        'Performance analytics',
        'Resource optimization',
        'Strategic planning tools'
      ]
    }
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Services</h2>
          <p className="text-gray-600 text-lg">
            At Growvy, we provide innovative, cost-effective solutions to help businesses and professionals thrive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div key={service.id} className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-green-300 transition-colors">
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-600 mr-2" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollToSection('pricing')}
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Plans
              </button>
            </div>
          ))}
        </div>

        {/* Join Users Section */}
        <div className="bg-gray-50 rounded-lg p-12 text-center mb-20">
          <h3 className="text-3xl font-bold text-black mb-6">Join over 10k users worldwide</h3>
          <button
            onClick={() => scrollToSection('pricing')}
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            View Pricing
          </button>
        </div>

        {/* Problems and Solutions */}
        <div className="space-y-20">
          {/* Problems in Hiring */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Problems in Hiring</h3>
              <p className="text-gray-600 mb-6">
                Companies spend high $$$ budgets on platforms like Indeed and LinkedIn, only to receive low-quality CVs and irrelevant applicants, making hiring slow and inefficient.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🤔</div>
              <p className="text-gray-600">Confused about hiring decisions?</p>
            </div>
          </div>

          {/* Growvy Solution for Hiring */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center">
              <div className="w-32 h-32 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="text-white" size={64} />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-black mb-6">With Growvy Solution</h3>
              <p className="text-gray-600 mb-6">
                With Growvy, businesses can access a database of active job seekers who have recently joined for job search. Use data-driven candidate selection and at a fraction of the cost—no wasted budget, just quality hires!
              </p>
              <button
                onClick={() => scrollToSection('pricing')}
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Start Now
              </button>
            </div>
          </div>

          {/* E-commerce Business Problems */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">E-commerce Business</h3>
              <p className="text-gray-600 mb-6">
                E-commerce businesses struggle with high marketing costs, limited customer insights, and slow growth, making it difficult to scale and maximize profits.
              </p>
            </div>
            <div className="text-center">
              <ShoppingCart className="text-yellow-600 mx-auto" size={96} />
            </div>
          </div>

          {/* Growvy Solution for E-commerce */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center">
              <div className="relative">
                <div className="w-32 h-32 border-4 border-green-600 rounded-full mx-auto flex items-center justify-center">
                  <TrendingUp className="text-green-600" size={64} />
                </div>
                <div className="absolute inset-0 border-4 border-green-300 rounded-full animate-ping"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-black mb-6">With Growvy Solution</h3>
              <p className="text-gray-600 mb-6">
                Growvy helps e-commerce businesses streamline operations, manage assets, and implement smart growth strategies to boost sales and efficiency—all at a low cost with proven results.
              </p>
              <button
                onClick={() => scrollToSection('pricing')}
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Start Now
              </button>
            </div>
          </div>
        </div>

        {/* E-commerce Owner Section */}
        <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-12 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">E-commerce Owner?</h3>
              <p className="text-gray-600 mb-6">
                Optimize your business with smart asset management, growth strategies, and cutting-edge solutions to boost sales and efficiency with Growvy!
              </p>
              <button
                onClick={() => scrollToSection('pricing')}
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Plans
              </button>
            </div>
            <div className="text-center">
              <div className="relative">
                <BarChart3 className="text-green-600 mx-auto" size={200} />
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Call Section */}
        <div className="bg-white rounded-lg p-12 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
             <div className="flex-7 blur-4xl flex justify-center">
              <img
                src="/call agent.webp"
                alt="Call Agent"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg object-cover"
              />
            </div>
            </div>
            <div>
              <button
                onClick={() => alert('Contact functionality would be implemented here')}
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors mb-4"
              >
                Schedule Call Now
              </button>
              <p className="text-gray-600">
                Join over 10k users worldwide. Start scheduling in less than 1 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

