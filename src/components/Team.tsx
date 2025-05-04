import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const teamMembers = [
  {
    name: 'Marwan Hazem',
    role: 'Team Lead & Backend Engineer',
    image: 'https://avatars.githubusercontent.com/u/105920111?v=4',
    linkedin: 'www.linkedin.com/in/marwan-elzafarani',
    github: 'https://github.com/Zafaranii'
  },
  {
    name: 'Omar Ahmed',
    role: 'Data Engineer / Web Developer',
    image: 'https://avatars.githubusercontent.com/u/85374545?v=4',
    linkedin: 'https://www.linkedin.com/in/omarahmed-oa/',
    github: 'https://github.com/OmarAhmed-A'
  },
  {
    name: 'Anton Ashraf',
    role: 'IoT Specialist',
    image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=300&q=80',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Abdelmalek Osama',
    role: 'AI/Backend Engineer',
    image: 'https://avatars.githubusercontent.com/u/126019678?v=4',
    linkedin: 'https://www.linkedin.com/in/abdelmalek-sobhy-2003aoms/n',
    github: 'https://github.com/Abdelmalek-Osama'
  },

  {
    name: 'Khaled Hegazy',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Omar Anwar',
    role: 'Hardware Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    linkedin: '#',
    github: '#'
  }
];

const Team: React.FC = () => {
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
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-700"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
