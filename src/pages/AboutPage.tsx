import React from 'react';
import { Shield, Users, Trophy, MapPin, Star, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-glow text-primary-500">GameZone</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            India's most trusted real-money gaming platform, bringing you the excitement of 
            Rummy, Poker, and Pool with complete security and fair play.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our <span className="text-gold-500">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Founded in the heart of Jaipur, Rajasthan, GameZone emerged from a passion for 
                  bringing traditional Indian card games and cue sports to the digital age. Our 
                  journey began with a simple vision: to create a platform where skill meets 
                  opportunity, and every game is a chance to win real money.
                </p>
                <p>
                  What started as a small team of gaming enthusiasts has grown into India's 
                  premier real-money gaming platform, trusted by over 10 lakh players nationwide. 
                  We've revolutionized online gaming by combining cutting-edge technology with 
                  time-tested games that Indians love.
                </p>
                <p>
                  Based in Jaipur's vibrant tech ecosystem, we've built a platform that celebrates 
                  skill-based gaming while ensuring complete transparency, security, and responsible 
                  gaming practices.
                </p>
              </div>
            </div>
            <div className="card-gaming p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-8 w-8 text-primary-500" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Our Location</h3>
                    <p className="text-gray-400">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
                <div className="text-sm text-gray-400 leading-relaxed">
                  Plot No 97, Dakshinpuri - I, Shrikishan,<br />
                  Sanganer, Jagatpura, Jaipur,<br />
                  Rajasthan, India – 302017
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-gaming p-8">
              <div className="text-center space-y-6">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To provide a secure, fair, and entertaining platform where players can showcase 
                  their skills in traditional games while earning real money rewards, all while 
                  promoting responsible gaming practices.
                </p>
              </div>
            </div>
            <div className="card-gaming p-8">
              <div className="text-center space-y-6">
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-dark-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become India's leading skill-based gaming platform, where millions of players 
                  can enjoy their favorite games, develop their skills, and create lasting memories 
                  in a safe and trusted environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Security */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trust & <span className="text-neon-500">Security</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your safety and security are our top priorities. Here's how we protect you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-gaming p-8 text-center">
              <div className="bg-gradient-to-r from-neon-500 to-neon-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Advanced Encryption</h3>
              <p className="text-gray-300">
                256-bit SSL encryption protects all your personal and financial data with 
                bank-level security standards.
              </p>
            </div>

            <div className="card-gaming p-8 text-center">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Fair Play Guarantee</h3>
              <p className="text-gray-300">
                Our certified Random Number Generator ensures completely fair gameplay for 
                all players, all the time.
              </p>
            </div>

            <div className="card-gaming p-8 text-center">
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-dark-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Responsible Gaming</h3>
              <p className="text-gray-300">
                We promote healthy gaming habits with deposit limits, self-exclusion options, 
                and addiction support resources.
              </p>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <div className="card-gaming p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="text-gold-500">Values</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Integrity',
                  description: 'Complete transparency in all our operations and fair play for every user.',
                  icon: '🛡️'
                },
                {
                  title: 'Innovation',
                  description: 'Constantly improving our platform with cutting-edge technology and features.',
                  icon: '🚀'
                },
                {
                  title: 'Community',
                  description: 'Building a vibrant gaming community where everyone feels welcome and valued.',
                  icon: '🤝'
                },
                {
                  title: 'Excellence',
                  description: 'Striving for perfection in every aspect of our platform and customer service.',
                  icon: '⭐'
                }
              ].map((value, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-primary-500">Achievements</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">10L+</div>
              <div className="text-white font-semibold mb-1">Registered Players</div>
              <div className="text-gray-400 text-sm">And growing daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">₹50Cr+</div>
              <div className="text-white font-semibold mb-1">Prize Money Distributed</div>
              <div className="text-gray-400 text-sm">Life-changing wins</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neon-500 mb-2">99.9%</div>
              <div className="text-white font-semibold mb-1">Uptime</div>
              <div className="text-gray-400 text-sm">Always available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">24/7</div>
              <div className="text-white font-semibold mb-1">Customer Support</div>
              <div className="text-gray-400 text-sm">Here when you need us</div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="card-gaming p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Gaming Community?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Experience the thrill of skill-based gaming with complete security and transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download App Now
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;