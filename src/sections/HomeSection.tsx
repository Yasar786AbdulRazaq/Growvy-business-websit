import React from 'react';
import {
  TrendingUp,
  Users,
  Briefcase,
  ShoppingCart,
  BarChart3
} from 'lucide-react';

const HomeSection: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                Maximize <br />
                <span className="text-black text-6xl">Business efficiency</span>
                <br />
                <span className="line-through text-green-600 text-4xl">with</span>
                <br />
                <span className="text-green-600">Growvy</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Scale your company with tailored strategies, market insights,
                and cutting-edge solutions for lasting growth.
              </p>
              <button
                onClick={() => scrollToSection('services')}
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Start Today
              </button>
            </div>
            <div className="relative">
              <div className="text-green-600">
                <TrendingUp size={300} strokeWidth={1} />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-4xl font-bold text-green-600">Growvy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Description */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            "Growvy is built to streamline hiring, optimize assets, and drive
            business growth. Our mission is to create a tech-driven ecosystem
            where companies hire smarter, manage resources efficiently, and
            scale effortlessly. Whether you're seeking top talent, asset
            solutions, or business expansion, Growvy is your trusted partner in
            success."
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job Seeker */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <Users className="mx-auto text-blue-600" size={64} />
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">I'm a Job Seeker!</h3>
              <p className="text-gray-600 mb-6">
                Looking for job according to my skills and requirements.
              </p>
              <button
                onClick={() => scrollToSection('jobs')}
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Jobs
              </button>
            </div>

            {/* Employer */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <Briefcase className="mx-auto text-green-600" size={64} />
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">I'm an Employer!</h3>
              <p className="text-gray-600 mb-6">
                Looking for talented candidates for my company.
              </p>
              <button
                onClick={() => scrollToSection('services')}
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Post a Job
              </button>
            </div>

            {/* E-commerce Store */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <ShoppingCart className="mx-auto text-yellow-600" size={64} />
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">I'm an E-commerce Store!</h3>
              <p className="text-gray-600 mb-6">
                Looking for potential sales data for sales campaign.
              </p>
              <button
                onClick={() => scrollToSection('services')}
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Sales Data
              </button>
            </div>
          </div>

          {/* Business + Schedule Call */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* I'm a Business! */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <BarChart3 className="mx-auto text-green-600" size={64} />
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">I'm a Business!</h3>
              <p className="text-gray-600 mb-6">
                Looking for CRM or Data resources to boost my business.
              </p>
              <button
                onClick={() => scrollToSection('services')}
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Business Plans
              </button>
            </div>

            {/* Schedule Call beside Business */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col lg:flex-row items-center gap-6">
              <img
                src="/call agent.webp"
                alt="Call Agent"
                className="w-full max-w-xs rounded-lg shadow-md object-cover"
              />
              <div className="text-center lg:text-left space-y-4">
                <h3 className="text-3xl font-bold text-black">Schedule Call Now!</h3>
                <p className="text-gray-700 text-lg">
                  Join over <span className="text-green-600 font-semibold">10k users worldwide</span>.<br />
                  Start scheduling in less than <span className="text-green-600 font-semibold">1 minute</span>.
                </p>
                <button
                  onClick={() => scrollToSection('services')}
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
                >
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Growvy's 50M+ Job Seeker Community & Get Hired Faster!
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Build your profile, get noticed by top employers, and access exclusive job
            opportunities tailored to your skills. Your next career move starts here!
          </p>
          <button
            onClick={() => scrollToSection('jobs')}
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
