import React from 'react';
import { Link } from 'react-router-dom';
import Team from '../components/Team';
import Footer from '../components/Footer';
// Import the team banner image
import teamBanner from '../assets/images/Team.jpeg';
import { ArrowLeft } from 'lucide-react';

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

        
        {/* Back to Home button in top left */}
        <Link
          to="/"
          className="absolute top-4 left-4 bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full flex items-center shadow-md transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
      
      {/* Team Component */}
      <Team />
      <Footer />
    </div>
  );
};

export default TeamPage;