import React, { useState } from 'react';
import { ChevronRight, Play, Trophy, Lightbulb, Target, Spade, Award } from 'lucide-react';

const HowToPlayPage = () => {
  const [activeGame, setActiveGame] = useState('rummy');

  const gameGuides = {
    rummy: {
      title: '🃏 How to Play Rummy',
      description: 'Learn the classic 13-card Indian Rummy game',
      icon: Spade,
      color: 'from-primary-500 to-primary-600',
      steps: [
        {
          title: 'Understand the Objective',
          content: 'Form at least 2 sequences (one must be pure) and arrange all 13 cards in valid sets and sequences.',
          tip: 'A pure sequence has no jokers, while an impure sequence can have jokers.'
        },
        {
          title: 'Know Your Cards',
          content: 'Each player gets 13 cards. The remaining cards form the closed deck, with one card placed face-up as the open deck.',
          tip: 'Jokers can substitute any card to complete sets and sequences.'
        },
        {
          title: 'Make Your Moves',
          content: 'Pick a card from either deck and discard one card to the open deck. Continue until you form valid sequences and sets.',
          tip: 'Always prioritize forming a pure sequence first.'
        },
        {
          title: 'Declare and Win',
          content: 'Once all cards are arranged in valid combinations, click "Declare" to show your cards and win the game.',
          tip: 'Double-check your sequences before declaring to avoid penalties.'
        }
      ],
      scoring: [
        'Winner gets 0 points',
        'Face cards (K, Q, J) = 10 points each',
        'Ace = 1 point (when used in A-2-3) or 10 points (when used in Q-K-A)',
        'Number cards = Face value',
        'Jokers = 0 points'
      ]
    },
    poker: {
      title: '♠️ How to Play Poker',
      description: 'Master Texas Hold\'em Poker strategy',
      icon: Trophy,
      color: 'from-gold-500 to-gold-600',
      steps: [
        {
          title: 'Learn Hand Rankings',
          content: 'Understand poker hand rankings from Royal Flush (highest) to High Card (lowest).',
          tip: 'Memorize hand rankings: Royal Flush, Straight Flush, Four of a Kind, Full House, Flush, Straight, Three of a Kind, Two Pair, One Pair, High Card.'
        },
        {
          title: 'Understand Betting Rounds',
          content: 'Pre-flop, Flop, Turn, and River. Each round allows you to fold, call, raise, or check.',
          tip: 'Position matters - later positions have more information before making decisions.'
        },
        {
          title: 'Use Community Cards',
          content: 'Combine your 2 hole cards with 5 community cards to make the best possible 5-card hand.',
          tip: 'You don\'t have to use both hole cards - sometimes the board plays better.'
        },
        {
          title: 'Master Bluffing',
          content: 'Learn when to bluff and when to fold. Reading opponents is crucial for success.',
          tip: 'Bluff selectively and consider your table image and opponent tendencies.'
        }
      ],
      scoring: [
        'Royal Flush: A-K-Q-J-10 of same suit',
        'Straight Flush: 5 consecutive cards of same suit',
        'Four of a Kind: 4 cards of same rank',
        'Full House: 3 of a kind + a pair',
        'Flush: 5 cards of same suit'
      ]
    },
    pool: {
      title: '🎱 How to Play Pool',
      description: 'Master 8-Ball and 9-Ball Pool games',
      icon: Target,
      color: 'from-neon-500 to-neon-600',
      steps: [
        {
          title: 'Understand the Setup',
          content: 'In 8-ball, balls 1-7 are solids, 9-15 are stripes. In 9-ball, use balls 1-9 in numerical order.',
          tip: 'The break shot determines which player gets which group in 8-ball.'
        },
        {
          title: 'Learn the Rules',
          content: '8-ball: Pot your group first, then the 8-ball. 9-ball: Pot balls in sequence, aiming for the 9-ball.',
          tip: 'Always hit the lowest numbered ball first in 9-ball.'
        },
        {
          title: 'Master Your Shots',
          content: 'Aim carefully, consider angles, and plan your next shot. Use English (spin) for better positioning.',
          tip: 'Think 2-3 shots ahead and position the cue ball for your next shot.'
        },
        {
          title: 'Win the Game',
          content: '8-ball: Pot the 8-ball legally after clearing your group. 9-ball: Pot the 9-ball directly or through combination.',
          tip: 'Avoid scratching (potting the cue ball) as it gives your opponent ball-in-hand.'
        }
      ],
      scoring: [
        '8-Ball: First to pot all balls in their group + 8-ball wins',
        '9-Ball: First to legally pot the 9-ball wins',
        'Fouls give opponent ball-in-hand',
        'Illegal shots result in opponent\'s turn',
        'Scratching (cue ball in pocket) is a foul'
      ]
    }
  };

  const currentGuide = gameGuides[activeGame as keyof typeof gameGuides];
  const Icon = currentGuide.icon;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            How to <span className="text-glow text-primary-500">Play</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Master the rules and strategies for Rummy, Poker, and Pool with our comprehensive guides
          </p>
        </div>

        {/* Game Selection */}
        <div className="flex flex-col lg:flex-row gap-2 mb-12 bg-dark-800 p-2 rounded-xl">
          {Object.entries(gameGuides).map(([key, guide]) => (
            <button
              key={key}
              onClick={() => setActiveGame(key)}
              className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                activeGame === key
                  ? `bg-gradient-to-r ${guide.color} text-white shadow-lg`
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              {guide.title}
            </button>
          ))}
        </div>

        {/* Game Guide Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Game Header */}
            <div className="card-gaming p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`bg-gradient-to-r ${currentGuide.color} w-16 h-16 rounded-full flex items-center justify-center`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{currentGuide.title}</h2>
                  <p className="text-gray-400">{currentGuide.description}</p>
                </div>
              </div>
            </div>

            {/* Step-by-Step Guide */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Play className="h-6 w-6 mr-2 text-primary-500" />
                Step-by-Step Guide
              </h3>
              
              {currentGuide.steps.map((step, index) => (
                <div key={index} className="card-gaming p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${currentGuide.color} w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-white">{step.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{step.content}</p>
                      <div className="bg-dark-700 p-3 rounded-lg border-l-4 border-gold-500">
                        <div className="flex items-start space-x-2">
                          <Lightbulb className="h-4 w-4 text-gold-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gold-400 text-sm font-medium">
                            <strong>Pro Tip:</strong> {step.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Scoring System */}
            <div className="card-gaming p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-gold-500" />
                Scoring & Winning
              </h3>
              <ul className="space-y-2">
                {currentGuide.scoring.map((rule, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-sm">
                    <ChevronRight className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Tips */}
            <div className="card-gaming p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Tips</h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 p-3 rounded-lg border border-primary-500/30">
                  <p className="text-primary-300 text-sm font-medium">
                    🎯 Practice makes perfect - start with free games to master the basics
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 p-3 rounded-lg border border-gold-500/30">
                  <p className="text-gold-300 text-sm font-medium">
                    💰 Manage your bankroll wisely - set limits before you start playing
                  </p>
                </div>
                <div className="bg-gradient-to-r from-neon-500/20 to-neon-600/20 p-3 rounded-lg border border-neon-500/30">
                  <p className="text-neon-300 text-sm font-medium">
                    🧠 Study your opponents - look for patterns and tells
                  </p>
                </div>
              </div>
            </div>

            {/* Practice Section */}
            <div className="card-gaming p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Practice?</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Start with our tutorial mode to get hands-on experience
              </p>
              <div className="space-y-3">
                <button className={`w-full btn-primary`}>
                  Start Tutorial
                </button>
                <button className="w-full border border-gray-600 text-gray-300 hover:text-white hover:border-primary-500 px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                  Practice Mode
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Tutorials Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Video <span className="text-gold-500">Tutorials</span>
            </h2>
            <p className="text-gray-400">Learn faster with our interactive video guides</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Rummy Basics', duration: '5:30', difficulty: 'Beginner' },
              { title: 'Poker Strategy', duration: '8:45', difficulty: 'Intermediate' },
              { title: 'Pool Techniques', duration: '6:20', difficulty: 'Beginner' }
            ].map((video, index) => (
              <div key={index} className="card-gaming p-6 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-dark-700 to-dark-600 aspect-video rounded-lg mb-4 flex items-center justify-center group-hover:from-primary-500/20 group-hover:to-primary-600/20 transition-all duration-300">
                  <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 group-hover:text-primary-400 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{video.title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{video.duration}</span>
                  <span className="bg-primary-500/20 text-primary-400 px-2 py-1 rounded">
                    {video.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="text-neon-500">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'Is it legal to play these games for real money?',
                answer: 'Yes, these are skill-based games which are legal in most Indian states. We comply with all applicable laws and regulations.'
              },
              {
                question: 'How do I withdraw my winnings?',
                answer: 'You can withdraw your winnings instantly through UPI, bank transfer, or other supported payment methods after completing KYC verification.'
              },
              {
                question: 'Are the games fair and random?',
                answer: 'Yes, we use certified Random Number Generators (RNG) and our games are regularly audited for fairness by third-party agencies.'
              },
              {
                question: 'Can I play these games for free?',
                answer: 'Yes, we offer practice modes for all games where you can play for free to improve your skills before playing for real money.'
              }
            ].map((faq, index) => (
              <div key={index} className="card-gaming p-6">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowToPlayPage;