import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import TechStack from './components/TechStack';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <TechStack />
      <Benefits />
      <Timeline />
      <Team />
      <Footer />
    </div>
  );
}

export default App;