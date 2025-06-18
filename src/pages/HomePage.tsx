import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Download, Gift, Users, Shield, Trophy, Spade, Target } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
        <div className="absolute inset-0 bg-gaming-hero opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-primary-500 via-gold-500 to-neon-500 bg-clip-text text-transparent animate-pulse-glow">
                  Win Real Money
                </span>
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                Playing Your Favorite Games
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Experience the thrill of Rummy, Poker & Pool with India's most trusted gaming platform
              </p>
            </div>

            {/* Signup Bonus Banner */}
            <div className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 px-8 py-4 rounded-full font-bold text-lg md:text-xl animate-bounce-slow border-glow border-gold-400">
              🎁 Get ₹50 Bonus on Signup!
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 animate-glow"
              >
                <Download className="h-6 w-6" />
                <span className="text-lg">Download from Play Store</span>
              </a>
              <Link
                to="/games"
                className="flex items-center space-x-3 bg-gradient-to-r from-neon-500 to-neon-600 hover:from-neon-600 hover:to-neon-700 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Play className="h-6 w-6" />
                <span className="text-lg">Play Now</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Game Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="bg-primary-500/20 p-4 rounded-full border border-primary-500 animate-card-flip">
            <Spade className="h-8 w-8 text-primary-500" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-gold-500/20 p-4 rounded-full border border-gold-500 animate-pool-roll">
            <Target className="h-8 w-8 text-gold-500" />
          </div>
        </div>
      </section>

      {/* Games Preview Section */}
      <section className="py-16 lg:py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Choose Your <span className="text-glow text-primary-500">Game</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Master your skills in India's most popular card and cue sports games
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rummy Card */}
            <div className="card-gaming p-8 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-20 h-20 mx-auto rounded-full flex items-center justify-center group-hover:animate-card-flip">
                  <Spade className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">🃏 Play Rummy Online</h3>
                  <p className="text-gray-400 mb-6">
                    Classic 13-card rummy with real cash prizes. Form sequences and sets to win big!
                  </p>
                </div>
                <Link
                  to="/games"
                  className="btn-primary w-full inline-block text-center"
                >
                  Start Playing Rummy
                </Link>
              </div>
            </div>

            {/* Poker Card */}
            <div className="card-gaming p-8 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 w-20 h-20 mx-auto rounded-full flex items-center justify-center group-hover:animate-poker-chips">
                  <Trophy className="h-10 w-10 text-dark-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">♠️ Play Poker Online</h3>
                  <p className="text-gray-400 mb-6">
                    Test your skills in Texas Hold'em and win against players nationwide!
                  </p>
                </div>
                <Link
                  to="/games"
                  className="btn-secondary w-full inline-block text-center"
                >
                  Join Poker Tables
                </Link>
              </div>
            </div>

            {/* Pool Card */}
            <div className="card-gaming p-8 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="bg-gradient-to-r from-neon-500 to-neon-600 w-20 h-20 mx-auto rounded-full flex items-center justify-center group-hover:animate-pool-roll">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">🎱 Play Pool Online</h3>
                  <p className="text-gray-400 mb-6">
                    8-Ball and 9-Ball pool games with multiplayer tournaments and cash rewards!
                  </p>
                </div>
                <Link
                  to="/games"
                  className="btn-neon w-full inline-block text-center"
                >
                  Play Pool Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-glow text-gold-500">GameZone?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">100% Secure</h3>
              <p className="text-gray-400">Advanced encryption and secure payment gateway</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-dark-900" />
              </div>
              <h3 className="text-xl font-bold text-white">10L+ Players</h3>
              <p className="text-gray-400">Join India's largest gaming community</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-neon-500 to-neon-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Daily Bonuses</h3>
              <p className="text-gray-400">Exciting rewards and cashback offers</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-primary-500 via-gold-500 to-neon-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Big Wins</h3>
              <p className="text-gray-400">Lakhs won daily by our players</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-500 via-gold-500 to-neon-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Win Real Money?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Download our app now and get ₹50 bonus instantly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-white text-dark-900 font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="h-6 w-6" />
              <span className="text-lg">Download from Play Store</span>
            </a>
            <Link
              to="/register"
              className="flex items-center justify-center space-x-3 bg-dark-900 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Gift className="h-6 w-6" />
              <span className="text-lg">Claim ₹50 Bonus</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;