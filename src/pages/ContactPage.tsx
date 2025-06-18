import React from 'react';
import { Phone, MapPin, MessageCircle, Mail, Clock, Send, Facebook, Instagram } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Contact <span className="text-glow text-primary-500">Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're here to help! Reach out to us anytime for support, queries, or feedback.
          </p>
        </div>

        {/* Contact Methods */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="card-gaming p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
              <a
                href="tel:9341436937"
                className="text-primary-400 hover:text-primary-300 font-semibold text-lg transition-colors duration-300"
              >
                📞 9341436937
              </a>
              <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
            </div>

            {/* WhatsApp */}
            <div className="card-gaming p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">WhatsApp</h3>
              <a
                href="https://wa.me/9341436937?text=Hi%2C%20I%20want%20to%20know%20more%20about%20GameZone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 font-semibold transition-colors duration-300"
              >
                Chat with Us
              </a>
              <p className="text-gray-400 text-sm mt-2">Instant responses</p>
            </div>

            {/* Email */}
            <div className="card-gaming p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-dark-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <a
                href="mailto:info@gamezone.com"
                className="text-gold-400 hover:text-gold-300 font-semibold transition-colors duration-300"
              >
                info@gamezone.com
              </a>
              <p className="text-gray-400 text-sm mt-2">24-48 hours response</p>
            </div>

            {/* Support Hours */}
            <div className="card-gaming p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-neon-500 to-neon-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Support Hours</h3>
              <div className="text-neon-400 font-semibold">24/7 Available</div>
              <p className="text-gray-400 text-sm mt-2">Round the clock support</p>
            </div>
          </div>
        </section>

        {/* Contact Form & Address */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-gaming p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Payment Issues</option>
                    <option>Account Problems</option>
                    <option>Game Rules</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Address & Map */}
            <div className="space-y-8">
              <div className="card-gaming p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Our Office</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Plot No 97, Dakshinpuri - I, Shrikishan,<br />
                        Sanganer, Jagatpura, Jaipur,<br />
                        Rajasthan, India – 302017
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                      <a
                        href="tel:9341436937"
                        className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                      >
                        📞 9341436937
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <a
                        href="mailto:info@gamezone.com"
                        className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                      >
                        info@gamezone.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="card-gaming p-8">
                <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center hover:transform hover:scale-110 transition-all duration-300"
                  >
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-gradient-to-r from-pink-500 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center hover:transform hover:scale-110 transition-all duration-300"
                  >
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://wa.me/9341436937?text=Hi%2C%20I%20want%20to%20know%20more%20about%20GameZone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-full flex items-center justify-center hover:transform hover:scale-110 transition-all duration-300"
                  >
                    <MessageCircle className="h-6 w-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card-gaming p-8">
                <h3 className="text-xl font-bold text-white mb-4">Find Us</h3>
                <div className="bg-dark-700 aspect-video rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <div>Interactive Map</div>
                    <div className="text-sm">Jaipur, Rajasthan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section>
          <div className="card-gaming p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Quick <span className="text-gold-500">Answers?</span>
              </h2>
              <p className="text-gray-400">Check out our frequently asked questions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Payment Issues</h3>
                <p className="text-gray-400 text-sm mb-4">Having trouble with deposits or withdrawals?</p>
                <a href="/faq" className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300">
                  View Payment FAQ →
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Game Rules</h3>
                <p className="text-gray-400 text-sm mb-4">Need clarification on game rules?</p>
                <a href="/how-to-play" className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300">
                  Learn How to Play →
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Account Help</h3>
                <p className="text-gray-400 text-sm mb-4">Issues with login or account verification?</p>
                <a href="/faq" className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300">
                  Account Support →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;