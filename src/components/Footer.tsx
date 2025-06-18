import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, Facebook, Instagram, Mail, Gamepad2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary-500 to-gold-500 p-2 rounded-lg">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-gold-500 bg-clip-text text-transparent">
                GameZone
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's premier real-money gaming platform featuring Rummy, Poker, and Pool. 
              Play responsibly and win big with our secure gaming environment.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@gamezone.com"
                className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/games" className="block text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Games
              </Link>
              <Link to="/promotions" className="block text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Promotions
              </Link>
              <Link to="/how-to-play" className="block text-gray-400 hover:text-primary-500 transition-colors duration-300">
                How to Play
              </Link>
              <Link to="/download" className="block text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Download App
              </Link>
              <Link to="/refer" className="block text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Refer & Earn
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <div className="space-y-2">
              <Link to="/faq" className="block text-gray-400 hover:text-primary-500 transition-colors duration-300">
                FAQ
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Contact Us
              </Link>
              <Link to="/terms" className="block text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/responsible-gaming" className="block text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Responsible Gaming
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:9341436937"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    📞 9341436937
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  Plot No 97, Dakshinpuri - I, Shrikishan,<br />
                  Sanganer, Jagatpura, Jaipur,<br />
                  Rajasthan, India – 302017
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-500" />
                <a
                  href="https://wa.me/9341436937?text=Hi%2C%20I%20want%20to%20know%20more%20about%20GameZone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors duration-300"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 GameZone. All rights reserved. Play responsibly. 18+
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/terms" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Terms
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Privacy
              </Link>
              <Link to="/responsible-gaming" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                Responsible Gaming
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;