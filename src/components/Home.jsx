import React, { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaProjectDiagram,
  FaAward,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaChartLine,
  FaRocket,
} from 'react-icons/fa';

const Home = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    awards: 0,
  });

  useEffect(() => {
    const targetCounts = { clients: 500, projects: 1200, awards: 50 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        clients: Math.min(
          Math.floor((targetCounts.clients / steps) * step),
          targetCounts.clients,
        ),
        projects: Math.min(
          Math.floor((targetCounts.projects / steps) * step),
          targetCounts.projects,
        ),
        awards: Math.min(
          Math.floor((targetCounts.awards / steps) * step),
          targetCounts.awards,
        ),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="bg-white min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content with Animations */}
          <div>
            {/* Badge with Pulse Animation */}
            <div className="inline-flex items-center bg-purple-50 rounded-full px-4 py-2 mb-6 shadow-sm hover:shadow-md transition-all duration-300">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm font-semibold text-purple-700">
                #3 Rated SaaS Development Company 2026
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Ideas{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Into Reality
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We help businesses grow with cutting-edge software solutions.
              Expert developers, innovative technology, and exceptional results
              that drive real impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Project
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-gray-300 hover:border-purple-400 text-gray-700 hover:text-purple-600 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Learn More →
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div className="text-center lg:text-left transform hover:scale-110 transition-transform duration-300">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <FaUsers className="text-purple-500 text-xl" />
                  <span className="text-2xl font-bold text-gray-900">
                    {counters.clients}+
                  </span>
                </div>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              <div className="text-center lg:text-left transform hover:scale-110 transition-transform duration-300">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <FaProjectDiagram className="text-blue-500 text-xl" />
                  <span className="text-2xl font-bold text-gray-900">
                    {counters.projects}+
                  </span>
                </div>
                <p className="text-gray-500 text-sm">Projects Done</p>
              </div>
              <div className="text-center lg:text-left transform hover:scale-110 transition-transform duration-300">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <FaAward className="text-pink-500 text-xl" />
                  <span className="text-2xl font-bold text-gray-900">
                    {counters.awards}+
                  </span>
                </div>
                <p className="text-gray-500 text-sm">Awards Won</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors duration-300">
                <FaCheckCircle className="text-green-500" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors duration-300">
                <FaCheckCircle className="text-green-500" />
                <span>100% Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors duration-300">
                <FaCheckCircle className="text-green-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Side - Beautiful Illustration */}
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float-delayed blur-2xl"></div>

            {/* Main Illustration Card */}
            <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-3xl p-8 shadow-2xl border border-purple-100 transform hover:scale-105 transition-all duration-500">
              {/* Top Decorative Circles */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>

              {/* Main Illustration SVG */}
              <div className="relative mb-6">
                <svg
                  viewBox="0 0 400 300"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  {/* Background Circle */}
                  <circle
                    cx="200"
                    cy="150"
                    r="120"
                    fill="#8B5CF6"
                    opacity="0.1"
                  />
                  <circle
                    cx="200"
                    cy="150"
                    r="100"
                    fill="#8B5CF6"
                    opacity="0.15"
                  />

                  {/* Dashboard Container */}
                  <rect
                    x="100"
                    y="80"
                    width="200"
                    height="150"
                    rx="15"
                    fill="white"
                    stroke="#E9D5FF"
                    strokeWidth="2"
                  />

                  {/* Dashboard Header */}
                  <rect
                    x="100"
                    y="80"
                    width="200"
                    height="35"
                    rx="15"
                    fill="url(#headerGrad)"
                  />
                  <circle cx="120" cy="97" r="5" fill="#EF4444" />
                  <circle cx="135" cy="97" r="5" fill="#F59E0B" />
                  <circle cx="150" cy="97" r="5" fill="#10B981" />

                  {/* Chart Bars */}
                  <rect
                    x="120"
                    y="140"
                    width="25"
                    height="40"
                    rx="3"
                    fill="#8B5CF6"
                    opacity="0.8"
                  >
                    <animate
                      attributeName="height"
                      values="40;60;40"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    x="155"
                    y="120"
                    width="25"
                    height="60"
                    rx="3"
                    fill="#EC4899"
                    opacity="0.8"
                  >
                    <animate
                      attributeName="height"
                      values="60;80;60"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    x="190"
                    y="130"
                    width="25"
                    height="50"
                    rx="3"
                    fill="#06B6D4"
                    opacity="0.8"
                  >
                    <animate
                      attributeName="height"
                      values="50;70;50"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    x="225"
                    y="110"
                    width="25"
                    height="70"
                    rx="3"
                    fill="#8B5CF6"
                    opacity="0.8"
                  >
                    <animate
                      attributeName="height"
                      values="70;50;70"
                      dur="2.2s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    x="260"
                    y="135"
                    width="25"
                    height="45"
                    rx="3"
                    fill="#EC4899"
                    opacity="0.8"
                  >
                    <animate
                      attributeName="height"
                      values="45;65;45"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </rect>

                  {/* Bottom Grid Lines */}
                  <line
                    x1="110"
                    y1="195"
                    x2="290"
                    y2="195"
                    stroke="#E5E7EB"
                    strokeWidth="1"
                  />
                  <line
                    x1="110"
                    y1="210"
                    x2="290"
                    y2="210"
                    stroke="#E5E7EB"
                    strokeWidth="1"
                  />

                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient
                      id="headerGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Rocket Icon Overlay */}
                <div className="absolute -top-5 -right-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-3 shadow-lg animate-bounce-slow">
                  <FaRocket className="text-white text-xl" />
                </div>

                {/* Chart Icon Overlay */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-full p-3 shadow-lg border border-purple-100 animate-float">
                  <FaChartLine className="text-purple-600 text-xl" />
                </div>
              </div>

              {/* Illustration Text */}
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Real-time Analytics Dashboard
                </h3>
                <p className="text-sm text-gray-600">
                  Monitor your business growth in real-time with our advanced
                  analytics tools.
                </p>
              </div>

              {/* Tech Stack Icons */}
              <div className="flex justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
                  <FaCode className="text-purple-600 text-sm" />
                  <span className="text-xs font-medium text-gray-700">
                    React
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
                  <FaMobileAlt className="text-blue-600 text-sm" />
                  <span className="text-xs font-medium text-gray-700">
                    Mobile
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
                  <FaCloud className="text-green-600 text-sm" />
                  <span className="text-xs font-medium text-gray-700">
                    Cloud
                  </span>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-1 shadow-md">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-700">
                    4.9
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-8 -left-8 bg-white rounded-xl p-3 shadow-xl border border-purple-100 animate-float hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-green-600 text-sm" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">
                    Project Completed
                  </p>
                  <p className="text-xs text-gray-500">1,200+ projects</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-3 shadow-xl border border-purple-100 animate-float-delayed hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <FaUsers className="text-purple-600 text-sm" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">
                    Happy Clients
                  </p>
                  <p className="text-xs text-gray-500">500+ worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite 1s;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
