import React, { useState, useEffect } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
  FaHeadset,
  FaBuilding,
  FaCheckCircle,
  FaArrowRight,
  FaRegSmile,
} from 'react-icons/fa';
import { MdSupportAgent, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    support: 0,
    satisfaction: 0,
    experience: 0,
  });

  // Counter Animation
  useEffect(() => {
    const targets = {
      clients: 500,
      support: 24,
      satisfaction: 100,
      experience: 15,
    };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        clients: Math.min(
          Math.floor((targets.clients / steps) * step),
          targets.clients,
        ),
        support: Math.min(
          Math.floor((targets.support / steps) * step),
          targets.support,
        ),
        satisfaction: Math.min(
          Math.floor((targets.satisfaction / steps) * step),
          targets.satisfaction,
        ),
        experience: Math.min(
          Math.floor((targets.experience / steps) * step),
          targets.experience,
        ),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  const contactInfo = [
    {
      icon: MdEmail,
      title: 'Email Us',
      details: ['hello@smartcoders.com', 'support@smartcoders.com'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      delay: 0,
    },
    {
      icon: MdPhone,
      title: 'Call Us',
      details: ['+99 (555) 000-0000', '+99 (555) 111-1111'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      delay: 100,
    },
    {
      icon: MdLocationOn,
      title: 'Visit Us',
      details: ['107 Love Road', 'Dhaka , CA 94043'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      delay: 200,
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM', status: 'open' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM', status: 'limited' },
    { day: 'Sunday', hours: 'Closed', status: 'closed' },
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Animation */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-4 py-2 border border-purple-200 shadow-sm mb-4 hover:shadow-md transition-all duration-300">
            <FaHeadset className="text-purple-600 mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-purple-700">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Let's Discuss Your{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Project
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or want to work together? We'd love to hear from
            you. Our team is ready to help you bring your ideas to life.
          </p>
        </div>

        {/* Contact Info Cards with Animation */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${info.bgColor} rounded-2xl p-6 border ${info.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp`}
                style={{ animationDelay: `${info.delay}ms` }}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <Icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p
                    key={i}
                    className="text-gray-600 mb-1 group-hover:text-gray-800 transition-colors duration-300"
                  >
                    {detail}
                  </p>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-200/50">
                  <a
                    href="#"
                    className="text-sm font-semibold text-purple-600 hover:text-purple-700 flex items-center group/link"
                  >
                    Contact via {info.title.toLowerCase()}
                    <FaArrowRight className="ml-2 text-xs group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Additional Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Office Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-slideInLeft">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center animate-pulse">
                  <FaClock className="text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Office Hours
                </h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-2 rounded-lg transition-colors duration-300"
                  >
                    <span className="text-gray-700 font-medium">
                      {schedule.day}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">{schedule.hours}</span>
                      <span
                        className={`w-2 h-2 rounded-full animate-pulse ${
                          schedule.status === 'open'
                            ? 'bg-green-500'
                            : schedule.status === 'limited'
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                        }`}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200 shadow-sm transform hover:-translate-y-1 transition-all duration-300 animate-slideInLeft delay-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-bounce">
                  <FaCheckCircle className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Why Choose Us?
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2 group hover:translate-x-1 transition-transform duration-300">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 text-sm">
                    24/7 Dedicated Support Team
                  </span>
                </li>
                <li className="flex items-start space-x-2 group hover:translate-x-1 transition-transform duration-300">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 text-sm">
                    15+ Years Industry Experience
                  </span>
                </li>
                <li className="flex items-start space-x-2 group hover:translate-x-1 transition-transform duration-300">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 text-sm">
                    Certified Expert Developers
                  </span>
                </li>
                <li className="flex items-start space-x-2 group hover:translate-x-1 transition-transform duration-300">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 text-sm">
                    100% Client Satisfaction Rate
                  </span>
                </li>
              </ul>
            </div>

            {/* Map Preview */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-slideInLeft delay-200">
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl h-32 flex items-center justify-center border border-gray-200 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-center z-10">
                  <FaBuilding className="text-3xl text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-sm text-gray-600 font-medium">
                    Silicon Valley HQ
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
                    View on Google Maps →
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:shadow-2xl transition-all duration-300 animate-slideInRight">
              {isSubmitted ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <FaCheckCircle className="text-4xl text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You! 🎉
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to
                    you within 24 hours!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you as soon
                      as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div
                        className="animate-fadeInUp"
                        style={{ animationDelay: '0ms' }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-gray-50 rounded-lg border ${
                              errors.name
                                ? 'border-red-400 focus:ring-red-400'
                                : 'border-gray-200 focus:ring-purple-400'
                            } focus:outline-none focus:ring-2 focus:border-transparent transition-all hover:bg-white`}
                            placeholder="Shamim Alam"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1 animate-shake">
                              {errors.name}
                            </p>
                          )}
                        </div>
                      </div>

                      <div
                        className="animate-fadeInUp"
                        style={{ animationDelay: '100ms' }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-gray-50 rounded-lg border ${
                              errors.email
                                ? 'border-red-400 focus:ring-red-400'
                                : 'border-gray-200 focus:ring-purple-400'
                            } focus:outline-none focus:ring-2 focus:border-transparent transition-all hover:bg-white`}
                            placeholder="shamim@example.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1 animate-shake">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div
                        className="animate-fadeInUp"
                        style={{ animationDelay: '200ms' }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all hover:bg-white"
                          placeholder="+99 (555) 000-0000"
                        />
                      </div>

                      <div
                        className="animate-fadeInUp"
                        style={{ animationDelay: '300ms' }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all hover:bg-white"
                          placeholder="Project Inquiry"
                        />
                      </div>
                    </div>

                    <div
                      className="animate-fadeInUp"
                      style={{ animationDelay: '400ms' }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-4 py-3 bg-gray-50 rounded-lg border ${
                          errors.message
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-gray-200 focus:ring-purple-400'
                        } focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none hover:bg-white`}
                        placeholder="Tell us about your project, requirements, or any questions you have..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1 animate-shake">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div
                      className="flex items-center space-x-2 animate-fadeInUp"
                      style={{ animationDelay: '500ms' }}
                    >
                      <input
                        type="checkbox"
                        id="privacy"
                        className="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      />
                      <label
                        htmlFor="privacy"
                        className="text-sm text-gray-600"
                      >
                        I agree to the{' '}
                        <a
                          href="#"
                          className="text-purple-600 hover:text-purple-700 font-medium"
                        >
                          Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a
                          href="#"
                          className="text-purple-600 hover:text-purple-700 font-medium"
                        >
                          Terms of Service
                        </a>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group animate-fadeInUp"
                      style={{ animationDelay: '600ms' }}
                    >
                      <span>Send Message</span>
                      <FaPaperPlane className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      We'll get back to you within 24 hours. Your information is
                      safe with us.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Trust Indicators with Counter Animation */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group transform hover:scale-110 transition-transform duration-300 animate-fadeInUp">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {counters.clients}+
              </div>
              <p className="text-sm text-gray-600 font-medium mt-1 flex items-center justify-center gap-1">
                <FaRegSmile className="text-purple-500" />
                Happy Clients
              </p>
            </div>
            <div className="text-center group transform hover:scale-110 transition-transform duration-300 animate-fadeInUp delay-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {counters.support}/7
              </div>
              <p className="text-sm text-gray-600 font-medium mt-1 flex items-center justify-center gap-1">
                <FaHeadset className="text-blue-500" />
                Support Available
              </p>
            </div>
            <div className="text-center group transform hover:scale-110 transition-transform duration-300 animate-fadeInUp delay-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {counters.satisfaction}%
              </div>
              <p className="text-sm text-gray-600 font-medium mt-1 flex items-center justify-center gap-1">
                <FaCheckCircle className="text-green-500" />
                Satisfaction Rate
              </p>
            </div>
            <div className="text-center group transform hover:scale-110 transition-transform duration-300 animate-fadeInUp delay-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {counters.experience}+
              </div>
              <p className="text-sm text-gray-600 font-medium mt-1 flex items-center justify-center gap-1">
                <FaBuilding className="text-orange-500" />
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Contact;
