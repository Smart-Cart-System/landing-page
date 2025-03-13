import React from 'react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Core Functionality Prototyping',
    description: 'Building the foundation of our smart cart system'
  },
  {
    phase: 'Phase 2',
    title: 'Mobile App Development',
    description: 'Creating the companion mobile application'
  },
  {
    phase: 'Phase 3',
    title: 'Backend and Cloud Setup',
    description: 'Implementing server infrastructure and cloud services'
  },
  {
    phase: 'Phase 4',
    title: 'UI/UX Refinement',
    description: 'Polishing the user interface and experience'
  },
  {
    phase: 'Phase 5',
    title: 'Advanced Features Implementation',
    description: 'Adding AI and IoT capabilities'
  },
  {
    phase: 'Phase 6',
    title: 'Testing and Optimization',
    description: 'Final testing and performance improvements'
  }
];

const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Implementation Plan
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div
                    className={`${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-blue-600 mb-2">
                      {phase.phase}
                    </h3>
                    <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center w-8 h-8">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="w-8 h-8 bg-blue-100 rounded-full animate-pulse"></div>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;