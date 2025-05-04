import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import omarAnwarImage from '../assets/images/image.png';

// Updated team members with IDs for routing
const teamMembers = [
  {
    id: 'marwan-hazem',
    name: 'Marwan Hazem',
    role: 'Team Lead & Backend Engineer',
    image: 'https://avatars.githubusercontent.com/u/105920111?v=4',
    linkedin: 'https://www.linkedin.com/in/marwan-elzafarani',
    github: 'https://github.com/Zafaranii'
  },
  {
    id: 'omar-ahmed',
    name: 'Omar Ahmed',
    role: 'Data Engineer / Web Developer',
    image: 'https://avatars.githubusercontent.com/u/85374545?v=4',
    linkedin: 'https://www.linkedin.com/in/omarahmed-oa/',
    github: 'https://github.com/OmarAhmed-A'
  },
  {
    id: 'anton-ashraf',
    name: 'Anton Ashraf',
    role: 'DevOps and IoT Engineer',
    image: 'https://avatars.githubusercontent.com/u/51335125?v=4',
    linkedin: 'https://www.linkedin.com/in/anton-ashraf/',
    github: 'https://github.com/AntonAshraf',
  },
  {
    id: 'abdelmalek-osama',
    name: 'Abdelmalek Osama',
    role: 'AI/Backend Engineer',
    image: 'https://avatars.githubusercontent.com/u/126019678?v=4',
    linkedin: 'https://www.linkedin.com/in/abdelmalek-sobhy-2003aoms/n',
    github: 'https://github.com/Abdelmalek-Osama'
  },
  {
    id: 'khaled-hegazy',
    name: 'Khaled Hegazy',
    role: 'Frontend Developer',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQH9RI1WuDUiFQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1664702001055?e=1752105600&v=beta&t=GYIOjxk5pLuqN_MgTY8CbaNvQ6lap04SEF8ruEowgBc',
    linkedin: '#',
    github: '#'
  },
  {
    id: 'omar-anwar',
    name: 'Omar Anwar',
    role: 'Hardware Engineer',
    image: omarAnwarImage,
    linkedin: '#',
    github: '#'
  }
];

const Team: React.FC = () => {
  const location = useLocation();
  const isTeamPage = location.pathname === '/team';
  
  // Display all team members regardless of page
  // No more slicing to show just a few on homepage
  const displayedMembers = teamMembers;
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Meet Our Team
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Supervised by Dr. Mohamed Aboul-Dahab
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {displayedMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer group h-full flex flex-col"
            >
              <Link to={`/team/${member.id}`} className="flex flex-col flex-grow">
                <div className="h-64 flex items-center justify-center bg-gray-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                </div>
              </Link>
              <div className="px-6 pb-4 flex space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Removed the "View All Team Members" button */}
      </div>
    </section>
  );
};

export default Team;
