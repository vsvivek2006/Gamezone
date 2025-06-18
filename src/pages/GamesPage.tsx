import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Trophy, Users, Clock, Spade, Target, Award } from 'lucide-react';

const GamesPage = () => {
  const [activeTab, setActiveTab] = useState('rummy');

  const games = {
    rummy: {
      title: '🃏 Play Rummy Online',
      description: 'Classic 13-card Indian Rummy with real cash prizes',
      icon: Spade,
      color: 'from-primary-500 to-primary-600',
      features: [
        'Classic 13-card Rummy',
        'Points Rummy & Pool Rummy',
        'Tournaments & Cash Games',
        'Fast 2-6 player tables'
      ],
      rules: [
        'Form at least 2 sequences (one pure)',
        'Arrange cards in sets and sequences',
        'Declare when all cards are arranged',
        'First to declare wins the game'
      ]
    },
    poker: {
      title: '♠️ Play Poker Online',
      description: 'Texas Hold\'em Poker with strategic gameplay',
      icon: Trophy,
      color: 'from-gold-500 to-gold-600',
      features: [
        'Texas Hold\'em Poker',
        'Multi-table tournaments',
        'Sit & Go competitions',
        'Live dealer games'
      ],
      rules: [
        'Get the best 5-card hand',
        'Use community cards wisely',
        'Bluff and read opponents',
        'Win with best hand or by folding others'
      ]
    },
    pool: {
      title: '🎱 Play Pool Online',
      description: '8-Ball and 9-Ball Pool with multiplayer action',
      icon: Target,
      color: 'from-neon-500 to-neon-600',
      features: [
        '8-Ball & 9-Ball Pool',
        'Real-time multiplayer',
        'Practice mode available',
        'Global leaderboards'
      ],
      rules: [
        'Pot your designated balls first',
        'Avoid potting the cue ball or 8-ball early',
        'Call your shots in 8-ball',
        'Pot balls in sequence in 9-ball'
      ]
    }
  };

  const currentGame = games[activeTab as keyof typeof games];
  const Icon = currentGame.icon;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Choose Your <span className="text-glow text-primary-500">Game</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Master your skills and win real money in India's most popular games
          </p>
        </div>

        {/* Game Tabs */}
        <div className="flex flex-col lg:flex-row gap-2 mb-8 bg-dark-800 p-2 rounded-xl">
          {Object.entries(games).map(([key, game]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${game.color} text-white shadow-lg`
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              {game.title}
            </button>
          ))}
        </div>

        {/* Game Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Game Info */}
          <div className="space-y-8">
            <div className="card-gaming p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`bg-gradient-to-r ${currentGame.color} w-16 h-16 rounded-full flex items-center justify-center`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{currentGame.title}</h2>
                  <p className="text-gray-400">{currentGame.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-gold-500" />
                    Game Features
                  </h3>
                  <ul className="space-y-2">
                    {currentGame.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-gold-500" />
                    Basic Rules
                  </h3>
                  <ul className="space-y-2">
                    {currentGame.rules.map((rule, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="text-primary-500 font-bold mr-3">{index + 1}.</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-gaming p-6 text-center">
                <Users className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-gray-400">Active Players</div>
              </div>
              <div className="card-gaming p-6 text-center">
                <Clock className="h-8 w-8 text-gold-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-gray-400">Gaming Available</div>
              </div>
            </div>
          </div>

          {/* Game Demo/Preview */}
          <div className="space-y-8">
            <div className="card-gaming p-8 text-center">
              <div className={`bg-gradient-to-r ${currentGame.color} w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-6 animate-pulse-glow`}>
                <Icon className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Play?</h3>
              <p className="text-gray-400 mb-6">
                Join thousands of players and start winning real money today!
              </p>
              <div className="space-y-4">
                <Link
                  to="/register"
                  className={`block btn-primary text-center`}
                >
                  <Play className="inline-block h-5 w-5 mr-2" />
                  Start Playing Now
                </Link>
                <Link
                  to="/how-to-play"
                  className="block border border-gray-600 text-gray-300 hover:text-white hover:border-primary-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Learn How to Play
                </Link>
              </div>
            </div>

            {/* Live Tables Preview */}
            <div className="card-gaming p-6">
              <h3 className="text-xl font-bold text-white mb-4">Live Tables</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((table) => (
                  <div key={table} className="flex items-center justify-between p-3 bg-dark-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-white font-medium">Table {table}</span>
                      <span className="text-gray-400 text-sm">₹{table * 10} Entry</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{Math.floor(Math.random() * 4) + 2}/6</span>
                      <button className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-300">
                        Join
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  to="/login"
                  className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300"
                >
                  View All Tables →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tournament Section */}
        <section className="card-gaming p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              <Trophy className="inline-block h-8 w-8 mr-2 text-gold-500" />
              Daily Tournaments
            </h2>
            <p className="text-gray-400">
              Compete with the best players and win massive cash prizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Morning Rush', time: '9:00 AM', prize: '₹50,000', entry: '₹100' },
              { name: 'Afternoon Ace', time: '2:00 PM', prize: '₹1,00,000', entry: '₹200' },
              { name: 'Night Champion', time: '8:00 PM', prize: '₹2,00,000', entry: '₹500' }
            ].map((tournament, index) => (
              <div key={index} className="bg-gradient-to-br from-dark-700 to-dark-800 p-6 rounded-xl border border-dark-600 hover:border-primary-500 transition-all duration-300">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-white">{tournament.name}</h3>
                  <div className="space-y-2">
                    <div className="text-gray-400">Starts: {tournament.time}</div>
                    <div className="text-2xl font-bold text-gold-500">{tournament.prize}</div>
                    <div className="text-gray-400">Entry: {tournament.entry}</div>
                  </div>
                  <button className="btn-primary w-full">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GamesPage;