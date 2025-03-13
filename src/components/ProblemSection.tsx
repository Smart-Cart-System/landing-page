import React from 'react';
import { Clock, Search, MapPin, UserX } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Long Checkout Lines',
    description: 'Customers waste valuable time waiting in queues at checkout counters.'
  },
  {
    icon: Search,
    title: 'Limited Customer Insights',
    description: 'Retailers lack detailed data about shopping patterns and customer behavior.'
  },
  {
    icon: MapPin,
    title: 'Navigation Difficulties',
    description: 'Shoppers struggle to locate specific products in large stores.'
  },
  {
    icon: UserX,
    title: 'Lack of Personalization',
    description: 'Generic shopping experiences that don\'t adapt to individual preferences.'
  }
];

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Problems We're Solving
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;