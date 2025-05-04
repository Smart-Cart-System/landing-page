import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Linkedin, Github, Globe, ArrowLeft } from 'lucide-react';
import omarAnwarImage from '../assets/images/image.png';

// Extended team members data with additional fields
const teamMembers = [
  {
    id: 'marwan-hazem',
    name: 'Marwan Hazem',
    role: 'Team Lead & Backend Engineer',
    image: 'https://avatars.githubusercontent.com/u/105920111?v=4',
    linkedin: 'https://www.linkedin.com/in/marwan-elzafarani',
    github: 'https://github.com/Zafaranii',
    website: 'https://marwanelzafarani.me',
    bio: 'Team Lead & Backend Engineer with expertise in backend development and project management.'
  },
  {
    id: 'omar-ahmed',
    name: 'Omar Ahmed',
    role: 'Data Engineer / Web Developer',
    image: 'https://avatars.githubusercontent.com/u/85374545?v=4',
    linkedin: 'https://www.linkedin.com/in/omarahmed-oa/',
    github: 'https://github.com/OmarAhmed-A',
    website: '',
    bio: 'Data Engineer and Web Developer passionate about creating efficient data pipelines and user-friendly web applications.'
  },
  {
    id: 'anton-ashraf',
    name: 'Anton Ashraf',
    role: 'DevOps and IoT Engineer',
    image: 'https://avatars.githubusercontent.com/u/51335125?v=4',
    linkedin: 'https://www.linkedin.com/in/anton-ashraf/',
    github: 'https://github.com/AntonAshraf',
    website: 'https://antonashraf.me',
    bio: 'IoT Specialist focusing on developing connected device solutions and smart systems.'
  },
  {
    id: 'abdelmalek-osama',
    name: 'Abdelmalek Osama',
    role: 'AI / Backend Engineer',
    image: 'https://avatars.githubusercontent.com/u/126019678?v=4',
    linkedin: 'https://www.linkedin.com/in/abdelmalek-sobhy-2003aoms/n',
    github: 'https://github.com/Abdelmalek-Osama',
    website: '',
    bio: 'AI and Backend Engineer specializing in machine learning algorithms and robust backend systems.'
  },
  {
    id: 'khaled-hegazy',
    name: 'Khaled Hegazy',
    role: 'Frontend Developer',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQH9RI1WuDUiFQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1664702001055?e=1752105600&v=beta&t=GYIOjxk5pLuqN_MgTY8CbaNvQ6lap04SEF8ruEowgBc',
    linkedin: '',
    github: '',
    website: '',
    bio: 'Frontend Developer with a passion for creating beautiful and user-friendly interfaces.'
  },
  {
    id: 'omar-anwar',
    name: omarAnwarImage,
    role: 'Hardware Engineer',
    image: '../assets/images/image.png',
    linkedin: '',
    github: '',
    website: '',
    bio: 'Hardware Engineer specializing in designing and implementing electronic systems.'
  }
];

const TeamMemberProfile: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  
  // Find the team member by ID
  const member = teamMembers.find(member => member.id === memberId);
  
  if (!member) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center text-red-600 mb-4">Team Member Not Found</h1>
          <p className="text-gray-600 text-center mb-6">The team member you're looking for doesn't exist.</p>
          <div className="flex justify-center">
            <Link to="/" className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              <ArrowLeft size={16} />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center p-6">
      <div className="max-w-md w-full">
        {/* Back button */}
        <div className="mb-6">
          <Link 
            to="/team" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Team
          </Link>
        </div>
        
        {/* Profile card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-40 bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="pt-16 pb-6 px-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800">{member.name}</h1>
            <p className="text-blue-600 font-medium">{member.role}</p>
            <p className="mt-4 text-gray-600">{member.bio}</p>
          </div>
        </div>
        
        {/* Social links - Linktree style */}
        <div className="space-y-3 w-full">
          {member.linkedin && (
            <a 
              href={member.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-4 w-full transition duration-300"
            >
              <span className="font-medium">LinkedIn</span>
              <Linkedin />
            </a>
          )}
          
          {member.github && (
            <a 
              href={member.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-gray-800 hover:bg-gray-900 text-white rounded-lg px-6 py-4 w-full transition duration-300"
            >
              <span className="font-medium">GitHub</span>
              <Github />
            </a>
          )}
          
          {member.website && (
            <a 
              href={member.website}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-green-600 hover:bg-green-700 text-white rounded-lg px-6 py-4 w-full transition duration-300"
            >
              <span className="font-medium">Website</span>
              <Globe />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberProfile;