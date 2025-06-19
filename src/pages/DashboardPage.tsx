import React, { useState } from 'react';
import { User, Wallet, Trophy, History, Settings, Gift, TrendingUp, Download, LogOut } from 'lucide-react';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'games', label: 'My Games', icon: Trophy },
    { id: 'history', label: 'History', icon: History },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Welcome back, <span className="text-primary-500">Vivek!</span>
              </h1>
              <p className="text-gray-400">Ready to continue your winning streak?</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <button className="btn-primary">
                <Trophy className="h-4 w-4 mr-2" />
                Play Now
              </button>
              <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-primary-500 px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="card-gaming p-6 text-center">
            <Wallet className="h-8 w-8 text-primary-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">₹2,450</div>
            <div className="text-gray-400 text-sm">Wallet Balance</div>
          </div>
          <div className="card-gaming p-6 text-center">
            <Trophy className="h-8 w-8 text-gold-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">₹15,680</div>
            <div className="text-gray-400 text-sm">Total Winnings</div>
          </div>
          <div className="card-gaming p-6 text-center">
            <TrendingUp className="h-8 w-8 text-neon-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">127</div>
            <div className="text-gray-400 text-sm">Games Played</div>
          </div>
          <div className="card-gaming p-6 text-center">
            <Gift className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">₹350</div>
            <div className="text-gray-400 text-sm">Bonus Earned</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-dark-800 p-2 rounded-xl">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-dark-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="card-gaming p-6">
                <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { game: 'Rummy', result: 'Won', amount: '+₹450', time: '2 hours ago', color: 'text-green-500' },
                    { game: 'Poker', result: 'Lost', amount: '-₹200', time: '5 hours ago', color: 'text-red-500' },
                    { game: 'Pool', result: 'Won', amount: '+₹320', time: '1 day ago', color: 'text-green-500' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-dark-700 rounded-lg">
                      <div>
                        <div className="text-white font-medium">{activity.game}</div>
                        <div className="text-gray-400 text-sm">{activity.time}</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${activity.color}`}>{activity.amount}</div>
                        <div className="text-gray-400 text-sm">{activity.result}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="card-gaming p-6">
                <h3 className="text-xl font-bold text-white mb-4">Achievements</h3>
                <div className="space-y-4">
                  {[
                    { title: 'First Win', description: 'Won your first game', icon: '🏆', completed: true },
                    { title: 'High Roller', description: 'Win ₹10,000 in total', icon: '💰', completed: true },
                    { title: 'Streak Master', description: 'Win 5 games in a row', icon: '🔥', completed: false },
                  ].map((achievement, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${achievement.completed ? 'bg-gold-500/10 border border-gold-500/30' : 'bg-dark-700'}`}>
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className={`font-medium ${achievement.completed ? 'text-gold-400' : 'text-white'}`}>
                          {achievement.title}
                        </div>
                        <div className="text-gray-400 text-sm">{achievement.description}</div>
                      </div>
                      {achievement.completed && (
                        <div className="text-gold-500">✓</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wallet' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Wallet Balance */}
              <div className="card-gaming p-6">
                <h3 className="text-xl font-bold text-white mb-4">Wallet Balance</h3>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary-500 mb-2">₹2,450.00</div>
                  <div className="text-gray-400">Available Balance</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="btn-primary">
                    Add Money
                  </button>
                  <button className="btn-secondary">
                    Withdraw
                  </button>
                </div>
              </div>

              {/* Transaction History */}
              <div className="card-gaming p-6">
                <h3 className="text-xl font-bold text-white mb-4">Recent Transactions</h3>
                <div className="space-y-3">
                  {[
                    { type: 'Deposit', amount: '+₹1,000', date: 'Today', status: 'Completed' },
                    { type: 'Game Win', amount: '+₹450', date: 'Yesterday', status: 'Completed' },
                    { type: 'Withdrawal', amount: '-₹500', date: '2 days ago', status: 'Processing' },
                  ].map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-dark-700 rounded-lg">
                      <div>
                        <div className="text-white font-medium">{transaction.type}</div>
                        <div className="text-gray-400 text-sm">{transaction.date}</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {transaction.amount}
                        </div>
                        <div className="text-gray-400 text-sm">{transaction.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'games' && (
            <div className="card-gaming p-6">
              <h3 className="text-xl font-bold text-white mb-4">My Games</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Rummy', played: 45, won: 28, winRate: '62%', earnings: '₹8,450' },
                  { name: 'Poker', played: 32, won: 18, winRate: '56%', earnings: '₹5,230' },
                  { name: 'Pool', played: 50, won: 35, winRate: '70%', earnings: '₹2,000' },
                ].map((game, index) => (
                  <div key={index} className="bg-dark-700 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-4">{game.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Games Played:</span>
                        <span className="text-white">{game.played}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Games Won:</span>
                        <span className="text-green-500">{game.won}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Win Rate:</span>
                        <span className="text-primary-500">{game.winRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Earnings:</span>
                        <span className="text-gold-500">{game.earnings}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="card-gaming p-6">
              <h3 className="text-xl font-bold text-white mb-4">Game History</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-dark-600">
                      <th className="pb-3 text-gray-400">Date</th>
                      <th className="pb-3 text-gray-400">Game</th>
                      <th className="pb-3 text-gray-400">Result</th>
                      <th className="pb-3 text-gray-400">Amount</th>
                      <th className="pb-3 text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    {[
                      { date: '2024-01-15', game: 'Rummy', result: 'Won', amount: '+₹450', status: 'Completed' },
                      { date: '2024-01-15', game: 'Poker', result: 'Lost', amount: '-₹200', status: 'Completed' },
                      { date: '2024-01-14', game: 'Pool', result: 'Won', amount: '+₹320', status: 'Completed' },
                      { date: '2024-01-14', game: 'Rummy', result: 'Won', amount: '+₹180', status: 'Completed' },
                    ].map((game, index) => (
                      <tr key={index} className="border-b border-dark-700">
                        <td className="py-3 text-gray-300">{game.date}</td>
                        <td className="py-3 text-white">{game.game}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded text-xs ${game.result === 'Won' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                            {game.result}
                          </span>
                        </td>
                        <td className={`py-3 font-bold ${game.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {game.amount}
                        </td>
                        <td className="py-3 text-gray-400">{game.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Profile Settings */}
              <div className="card-gaming p-6">
                <h3 className="text-xl font-bold text-white mb-4">Profile Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      value="vivek Kumar"
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value="vivek@example.com"
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Mobile</label>
                    <input
                      type="tel"
                      value="+91 9341436937"
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white"
                    />
                  </div>
                  <button className="btn-primary w-full">Update Profile</button>
                </div>
              </div>

              {/* Account Settings */}
              <div className="card-gaming p-6">
                <h3 className="text-xl font-bold text-white mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-dark-700 rounded-lg">
                    <div>
                      <div className="text-white font-medium">KYC Verification</div>
                      <div className="text-green-400 text-sm">Verified ✓</div>
                    </div>
                    <button className="text-primary-400 hover:text-primary-300">View</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-dark-700 rounded-lg">
                    <div>
                      <div className="text-white font-medium">Two-Factor Authentication</div>
                      <div className="text-gray-400 text-sm">Not enabled</div>
                    </div>
                    <button className="text-primary-400 hover:text-primary-300">Enable</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-dark-700 rounded-lg">
                    <div>
                      <div className="text-white font-medium">Responsible Gaming</div>
                      <div className="text-gray-400 text-sm">Set limits</div>
                    </div>
                    <button className="text-primary-400 hover:text-primary-300">Manage</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;