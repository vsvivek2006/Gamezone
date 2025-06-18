import React, { useState } from 'react';
import { CreditCard, Smartphone, Building, Shield, Plus, Minus, CheckCircle } from 'lucide-react';

const PaymentPage = () => {
  const [activeTab, setActiveTab] = useState('deposit');
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [amount, setAmount] = useState('');

  const quickAmounts = [100, 500, 1000, 2000, 5000, 10000];

  const paymentMethods = {
    upi: {
      name: 'UPI',
      icon: Smartphone,
      description: 'Pay using any UPI app',
      color: 'from-green-500 to-green-600'
    },
    netbanking: {
      name: 'Net Banking',
      icon: Building,
      description: 'All major banks supported',
      color: 'from-blue-500 to-blue-600'
    },
    cards: {
      name: 'Cards',
      icon: CreditCard,
      description: 'Debit/Credit cards',
      color: 'from-purple-500 to-purple-600'
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Manage Your <span className="text-glow text-primary-500">Wallet</span>
          </h1>
          <p className="text-xl text-gray-400">
            Add money or withdraw your winnings securely
          </p>
        </div>

        {/* Current Balance */}
        <div className="card-gaming p-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Current Balance</h2>
          <div className="text-5xl font-bold text-primary-500 mb-2">₹2,450.00</div>
          <p className="text-gray-400">Available for withdrawal</p>
        </div>

        {/* Deposit/Withdraw Tabs */}
        <div className="flex bg-dark-800 rounded-lg p-2 mb-8">
          <button
            onClick={() => setActiveTab('deposit')}
            className={`flex-1 py-3 px-6 rounded-md font-semibold transition-all duration-300 ${
              activeTab === 'deposit'
                ? 'bg-primary-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Plus className="inline-block h-5 w-5 mr-2" />
            Add Money
          </button>
          <button
            onClick={() => setActiveTab('withdraw')}
            className={`flex-1 py-3 px-6 rounded-md font-semibold transition-all duration-300 ${
              activeTab === 'withdraw'
                ? 'bg-primary-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Minus className="inline-block h-5 w-5 mr-2" />
            Withdraw Money
          </button>
        </div>

        {activeTab === 'deposit' ? (
          /* Deposit Section */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Amount Selection */}
            <div className="card-gaming p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Select Amount</h3>
              
              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {quickAmounts.map((quickAmount) => (
                  <button
                    key={quickAmount}
                    onClick={() => setAmount(quickAmount.toString())}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      amount === quickAmount.toString()
                        ? 'bg-primary-500 text-white'
                        : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
                    }`}
                  >
                    ₹{quickAmount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Or enter custom amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                />
              </div>

              {/* Bonus Info */}
              {amount && parseInt(amount) >= 500 && (
                <div className="bg-gold-500/10 border border-gold-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-gold-500" />
                    <span className="text-gold-400 font-semibold">
                      Get {Math.floor(parseInt(amount) * 0.1)}% bonus on this deposit!
                    </span>
                  </div>
                </div>
              )}

              {/* Total Amount */}
              {amount && (
                <div className="bg-dark-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Amount to pay:</span>
                    <span className="text-2xl font-bold text-white">₹{amount}</span>
                  </div>
                  {parseInt(amount) >= 500 && (
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-400">Bonus:</span>
                      <span className="text-gold-500 font-semibold">+₹{Math.floor(parseInt(amount) * 0.1)}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Payment Methods */}
            <div className="card-gaming p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Payment Method</h3>
              
              <div className="space-y-4 mb-6">
                {Object.entries(paymentMethods).map(([key, method]) => {
                  const Icon = method.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedMethod(key)}
                      className={`w-full flex items-center space-x-4 p-4 rounded-lg border-2 transition-all duration-300 ${
                        selectedMethod === key
                          ? 'border-primary-500 bg-primary-500/10'
                          : 'border-dark-600 bg-dark-700 hover:border-primary-500/50'
                      }`}
                    >
                      <div className={`bg-gradient-to-r ${method.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-white font-semibold">{method.name}</div>
                        <div className="text-gray-400 text-sm">{method.description}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Proceed Button */}
              <button
                disabled={!amount || parseInt(amount) < 10}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proceed to Pay ₹{amount || '0'}
              </button>

              {/* Security Notice */}
              <div className="mt-6 bg-dark-700 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Secure Payment</h4>
                    <p className="text-xs text-gray-400 mt-1">
                      All transactions are secured with 256-bit SSL encryption and processed through certified payment gateways.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Withdraw Section */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Withdrawal Form */}
            <div className="card-gaming p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Withdraw Money</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Withdrawal Amount
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount to withdraw"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                  />
                  <p className="text-gray-400 text-sm mt-1">
                    Minimum withdrawal: ₹100 | Maximum: ₹2,450 (Available balance)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Bank Account
                  </label>
                  <select className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300">
                    <option>HDFC Bank - ****1234</option>
                    <option>Add New Bank Account</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    UPI ID (Alternative)
                  </label>
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!amount || parseInt(amount) < 100}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Request Withdrawal
                </button>
              </form>
            </div>

            {/* Withdrawal Info */}
            <div className="space-y-6">
              <div className="card-gaming p-6">
                <h4 className="text-lg font-bold text-white mb-4">Withdrawal Information</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Processing Time:</span>
                    <span className="text-white">Instant to 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Minimum Amount:</span>
                    <span className="text-white">₹100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Maximum Amount:</span>
                    <span className="text-white">₹50,000 per day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Processing Fee:</span>
                    <span className="text-green-500">FREE</span>
                  </div>
                </div>
              </div>

              <div className="card-gaming p-6">
                <h4 className="text-lg font-bold text-white mb-4">Recent Withdrawals</h4>
                <div className="space-y-3">
                  {[
                    { amount: '₹500', date: '2024-01-15', status: 'Completed', method: 'UPI' },
                    { amount: '₹1,000', date: '2024-01-12', status: 'Processing', method: 'Bank Transfer' },
                    { amount: '₹750', date: '2024-01-10', status: 'Completed', method: 'UPI' },
                  ].map((withdrawal, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-dark-700 rounded-lg">
                      <div>
                        <div className="text-white font-medium">{withdrawal.amount}</div>
                        <div className="text-gray-400 text-sm">{withdrawal.date} • {withdrawal.method}</div>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs ${
                        withdrawal.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {withdrawal.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Support Section */}
        <div className="mt-12 card-gaming p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Need Help with Payments?</h3>
          <p className="text-gray-400 mb-6">
            Our support team is available 24/7 to help you with any payment-related queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/9341436937?text=Hi%2C%20I%20need%20help%20with%20payments"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp Support
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;