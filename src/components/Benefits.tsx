import React from 'react';
import { Clock, Navigation, Gift, ListChecks, LineChart, LayoutGrid, Target, TrendingUp } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-600">For Shoppers</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Faster Checkout Process</h4>
                  <p className="text-gray-600">Skip the lines with our automated checkout system</p>
                </div>
              </div>
              <div className="flex items-start">
                <Navigation className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Guided Navigation</h4>
                  <p className="text-gray-600">Find products easily with smart store navigation</p>
                </div>
              </div>
              <div className="flex items-start">
                <Gift className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Personalized Offers</h4>
                  <p className="text-gray-600">Receive tailored discounts and promotions</p>
                </div>
              </div>
              <div className="flex items-start">
                <ListChecks className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Shopping List Optimization</h4>
                  <p className="text-gray-600">Smart suggestions for efficient shopping</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-green-600">For Retailers</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <LineChart className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Detailed Shopping Analytics</h4>
                  <p className="text-gray-600">Gain insights into customer behavior and preferences</p>
                </div>
              </div>
              <div className="flex items-start">
                <LayoutGrid className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Optimized Store Layouts</h4>
                  <p className="text-gray-600">Data-driven store arrangement for better flow</p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Targeted Advertising</h4>
                  <p className="text-gray-600">Deliver personalized promotions effectively</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Higher Conversion Rates</h4>
                  <p className="text-gray-600">Improved customer satisfaction and sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;