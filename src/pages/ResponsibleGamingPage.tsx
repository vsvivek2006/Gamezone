import React from 'react';
import { Shield, Heart, Clock, AlertTriangle, Phone, HelpCircle } from 'lucide-react';

const ResponsibleGamingPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Responsible <span className="text-glow text-green-500">Gaming</span>
          </h1>
          <p className="text-xl text-gray-400">
            Gaming should be fun and entertaining. We're committed to promoting safe and responsible gaming practices.
          </p>
        </div>

        {/* Our Commitment */}
        <div className="card-gaming p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Our Commitment to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Safe Environment</h3>
              <p className="text-gray-400 text-sm">We provide tools and resources to help you game responsibly</p>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 text-primary-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Player Wellbeing</h3>
              <p className="text-gray-400 text-sm">Your mental health and financial safety are our priorities</p>
            </div>
            <div className="text-center">
              <HelpCircle className="h-8 w-8 text-gold-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-400 text-sm">Professional help and guidance whenever you need it</p>
            </div>
          </div>
        </div>

        {/* Gaming Guidelines */}
        <section className="mb-12">
          <div className="card-gaming p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Healthy Gaming Guidelines</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Set Time Limits</h3>
                  <p className="text-gray-400">
                    Decide how much time you want to spend gaming before you start. Take regular breaks 
                    and don't let gaming interfere with your daily responsibilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Set Budget Limits</h3>
                  <p className="text-gray-400">
                    Only play with money you can afford to lose. Set daily, weekly, and monthly 
                    deposit limits to control your spending.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibled text-white mb-2">Play for Entertainment</h3>
                  <p className="text-gray-400">
                    Gaming should be fun and entertaining, not a way to make money or solve financial problems. 
                    Treat any winnings as a bonus, not an expectation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Stay Balanced</h3>
                  <p className="text-gray-400">
                    Maintain a healthy balance between gaming and other activities. Don't neglect 
                    family, friends, work, or other important aspects of your life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Self-Assessment */}
        <section className="mb-12">
          <div className="card-gaming p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Self-Assessment Questions</h2>
            <p className="text-gray-400 mb-6">
              Ask yourself these questions regularly to ensure you're gaming responsibly:
            </p>
            <div className="space-y-4">
              {[
                "Do I spend more time or money gaming than I intended?",
                "Do I feel anxious or upset when I can't play?",
                "Have I lied to family or friends about my gaming activities?",
                "Do I play to escape from problems or negative feelings?",
                "Have I tried to cut back on gaming but been unsuccessful?",
                "Has gaming negatively affected my relationships or work?",
                "Do I chase losses by playing more to try to win back money?",
                "Do I feel the need to play with increasing amounts of money?"
              ].map((question, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-dark-700 rounded-lg">
                  <HelpCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{question}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-yellow-400 font-semibold">Important Note</h4>
                  <p className="text-yellow-300 text-sm mt-1">
                    If you answered "yes" to several of these questions, it may be time to seek help 
                    or consider taking a break from gaming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Control Tools */}
        <section className="mb-12">
          <div className="card-gaming p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Self-Control Tools</h2>
            <p className="text-gray-400 mb-6">
              We provide various tools to help you maintain control over your gaming:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-700 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-primary-500" />
                  <h3 className="text-lg font-semibold text-white">Time Limits</h3>
                </div>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Set daily gaming time limits</li>
                  <li>• Automatic session reminders</li>
                  <li>• Forced breaks after extended play</li>
                  <li>• Weekly and monthly time tracking</li>
                </ul>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-green-500" />
                  <h3 className="text-lg font-semibold text-white">Deposit Limits</h3>
                </div>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Daily deposit limits</li>
                  <li>• Weekly and monthly caps</li>
                  <li>• Cooling-off periods</li>
                  <li>• Limit increase restrictions</li>
                </ul>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  <h3 className="text-lg font-semibold text-white">Self-Exclusion</h3>
                </div>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Temporary account suspension</li>
                  <li>• Permanent self-exclusion</li>
                  <li>• Immediate account blocking</li>
                  <li>• Professional support referrals</li>
                </ul>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-6 w-6 text-red-500" />
                  <h3 className="text-lg font-semibold text-white">Reality Checks</h3>
                </div>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Regular spending summaries</li>
                  <li>• Time played notifications</li>
                  <li>• Win/loss tracking</li>
                  <li>• Behavioral pattern alerts</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="btn-primary">
                Manage Your Gaming Controls
              </button>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-12">
          <div className="card-gaming p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Warning Signs of Problem Gaming</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Behavioral Signs</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Spending more time gaming than planned</li>
                  <li>• Neglecting responsibilities or relationships</li>
                  <li>• Lying about gaming activities</li>
                  <li>• Feeling restless when not gaming</li>
                  <li>• Using gaming to escape problems</li>
                  <li>• Unsuccessful attempts to cut back</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Financial Signs</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Spending more money than affordable</li>
                  <li>• Chasing losses with bigger bets</li>
                  <li>• Borrowing money to play</li>
                  <li>• Hiding financial losses</li>
                  <li>• Neglecting bills or expenses</li>
                  <li>• Feeling desperate about money</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Help */}
        <section className="mb-12">
          <div className="card-gaming p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Getting Help & Support</h2>
            <p className="text-gray-400 mb-6">
              If you're concerned about your gaming habits, help is available. Don't hesitate to reach out:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-4">Professional Helplines</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="text-white font-medium">National Gambling Helpline</div>
                      <div className="text-gray-400 text-sm">1800-XXX-XXXX (24/7)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="text-white font-medium">Mental Health Helpline</div>
                      <div className="text-gray-400 text-sm">1800-XXX-YYYY (24/7)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-500/10 to-gold-500/10 border border-primary-500/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-4">GameZone Support</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-500" />
                    <div>
                      <div className="text-white font-medium">Customer Support</div>
                      <div className="text-gray-400 text-sm">📞 9341436937</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-primary-500" />
                    <div>
                      <div className="text-white font-medium">Responsible Gaming Team</div>
                      <div className="text-gray-400 text-sm">help@gamezone.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <div className="card-gaming p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Online Counseling</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Professional counseling services available online
                </p>
                <button className="text-primary-400 hover:text-primary-300 font-medium">
                  Learn More →
                </button>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Support Groups</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Connect with others facing similar challenges
                </p>
                <button className="text-primary-400 hover:text-primary-300 font-medium">
                  Find Groups →
                </button>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Educational Materials</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Learn about responsible gaming practices
                </p>
                <button className="text-primary-400 hover:text-primary-300 font-medium">
                  Download →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Take Action */}
        <div className="card-gaming p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Take Control Today</h2>
          <p className="text-gray-400 mb-8">
            If you're concerned about your gaming habits, don't wait. Take action now to protect yourself and your loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Set Gaming Limits
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
              Self-Exclude Now
            </button>
            <a href="/contact" className="btn-secondary">
              Get Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsibleGamingPage;