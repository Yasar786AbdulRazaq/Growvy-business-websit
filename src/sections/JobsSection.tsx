import React, { useState } from 'react';
import { MapPin, Clock, DollarSign } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  posted: string;
}

const JobsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: string[] = [
    'All',
    'Tech',
    'Management', 
    'Human Resource',
    'Marketing & Sales',
    'Accounts & Finance',
    'Customer Service'
  ];

  const topJobs: Job[] = [
    {
      id: 1,
      title: 'Business Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      description: 'Drive business growth through strategic partnerships and market expansion.',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Finance Manager',
      company: 'FinanceHub',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90,000 - $130,000',
      description: 'Manage financial operations and strategic planning for growing company.',
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'Human Resource Manager',
      company: 'PeopleFirst',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$85,000 - $125,000',
      description: 'Lead HR initiatives and talent acquisition strategies.',
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Software Engineer',
      company: 'DevSolutions',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$95,000 - $140,000',
      description: 'Build scalable web applications using modern technologies.',
      posted: '1 day ago'
    },
    {
      id: 5,
      title: 'Web Developer',
      company: 'WebCraft',
      location: 'Remote',
      type: 'Contract',
      salary: '$70,000 - $100,000',
      description: 'Create responsive websites and web applications.',
      posted: '4 days ago'
    },
    {
      id: 6,
      title: 'Graphic Designer / UI / UX',
      company: 'DesignStudio',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$65,000 - $95,000',
      description: 'Design user interfaces and create engaging visual experiences.',
      posted: '2 days ago'
    }
  ];

  const handleApplyNow = (jobId: number): void => {
    alert(`Applied for job ID: ${jobId}. Thank you for your interest!`);
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="jobs" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Jobs</h2>
          <p className="text-gray-600 text-lg mb-8">
            "Join our team and  shape the future—explore exciting career opportunities today!"
          </p>
        </div>

        {/* Job Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-green-50 hover:border-green-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg p-8 text-center mb-16">
          <h3 className="text-3xl font-bold text-black mb-6">
            Join Growvy's 50M+ Job Seeker Community & Get Hired Faster!
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            "Build your profile, get noticed by top employers, and access exclusive job opportunities tailored to your skills. Your next career move starts here!"
          </p>
          <button
            onClick={() => alert('Sign up functionality would be implemented here')}
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Sign In
          </button>
        </div>

        {/* Top Jobs */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-black mb-12">Top Jobs</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-black">{job.title}</h4>
                  <span className="text-sm text-gray-500">{job.posted}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign size={16} className="mr-2" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                <p className="text-sm font-medium text-gray-700 mb-4">at {job.company}</p>
                
                <button
                  onClick={() => handleApplyNow(job.id)}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-green-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="text-center py-8">
          <div className="text-6xl text-blue-400">
            〰️〰️〰️〰️〰️
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;

