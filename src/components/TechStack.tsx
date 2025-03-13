import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Technology Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Hardware</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                Raspberry Pi
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                Cameras
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                Sensors
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                Smart Screens
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Software</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                Web Application
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                Mobile App (PWA)
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                Backend (Fast API)
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Cloud & Connectivity</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                AWS/GCP/Azure
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                Websockets Protocol
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                Bluetooth
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                Wi-Fi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;