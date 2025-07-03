import React from 'react';
import { Check, Users, ShoppingCart, BarChart3 } from 'lucide-react';

interface PricingPlan {
  id: number;
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const PricingSection: React.FC = () => {
  const recruitmentPlans: PricingPlan[] = [
    {
      id: 1,
      title: 'Basic CV Service',
      description: 'Companies HR who are looking for a candidate pool to shortlist them.',
      price: '20% (1797 PKR)',
      period: 'Discount',
      icon: <Users className="text-green-600" size={48} />,
      features: [
        'Can possible filters can access our database to reduce their',
        'Can post jobs on different job portals',
        'Companies Can access the database with monthly 200 Searches',
        'Manage Filters Like Skills, Cities, Experience etc',
        'Live chat experts help'
      ]
    },
    {
      id: 2,
      title: 'Lead Generating',
      description: 'Companies will directly get qualifying responses in their chat to schedule interviews at their own pace and our service charges will be applied.',
      price: '30% (6998 PKR)',
      period: 'using PKR',
      icon: <Users className="text-green-600" size={48} />,
      popular: true,
      features: [
        'Companies Can create a job post on Growvy',
        'Filters Like Skills, Cities, Experience etc',
        'Guide our Team to shortlist best candidates',
        'Live chat experts help'
      ]
    },
    {
      id: 3,
      title: 'Recruitment Service',
      description: 'Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy to make their hire quick and cost-effective.',
      price: '40% of first Salary',
      period: 'For Experience',
      icon: <Users className="text-green-600" size={48} />,
      features: [
        'Can avail this package after using subscription',
        'Companies can create a job post',
        'Filters Like Skills, Cities Exp etc',
        'Minor screening interviews',
        'Whatsapp groups with Team',
        'Complete A-Z hiring solution'
      ]
    }
  ];

  const ecommercePlans: PricingPlan[] = [
    {
      id: 4,
      title: 'Basic CV Service',
      description: 'Companies HR who are looking for a candidate pool to shortlist them.',
      price: '20% (1797 PKR)',
      period: 'Discount',
      icon: <ShoppingCart className="text-yellow-600" size={48} />,
      features: [
        'Can possible filters can access our database to reduce their',
        'Can post jobs on different job portals',
        'Companies Can access the database with monthly 200 Searches',
        'Manage Filters Like Skills, Cities, Experience etc',
        'Live chat experts help'
      ]
    },
    {
      id: 5,
      title: 'Lead Generating',
      description: 'Companies will directly get qualifying responses in their chat to schedule interviews at their own pace.',
      price: '30% (6998 PKR)',
      period: 'using PKR',
      icon: <ShoppingCart className="text-yellow-600" size={48} />,
      popular: true,
      features: [
        'Companies Can create a job post on Growvy',
        'Filters Like Skills, Cities, Experience etc',
        'Guide our Team to shortlist best candidates',
        'Live chat experts help'
      ]
    },
    {
      id: 6,
      title: 'Recruitment Service',
      description: 'Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy.',
      price: '40% of first Salary',
      period: 'For Experience',
      icon: <ShoppingCart className="text-yellow-600" size={48} />,
      features: [
        'Can avail this package after using subscription',
        'Companies can create a job post',
        'Filters Like Skills, Cities Exp etc',
        'Minor screening interviews',
        'Whatsapp groups with Team',
        'Complete A-Z hiring solution'
      ]
    }
  ];

  const businessPlans: PricingPlan[] = [
    {
      id: 7,
      title: 'Basic CV Service',
      description: 'Companies HR who are looking for a candidate pool to shortlist them.',
      price: '20% (1797 PKR)',
      period: 'Discount',
      icon: <BarChart3 className="text-green-600" size={48} />,
      features: [
        'Can possible filters can access our database to reduce their',
        'Can post jobs on different job portals',
        'Companies Can access the database with monthly 200 Searches',
        'Manage Filters Like Skills, Cities, Experience etc',
        'Live chat experts help'
      ]
    },
    {
      id: 8,
      title: 'Lead Generating',
      description: 'Companies will directly get qualifying responses in their chat to schedule interviews.',
      price: '30% (6998 PKR)',
      period: 'using PKR',
      icon: <BarChart3 className="text-green-600" size={48} />,
      popular: true,
      features: [
        'Companies Can create a job post on Growvy',
        'Filters Like Skills, Cities, Experience etc',
        'Guide our Team to shortlist best candidates',
        'Live chat experts help'
      ]
    },
    {
      id: 9,
      title: 'Recruitment Service',
      description: 'Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy.',
      price: '40% of first Salary',
      period: 'For Experience',
      icon: <BarChart3 className="text-green-600" size={48} />,
      features: [
        'Can avail this package after using subscription',
        'Companies can create a job post',
        'Filters Like Skills, Cities Exp etc',
        'Minor screening interviews',
        'Whatsapp groups with Team',
        'Complete A-Z hiring solution'
      ]
    }
  ];

  const PricingSubSection: React.FC<{ title: string; subtitle: string; plans: PricingPlan[]; icon: React.ReactNode }> = ({ 
    title, 
    subtitle, 
    plans, 
    icon 
  }) => (
    <div className="mb-20">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-black mb-4">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
        <button
          onClick={() => alert('Contact functionality would be implemented here')}
          className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
        >
          Plans
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white rounded-lg shadow-lg p-8 relative ${
              plan.popular ? 'border-2 border-green-500' : 'border border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                {plan.icon}
              </div>
              <h4 className="text-xl font-bold text-black mb-2">{plan.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-green-600">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-2">{plan.period}</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <h5 className="font-semibold text-black">Benefits:</h5>
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-green-700 transition-colors">
              Start Today
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Pricing</h2>
          <p className="text-gray-600 text-lg">
            "Discover flexible pricing plans tailored to your needs—start growing with us today!"
          </p>
        </div>

        {/* Recruitment Solution */}
        <PricingSubSection
          title="Recruitment Solution"
          subtitle="Unlock seamless hiring with our tailored Recruitment Plans—flexible pricing designed to find your perfect talent, fast!"
          plans={recruitmentPlans}
          icon={<Users className="text-green-600" size={64} />}
        />

        {/* E-commerce Solutions */}
        <PricingSubSection
          title="E-commerce Solutions"
          subtitle="Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly!"
          plans={ecommercePlans}
          icon={<ShoppingCart className="text-yellow-600" size={64} />}
        />

        {/* Business Solutions */}
        <PricingSubSection
          title="Business Solutions"
          subtitle="Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly!"
          plans={businessPlans}
          icon={<BarChart3 className="text-green-600" size={64} />}
        />
      </div>
    </section>
  );
};

export default PricingSection;

