import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, TrendingUp } from 'lucide-react';

interface Client {
  id: number;
  name: string;
  logo: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}

const Success: React.FC = () => {
  const clients: Client[] = [
    { id: 1, name: 'ECHONET', logo: 'ECHONET' },
    { id: 2, name: 'Sitecore', logo: 'Sitecore' },
    { id: 3, name: 'Company 3', logo: 'Logo 3' },
    { id: 4, name: 'Motive', logo: 'motive' }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'HR Director',
      company: 'TechCorp Inc.',
      rating: 5,
      text: 'Excellent Experience with growvy. The platform helped us find qualified candidates quickly and efficiently. Highly recommended!',
      avatar: '👤'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupHub',
      rating: 5,
      text: 'Excellent Experience with growvy. The recruitment process was streamlined and we found amazing talent for our growing team.',
      avatar: '👤'
    }
  ];

  const renderStars = (rating: number): JSX.Element[] => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Success</h1>
          <p className="text-gray-600 text-lg">
            "Discover inspiring Success Stories—see how our solutions empower businesses to thrive!"
          </p>
        </div>
      </section>

      {/* Join Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-8">Join over 10k Clients worldwide</h2>
          <Link
            to="/pricing"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors mb-12"
          >
            View Pricing
          </Link>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-lg shadow-md p-6 w-32 h-20 flex items-center justify-center"
              >
                <span className="text-gray-600 font-semibold text-sm">{client.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <TrendingUp className="mx-auto text-white" size={64} />
          </div>
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

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white border-2 border-green-200 rounded-lg p-8 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-white border-2 border-green-200 rounded-full p-2">
                    <Quote className="text-green-600" size={24} />
                  </div>
                </div>

                {/* Avatar */}
                <div className="flex items-center mb-6 mt-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: 12 }, (_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index < 2 ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Wave */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl text-blue-400">
            〰️〰️〰️〰️〰️
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;

