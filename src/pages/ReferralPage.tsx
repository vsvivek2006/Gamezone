import React, { useState } from 'react';
import { Users, Gift, Share2, Copy, MessageCircle, Trophy, Star } from 'lucide-react';

const ReferralPage = () => {
  const [referralCode] = useState('RAHUL2024');
  const [copied, setCopied] = useState(false);

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWhatsApp = () => {
    const message = `🎮 Join me on GameZone - India's best real money gaming platform! 

🎁 Use my referral code: ${referralCode} and get ₹50 bonus instantly!

Play Rummy, Poker & Pool and win real cash daily!

Download now: https://play.google.com/store`;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Refer & <span className="text-glow text-gold-500">Earn</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Invite your friends and earn ₹100 for each successful referral. The more you refer, the more you earn!
          </p>
        </div>

        {/* Referral Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card-gaming p-6 text-center">
              <Users className="h-8 w-8 text-primary-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-gray-400 text-sm">Friends Referred</div>
            </div>
            <div className="card-gaming p-6 text-center">
              <Gift className="h-8 w-8 text-gold-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">₹1,200</div>
              <div className="text-gray-400 text-sm">Total Earned</div>
            </div>
            <div className="card-gaming p-6 text-center">
              <Trophy className="h-8 w-8 text-neon-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">8</div>
              <div className="text-gray-400 text-sm">Active Referrals</div>
            </div>
            <div className="card-gaming p-6 text-center">
              <Star className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">₹800</div>
              <div className="text-gray-400 text-sm">This Month</div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It <span className="text-primary-500">Works</span>
            </h2>
            <p className="text-xl text-gray-400">Simple steps to start earning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-gaming p-8 text-center">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Share Your Code</h3>
              <p className="text-gray-400">
                Share your unique referral code with friends via WhatsApp, social media, or direct message.
              </p>
            </div>

            <div className="card-gaming p-8 text-center">
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <span className="text-dark-900 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Friend Joins</h3>
              <p className="text-gray-400">
                Your friend downloads the app, registers using your code, and makes their first deposit of ₹100+.
              </p>
            </div>

            <div className="card-gaming p-8 text-center">
              <div className="bg-gradient-to-r from-neon-500 to-neon-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">You Both Earn</h3>
              <p className="text-gray-400">
                You get ₹100 bonus and your friend gets ₹50 bonus. Win-win for everyone!
              </p>
            </div>
          </div>
        </section>

        {/* Referral Code Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Your Referral Code */}
            <div className="card-gaming p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Your Referral Code</h3>
              
              <div className="bg-gradient-to-r from-primary-500/20 to-gold-500/20 border-2 border-primary-500/30 rounded-lg p-6 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Your Unique Code</div>
                  <div className="text-3xl font-bold text-white mb-4">{referralCode}</div>
                  <button
                    onClick={copyReferralCode}
                    className="flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 mx-auto"
                  >
                    <Copy className="h-4 w-4" />
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={shareWhatsApp}
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Share via WhatsApp</span>
                </button>

                <button className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300">
                  <Share2 className="h-5 w-5" />
                  <span>Share on Social Media</span>
                </button>
              </div>
            </div>

            {/* Referral Benefits */}
            <div className="card-gaming p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Referral Benefits</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-gold-500 to-gold-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="h-6 w-6 text-dark-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Instant Rewards</h4>
                    <p className="text-gray-400">
                      Get ₹100 instantly when your friend makes their first deposit. No waiting period!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Unlimited Referrals</h4>
                    <p className="text-gray-400">
                      No limit on how many friends you can refer. The sky's the limit for your earnings!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-neon-500 to-neon-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Bonus Tiers</h4>
                    <p className="text-gray-400">
                      Refer more friends to unlock higher bonus tiers and earn even more rewards!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Referral History */}
        <section className="mb-16">
          <div className="card-gaming p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Referral History</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-dark-600">
                    <th className="pb-3 text-gray-400">Friend's Name</th>
                    <th className="pb-3 text-gray-400">Join Date</th>
                    <th className="pb-3 text-gray-400">Status</th>
                    <th className="pb-3 text-gray-400">Your Earning</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Amit Kumar', date: '2024-01-15', status: 'Active', earning: '₹100' },
                    { name: 'Priya Sharma', date: '2024-01-14', status: 'Active', earning: '₹100' },
                    { name: 'Rohit Singh', date: '2024-01-12', status: 'Pending', earning: '₹0' },
                    { name: 'Neha Gupta', date: '2024-01-10', status: 'Active', earning: '₹100' },
                  ].map((referral, index) => (
                    <tr key={index} className="border-b border-dark-700">
                      <td className="py-4 text-white">{referral.name}</td>
                      <td className="py-4 text-gray-300">{referral.date}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          referral.status === 'Active' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {referral.status}
                        </span>
                      </td>
                      <td className="py-4 font-bold text-gold-500">{referral.earning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Leaderboard */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Top <span className="text-gold-500">Referrers</span>
            </h2>
            <p className="text-gray-400">See who's leading the referral game this month</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { rank: 1, name: 'Vikash Kumar', referrals: 45, earnings: '₹4,500', badge: '🥇' },
              { rank: 2, name: 'Anjali Patel', referrals: 38, earnings: '₹3,800', badge: '🥈' },
              { rank: 3, name: 'Rajesh Gupta', referrals: 32, earnings: '₹3,200', badge: '🥉' },
            ].map((leader, index) => (
              <div key={index} className="card-gaming p-6 text-center">
                <div className="text-4xl mb-3">{leader.badge}</div>
                <h3 className="text-lg font-bold text-white mb-2">{leader.name}</h3>
                <div className="space-y-1 text-sm">
                  <div className="text-gray-400">{leader.referrals} referrals</div>
                  <div className="text-gold-500 font-bold">{leader.earnings}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Terms & Conditions */}
        <section>
          <div className="card-gaming p-8">
            <h3 className="text-xl font-bold text-white mb-4">Referral Terms & Conditions</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>• Referral bonus is credited only when the referred friend makes their first deposit of ₹100 or more</p>
              <p>• Both referrer and referee must complete KYC verification to receive bonuses</p>
              <p>• Referral bonuses are subject to standard wagering requirements</p>
              <p>• GameZone reserves the right to modify referral terms at any time</p>
              <p>• Fraudulent referrals will result in account suspension</p>
              <p>• Referral bonuses cannot be withdrawn immediately and must be used for gaming</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReferralPage;