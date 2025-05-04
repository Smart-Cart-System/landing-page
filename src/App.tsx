import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import TechStack from './components/TechStack';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Footer from './components/Footer';
import TeamMemberProfile from './pages/TeamMemberProfile';
import TeamPage from './pages/TeamPage';

// HomePage component to keep the main landing page structure
const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <TechStack />
      <Benefits />
      <Timeline />
      <Team />
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/:memberId" element={<TeamMemberProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;