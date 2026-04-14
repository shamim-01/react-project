import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const TeamCard = ({ member }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
            <button className="p-2 bg-white rounded-full hover:bg-purple-100 transition-colors">
              <FaLinkedin className="text-purple-600" />
            </button>
            <button className="p-2 bg-white rounded-full hover:bg-purple-100 transition-colors">
              <FaTwitter className="text-purple-600" />
            </button>
            <button className="p-2 bg-white rounded-full hover:bg-purple-100 transition-colors">
              <FaGithub className="text-purple-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-xl font-bold mb-1">{member.name}</h4>
        <p className="text-purple-600 font-semibold mb-2">{member.role}</p>
        <p className="text-gray-600 text-sm">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
