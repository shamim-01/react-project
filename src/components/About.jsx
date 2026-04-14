import React from 'react';
import TeamCard from './TeamCard';
import { FaRocket, FaEye, FaHandshake } from 'react-icons/fa';
import man3 from '../images/man3.jpg';
import man5 from '../images/man5.jpg';
import man4 from '../images/man4.jpg';
import man2 from '../images/man2.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      image: man3,
      bio: '15+ years in tech leadership',
    },
    {
      name: 'James Lee',
      role: 'Head of Engineering',
      image: man5,
      bio: 'Full-stack expert, AI specialist',
    },
    {
      name: 'James Wilson',
      role: 'Product Director',
      image: man4,
      bio: 'Product strategy and UX expert',
    },
    {
      name: 'Priya Sharma',
      role: 'Lead Designer',
      image: man2,
      bio: 'Award-winning UI/UX designer',
    },
  ];

  return (
    <section
      id="about-us"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Smart Coders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're a team of passionate developers, designers, and innovators
            dedicated to building exceptional digital solutions. Since 2020,
            we've been helping businesses transform their ideas into reality
            with cutting-edge technology and creative excellence.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <FaRocket className="text-3xl text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with innovative technology solutions that
              drive growth, efficiency, and digital transformation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <FaEye className="text-3xl text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the global leader in creating accessible, scalable, and
              sustainable software solutions for businesses of all sizes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
              <FaHandshake className="text-3xl text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-600">
              Innovation, integrity, collaboration, and customer success are at
              the heart of everything we do.
            </p>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Short Testimonials */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-8">
            What Drives Us
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <p className="text-lg text-gray-700 italic mb-4">
                "Smart Coders didn't just build our platform; they became true
                partners in our success. Their dedication to quality and
                innovation is unmatched."
              </p>
              <p className="font-semibold">- Robert Chen, CEO of DataFlow</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <p className="text-lg text-gray-700 italic mb-4">
                "The team's technical expertise combined with their creative
                approach to problem-solving has been instrumental in our digital
                transformation journey."
              </p>
              <p className="font-semibold">
                - Amanda Foster, CTO of GrowthLabs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
