import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Briefcase, ShoppingCart, BarChart3 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                Maximize{' '}
                <span className="text-green-600">Business</span>{' '}
                <span className="line-through text-gray-400">efficiency</span>
                <br />
                <span className="text-green-600">Growvy</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Scale your company with tailored strategies, market insights, and cutting-edge solutions for lasting growth.
              </p>
              <Link
                to="/services"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Start Today
              </Link>
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
      </section>

      {/* Company Description */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            "Growvy is built to streamline hiring, optimize assets, and drive business growth. Our mission is to create a tech-driven ecosystem where companies hire smarter, manage resources efficiently, and scale effortlessly. Whether you're seeking top talent, asset solutions, or business expansion, Growvy is your trusted partner in success."
          </p>
        </div>
      </section>

      {/* User Type Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job Seeker */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <Users className="mx-auto text-blue-600" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">I'm a Job Seeker!</h3>
              <p className="text-gray-600 mb-6">
                Looking for job according to my skills and requirements.
              </p>
              <Link
                to="/jobs"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Jobs
              </Link>
            </div>

            {/* Employer */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <Briefcase className="mx-auto text-green-600" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">I'm an Employer!</h3>
              <p className="text-gray-600 mb-6">
                Looking for talented candidates for my company.
              </p>
              <Link
                to="/services"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Post a Job
              </Link>
            </div>

            {/* E-commerce Store */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <ShoppingCart className="mx-auto text-yellow-600" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">I'm a E-commerce Store!</h3>
              <p className="text-gray-600 mb-6">
                Looking for potential sales data for sales campaign.
              </p>
              <Link
                to="/services"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Sales Data
              </Link>
            </div>

            {/* Business */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center md:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <BarChart3 className="mx-auto text-green-600" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">I'm Business!</h3>
              <p className="text-gray-600 mb-6">
                Looking for CRM or Data resources to boost my business.
              </p>
              <Link
                to="/services"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Business Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Growvy's 50M+ Job Seeker Community & Get Hired Faster!
          </h2>
          <p className="text-green-100 text-lg mb-8">
            "Build your profile, get noticed by top employers, and access exclusive job opportunities tailored to your skills. Your next career move starts here!"
          </p>
          <Link
            to="/jobs"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

