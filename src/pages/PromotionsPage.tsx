import React from 'react';
import { Gift, Star, Trophy, Calendar, Users, Zap } from 'lucide-react';

const PromotionsPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Amazing <span className="text-glow text-gold-500">Offers</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Boost your gaming experience with our exclusive promotions, bonuses, and rewards
          </p>
        </div>

        {/* Welcome Bonus */}
        <section className="mb-16">
          <div className="card-gaming p-8 bg-gradient-to-r from-primary-500/10 to-gold-500/10 border-2 border-gold-500/30">
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 w-20 h-20 mx-auto rounded-full flex items-center justify-center animate-pulse-glow">
                <Gift className="h-10 w-10 text-dark-900" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Welcome Bonus: <span className="text-gold-500">₹50 FREE</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get instant ₹50 bonus on your first signup! No deposit required - start playing immediately.
              </p>
              <button className="btn-secondary text-lg px-8 py-4">
                Claim Your ₹50 Bonus
              </button>
            </div>
          </div>
        </section>

        {/* Current Offers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Current <span className="text-primary-500">Promotions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First Deposit Bonus */}
            <div className="card-gaming p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">100% First Deposit Bonus</h3>
                <p className="text-gray-400">Double your first deposit up to ₹5,000</p>
                <div className="text-2xl font-bold text-primary-500">Up to ₹5,000</div>
                <button className="btn-primary w-full">Claim Now</button>
              </div>
            </div>

            {/* Daily Cashback */}
            <div className="card-gaming p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="bg-gradient-to-r from-neon-500 to-neon-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Daily Cashback</h3>
                <p className="text-gray-400">Get 10% cashback on daily losses</p>
                <div className="text-2xl font-bold text-neon-500">10% Back</div>
                <button className="btn-neon w-full">Auto Applied</button>
              </div>
            </div>

            {/* Refer & Earn */}
            <div className="card-gaming p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-dark-900" />
                </div>
                <h3 className="text-xl font-bold text-white">Refer & Earn</h3>
                <p className="text-gray-400">Earn ₹100 for each friend you refer</p>
                <div className="text-2xl font-bold text-gold-500">₹100 Each</div>
                <button className="btn-secondary w-full">Start Referring</button>
              </div>
            </div>
          </div>
        </section>

        {/* Festival Offers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Festival <span className="text-gold-500">Specials</span>
            </h2>
            <p className="text-gray-400">Celebrate with extra bonuses and rewards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-gaming p-8 bg-gradient-to-br from-gold-500/10 to-primary-500/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-dark-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Diwali Dhamaka</h3>
                  <p className="text-gray-400">Special festival bonuses</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 200% deposit bonus</li>
                <li>• Free tournament entries</li>
                <li>• Daily surprise gifts</li>
                <li>• Exclusive Diwali tournaments</li>
              </ul>
              <button className="btn-secondary w-full">Join Celebration</button>
            </div>

            <div className="card-gaming p-8 bg-gradient-to-br from-primary-500/10 to-neon-500/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Weekend Warriors</h3>
                  <p className="text-gray-400">Every Saturday & Sunday</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 50% extra on deposits</li>
                <li>• Double loyalty points</li>
                <li>• Weekend-only tournaments</li>
                <li>• Mega prize pools</li>
              </ul>
              <button className="btn-primary w-full">Play This Weekend</button>
            </div>
          </div>
        </section>

        {/* VIP Program */}
        <section className="mb-16">
          <div className="card-gaming p-12 bg-gradient-to-r from-dark-800 to-dark-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                VIP <span className="text-gold-500">Rewards Program</span>
              </h2>
              <p className="text-xl text-gray-400">Unlock exclusive benefits as you play more</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { level: 'Bronze', color: 'from-orange-500 to-orange-600', benefits: ['5% Cashback', 'Priority Support'] },
                { level: 'Silver', color: 'from-gray-400 to-gray-500', benefits: ['10% Cashback', 'Exclusive Tournaments'] },
                { level: 'Gold', color: 'from-gold-500 to-gold-600', benefits: ['15% Cashback', 'Personal Manager'] },
                { level: 'Diamond', color: 'from-primary-500 to-primary-600', benefits: ['20% Cashback', 'VIP Events'] }
              ].map((tier, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className={`bg-gradient-to-r ${tier.color} w-16 h-16 mx-auto rounded-full flex items-center justify-center`}>
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{tier.level}</h3>
                  <ul className="space-y-1 text-sm text-gray-400">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="text-center">
          <div className="card-gaming p-8">
            <h3 className="text-xl font-bold text-white mb-4">Terms & Conditions</h3>
            <div className="text-sm text-gray-400 space-y-2 max-w-4xl mx-auto">
              <p>• All bonuses are subject to wagering requirements</p>
              <p>• Promotions are valid for limited time periods</p>
              <p>• GameZone reserves the right to modify or cancel promotions</p>
              <p>• Players must be 18+ and comply with local laws</p>
              <p>• Responsible gaming limits apply to all offers</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PromotionsPage;