import React from 'react';
import { Star, Quote, TrendingUp } from 'lucide-react';

interface Client {
  id: number;
  name: string;
  imageSrc: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  imageSrc: string;
}

const SuccessSection: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clients: Client[] = [
    { id: 1, name: 'Build', imageSrc: '/build.jpeg' },
    { id: 2, name: 'Easypaisa', imageSrc: '/easypaisa.jpeg' },
    { id: 3, name: 'Motive', imageSrc: '/motive.png' },
    { id: 4, name: 'Echonet', imageSrc: '/echonet.jpeg' }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'HR Director',
      company: 'TechCorp Inc.',
      rating: 5,
      text: 'Excellent experience with Growvy. The platform helped us find qualified candidates quickly and efficiently. Highly recommended!',
      imageSrc: '/avatars/sarah-johnson.png'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupHub',
      rating: 5,
      text: 'The recruitment process was streamlined and we found amazing talent for our growing team using Growvy.',
      imageSrc: '/avatars/michael-chen.png'
    }
  ];

  const renderStars = (rating: number) => {
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
    <section id="success" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Success</h2>
          <p className="text-gray-600 text-lg">
            "Discover inspiring Success Stories—see how our solutions empower businesses to thrive!"
          </p>
        </div>

        {/* Join Clients */}
        <div className="bg-white rounded-lg p-12 text-center mb-16">
          <h3 className="text-3xl font-bold text-black mb-8">Join over 10k Clients worldwide</h3>
          <button
            onClick={() => scrollToSection('pricing')}
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors mb-12"
          >
            View Pricing
          </button>

          {/* Client Logos */}
          {/* Client Logos */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
  {clients.map((client) => (
    <div
      key={client.id}
      className="w-28 h-20 bg-white shadow-md rounded-md flex items-center justify-center p-2 transition-transform transform hover:scale-105 hover:shadow-lg"
    >
      <img
        src={client.imageSrc}
        alt={`${client.name} Logo`}
        className="h-16 w-auto object-contain"
      />
    </div>
  ))}
</div>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-12 text-center mb-16">
          <div className="mb-8">
            <TrendingUp className="mx-auto text-white" size={64} />
          </div>
          <h3 className="text-4xl font-bold text-white mb-6">
            Join Growvy's 50M+ Job Seeker Community & Get Hired Faster!
          </h3>
          <p className="text-green-100 text-lg mb-8">
            "Build your profile, get noticed by top employers, and access exclusive job opportunities tailored to your skills."
          </p>
          <button
            onClick={() => scrollToSection('jobs')}
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Sign In
          </button>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
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
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.imageSrc}
                      alt={`${testimonial.name} Avatar`}
                      className="w-full h-full object-cover"
                    />
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

          {/* Dots */}
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

        {/* Decorative Wave */}
        <div className="text-center py-8">
          <div className="text-6xl text-blue-400">〰️〰️〰️〰️〰️</div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
