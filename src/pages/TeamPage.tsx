import React from 'react';
import { Link } from 'react-router-dom';
import Team from '../components/Team';
import Footer from '../components/Footer';
// Import the team banner image
import teamBanner from '../assets/images/team.jpeg';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Image Section */}
      <div className="relative h-64 md:h-80">
        <img 
          src={teamBanner}
          alt="Team banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/60 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h1>
          <Link 
            to="/" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-medium transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
      
      {/* Team Component */}
      <Team />
      <Footer />
    </div>
  );
};

export default TeamPage;