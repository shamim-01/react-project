import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaCode,
  FaHeart,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaCode className="text-3xl text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Smart Coders
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming ideas into exceptional digital solutions. We build
              innovative software that helps businesses thrive in the modern
              world.
            </p>
            <p className="text-gray-400">
              © {currentYear} Smart Coders. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'Blogs', 'About Us', 'Contact'].map(
                item => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-2">
                Subscribe to our Newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-4 py-2 bg-purple-600 rounded-r-lg hover:bg-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with by Shamim Alam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
