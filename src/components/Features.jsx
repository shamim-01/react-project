import React from 'react';
import FeatureCard from './FeatureCard';
import { FaComments, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: FaComments,
      title: 'Real-time Communication',
      description:
        'Connect with your team instantly through our advanced messaging system. Share ideas, files, and feedback in real-time with crystal clear audio and video calls.',
      image: './src/images/programmer_v_02.jpg',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: FaChartLine,
      title: 'Smart Analytics Dashboard',
      description:
        'Track your project progress with intelligent analytics. Get actionable insights, performance metrics, and predictive analysis to make data-driven decisions.',
      image: './src/images/19362653.jpg',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: FaShieldAlt,
      title: 'Enterprise-grade Security',
      description:
        'Your data is protected with military-grade encryption. We ensure compliance with global security standards and provide advanced threat protection.',
      image: './src/images/40752.jpg',
      gradient: 'from-green-400 to-emerald-500',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Communicate and{' '}
            <span className="gradient-text">Gather Feedback</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to streamline your workflow and enhance
            team collaboration
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
