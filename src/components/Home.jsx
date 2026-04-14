import React, { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaPlay,
  FaStar,
  FaUsers,
  FaProjectDiagram,
  FaAward,
  FaCode,
  FaRocket,
} from 'react-icons/fa';
import {
  MdOutlineSpeed,
  MdSecurity,
  MdCloudDone,
  MdTrendingUp,
} from 'react-icons/md';

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
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Gradient Orbs for visual interest */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-4 py-2 border border-purple-200 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm font-semibold text-purple-700">
                #1 Rated SaaS Development Company 2026
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                Transform Your Ideas Into{' '}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                    Digital Excellence
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10 Q 50 20, 100 10 T 200 10"
                      stroke="#8B5CF6"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
                We craft cutting-edge software solutions that empower businesses
                to thrive in the digital age. Expert developers, innovative
                technology, exceptional results.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 shadow-sm">
                <FaCheckCircle className="text-green-500" />
                <span className="text-sm text-gray-700 font-medium">
                  Free Consultation
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 shadow-sm">
                <FaCheckCircle className="text-green-500" />
                <span className="text-sm text-gray-700 font-medium">
                  100% Satisfaction
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 shadow-sm">
                <FaCheckCircle className="text-green-500" />
                <span className="text-sm text-gray-700 font-medium">
                  24/7 Support
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Start Your Project
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>

              <button className="group flex items-center justify-center px-8 py-4 border-2 border-gray-300 rounded-full font-semibold text-gray-700 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mr-3 group-hover:from-purple-200 group-hover:to-pink-200 transition-all">
                  <FaPlay className="text-purple-600 text-sm ml-0.5" />
                </div>
                Watch Demo Video
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <FaUsers className="text-purple-600 text-xl" />
                  <span className="text-3xl font-bold text-gray-900">
                    {counters.clients}+
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1 font-medium">
                  Happy Clients
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <FaProjectDiagram className="text-blue-600 text-xl" />
                  <span className="text-3xl font-bold text-gray-900">
                    {counters.projects}+
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1 font-medium">
                  Projects Delivered
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <FaAward className="text-pink-600 text-xl" />
                  <span className="text-3xl font-bold text-gray-900">
                    {counters.awards}+
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1 font-medium">
                  Industry Awards
                </p>
              </div>
            </div>

            {/* Client Logos */}
            <div className="pt-6">
              <p className="text-gray-600 text-sm mb-3 font-medium">
                Trusted by innovative companies worldwide
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="h-10 w-28 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">
                    stripe
                  </span>
                </div>
                <div className="h-10 w-28 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">
                    shopify
                  </span>
                </div>
                <div className="h-10 w-28 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">
                    microsoft
                  </span>
                </div>
                <div className="h-10 w-28 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">
                    github
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="animate-fade-in relative">
            {/* Floating Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl rotate-12 animate-float shadow-lg hidden lg:block"></div>
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full animate-float-delayed shadow-lg hidden lg:block"></div>
            <div className="absolute top-1/2 -right-10 w-12 h-12 bg-gradient-to-br from-green-200 to-emerald-200 rounded-lg -rotate-12 animate-float shadow-lg hidden lg:block"></div>

            {/* Main Dashboard Card */}
            <div className="relative bg-white rounded-3xl p-6 border border-gray-200 shadow-2xl transform hover:scale-105 transition-all duration-500">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-gray-700 text-sm font-semibold ml-2">
                    Live Analytics Dashboard
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                  <MdCloudDone className="text-green-600" />
                  <span className="text-green-700 text-xs font-medium">
                    Synced
                  </span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100 shadow-sm">
                  <FaUsers className="text-2xl text-purple-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">2.4K</div>
                  <div className="text-xs text-gray-600 font-medium">
                    Active Users
                  </div>
                  <div className="text-green-600 text-xs mt-1 font-semibold flex items-center">
                    <MdTrendingUp className="mr-0.5" />
                    12% this week
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100 shadow-sm">
                  <MdOutlineSpeed className="text-2xl text-blue-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-xs text-gray-600 font-medium">
                    Performance
                  </div>
                  <div className="text-green-600 text-xs mt-1 font-semibold flex items-center">
                    <MdTrendingUp className="mr-0.5" />
                    5% this week
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100 shadow-sm">
                  <MdSecurity className="text-2xl text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">A+</div>
                  <div className="text-xs text-gray-600 font-medium">
                    Security Score
                  </div>
                  <div className="text-green-600 text-xs mt-1 font-semibold">
                    Top 1%
                  </div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="space-y-3 bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm font-semibold">
                    Revenue Growth
                  </span>
                  <span className="text-green-600 text-sm font-bold">
                    +23.5%
                  </span>
                </div>
                <div className="h-20 flex items-end space-x-2">
                  {[65, 45, 78, 56, 89, 72, 95].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg transition-all duration-1000"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-700 text-sm font-semibold">
                    Recent Activity
                  </span>
                  <button className="text-purple-600 text-xs font-semibold hover:text-purple-700">
                    View All →
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <span className="text-gray-700 text-sm">
                        New user registered
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs">2 min ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <span className="text-gray-700 text-sm">
                        Project "Alpha" completed
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs">15 min ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <span className="text-gray-700 text-sm">
                        Payment received
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs">1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Review Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-2xl max-w-xs border border-gray-100 animate-float-delayed hidden lg:block">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm mb-2 font-medium">
                    "Best development team we've worked with. Exceeded all
                    expectations!"
                  </p>
                  <p className="text-gray-900 font-semibold text-sm">
                    John Doe
                  </p>
                  <p className="text-gray-500 text-xs">CEO, TechStart Inc.</p>
                </div>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="absolute -top-8 right-12 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200 hidden lg:flex items-center space-x-2 animate-float">
              <FaCode className="text-purple-600" />
              <span className="text-gray-700 text-sm font-semibold">
                React • Node.js • Python
              </span>
            </div>

            {/* Rocket Icon Badge */}
            <div className="absolute -bottom-12 right-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-3 shadow-xl hidden lg:block animate-float-delayed">
              <FaRocket className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default Home;
