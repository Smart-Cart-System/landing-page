import React from 'react';
import { Monitor, Bell, FileText, Barcode, Package, Book, ChefHat, LineChart } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Smart Screen Navigation',
    description: 'Interactive store maps and guided shopping experience'
  },
  {
    icon: Bell,
    title: 'Pop-up Discounts & Deals',
    description: 'Location-based promotions while you shop'
  },
  {
    icon: FileText,
    title: 'Shopping List Integration',
    description: 'Import and optimize your shopping lists'
  },
  {
    icon: Barcode,
    title: 'Barcode Scanning',
    description: 'Automated item recognition and pricing'
  },
  {
    icon: Package,
    title: 'Inventory Requests',
    description: 'Request bulk items directly through the cart'
  },
  {
    icon: Book,
    title: 'Digital Offers',
    description: 'Browse digital magazines and promotions'
  },
  {
    icon: ChefHat,
    title: 'Recipe Recommendations',
    description: 'Get suggestions based on cart contents'
  },
  {
    icon: LineChart,
    title: 'Analytics Dashboard',
    description: 'Detailed insights for retailers'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl p-8 hover:bg-blue-600 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-500 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-4 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-blue-100 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;