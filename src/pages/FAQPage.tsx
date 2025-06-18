import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, Phone } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = {
    general: 'General Questions',
    account: 'Account & Registration',
    payments: 'Payments & Withdrawals',
    games: 'Games & Rules',
    technical: 'Technical Support',
    security: 'Security & Privacy'
  };

  const faqs = {
    general: [
      {
        question: "What is GameZone?",
        answer: "GameZone is India's premier real-money gaming platform where you can play skill-based games like Rummy, Poker, and Pool to win real cash prizes. We provide a secure, fair, and entertaining gaming environment for players across India."
      },
      {
        question: "Is it legal to play real-money games on GameZone?",
        answer: "Yes, GameZone offers skill-based games which are legal in most Indian states. We comply with all applicable laws and regulations. However, it's your responsibility to ensure that real-money gaming is legal in your state of residence."
      },
      {
        question: "How do I get started?",
        answer: "Getting started is easy! Download our app from the Play Store, register with your mobile number, complete the verification process, add money to your wallet, and start playing your favorite games."
      },
      {
        question: "What is the minimum age to play?",
        answer: "You must be at least 18 years old to create an account and play real-money games on GameZone. We strictly verify age during the registration process."
      }
    ],
    account: [
      {
        question: "How do I create an account?",
        answer: "Download our app, click 'Register', enter your mobile number, verify with OTP, fill in your personal details, and complete the registration. You'll receive a ₹50 welcome bonus upon successful registration."
      },
      {
        question: "Can I have multiple accounts?",
        answer: "No, each person is allowed only one account on GameZone. Creating multiple accounts is against our terms and conditions and may result in account suspension."
      },
      {
        question: "What is KYC and why is it required?",
        answer: "KYC (Know Your Customer) is a verification process where you provide identity documents. It's required by law for financial transactions and helps us ensure account security and prevent fraud."
      },
      {
        question: "How do I reset my password?",
        answer: "On the login screen, click 'Forgot Password', enter your registered mobile number or email, and follow the instructions sent to reset your password."
      }
    ],
    payments: [
      {
        question: "What payment methods are accepted?",
        answer: "We accept UPI, Net Banking, Debit/Credit Cards, and various digital wallets. All transactions are processed through secure, certified payment gateways."
      },
      {
        question: "What is the minimum deposit amount?",
        answer: "The minimum deposit amount is ₹10. However, to be eligible for most bonuses and promotions, a minimum deposit of ₹100 is usually required."
      },
      {
        question: "How long do withdrawals take?",
        answer: "Withdrawals are typically processed instantly to 24 hours. UPI withdrawals are usually instant, while bank transfers may take up to 24 hours depending on your bank."
      },
      {
        question: "Are there any fees for deposits or withdrawals?",
        answer: "We don't charge any fees for deposits or withdrawals. However, your bank or payment provider may charge their own fees."
      },
      {
        question: "Why is my withdrawal pending?",
        answer: "Withdrawals may be pending due to incomplete KYC verification, security checks, or bank processing times. Contact our support team if your withdrawal is pending for more than 24 hours."
      }
    ],
    games: [
      {
        question: "What games are available on GameZone?",
        answer: "We offer three main games: Rummy (13-card Indian Rummy), Poker (Texas Hold'em), and Pool (8-Ball and 9-Ball). Each game has multiple variants and tournament options."
      },
      {
        question: "How do I learn the game rules?",
        answer: "Visit our 'How to Play' section for detailed rules, tutorials, and strategies for each game. We also offer practice modes where you can play for free to learn."
      },
      {
        question: "Are the games fair and random?",
        answer: "Yes, all our games use certified Random Number Generators (RNG) and are regularly audited for fairness. We employ strict anti-fraud measures to ensure a level playing field for all players."
      },
      {
        question: "Can I play practice games for free?",
        answer: "Yes, we offer practice modes for all games where you can play with virtual chips to learn and improve your skills without risking real money."
      }
    ],
    technical: [
      {
        question: "What devices are supported?",
        answer: "Our app is available for Android devices running Android 5.0 or higher. We also have a web version that works on most modern browsers."
      },
      {
        question: "Why is the app running slowly?",
        answer: "Slow performance can be due to poor internet connection, low device storage, or outdated app version. Try closing other apps, clearing cache, or updating to the latest version."
      },
      {
        question: "I'm having trouble logging in. What should I do?",
        answer: "Ensure you're using the correct credentials, check your internet connection, and try clearing the app cache. If the problem persists, contact our support team."
      },
      {
        question: "How do I update the app?",
        answer: "Go to the Play Store, search for GameZone, and click 'Update' if available. You can also enable auto-updates in your Play Store settings."
      }
    ],
    security: [
      {
        question: "How secure is my personal information?",
        answer: "We use 256-bit SSL encryption to protect all data transmission and storage. Your personal and financial information is stored on secure servers and never shared with third parties."
      },
      {
        question: "How do you prevent fraud?",
        answer: "We employ advanced fraud detection systems, monitor gameplay patterns, verify all transactions, and require KYC verification for withdrawals. Suspicious activities are immediately investigated."
      },
      {
        question: "What should I do if I suspect unauthorized access?",
        answer: "Immediately change your password, enable two-factor authentication, and contact our support team. We'll investigate and secure your account."
      },
      {
        question: "Do you share my data with third parties?",
        answer: "We never sell your personal data. We only share information with authorized service providers (like payment processors) and when required by law. See our Privacy Policy for details."
      }
    ]
  };

  const filteredFAQs = faqs[activeCategory as keyof typeof faqs].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-primary-500 to-gold-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
            <HelpCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-glow text-primary-500">Questions</span>
          </h1>
          <p className="text-xl text-gray-400">
            Find answers to common questions about GameZone
          </p>
        </div>

        {/* Search Bar */}
        <div className="card-gaming p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-dark-800 p-2 rounded-xl">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div key={index} className="card-gaming overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-dark-700 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-primary-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-dark-600 pt-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="card-gaming p-8 text-center">
              <HelpCircle className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
              <p className="text-gray-400">
                Try adjusting your search terms or browse different categories
              </p>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="card-gaming p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Need <span className="text-gold-500">Help?</span>
            </h2>
            <p className="text-gray-400">
              Can't find what you're looking for? Our support team is here to help 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">WhatsApp Support</h3>
              <p className="text-gray-400 text-sm mb-4">Get instant help via WhatsApp</p>
              <a
                href="https://wa.me/9341436937?text=Hi%2C%20I%20need%20help%20with%20GameZone"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Chat Now
              </a>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-gray-400 text-sm mb-4">Call us for immediate assistance</p>
              <a
                href="tel:9341436937"
                className="btn-secondary"
              >
                📞 9341436937
              </a>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <HelpCircle className="h-8 w-8 text-dark-900" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-gray-400 text-sm mb-4">Send us a detailed message</p>
              <a
                href="/contact"
                className="btn-neon"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-12 card-gaming p-8">
          <h3 className="text-xl font-bold text-white mb-6">Popular Help Topics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/how-to-play" className="text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm">
              How to Play Games
            </a>
            <a href="/payment" className="text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm">
              Add Money
            </a>
            <a href="/payment" className="text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm">
              Withdraw Money
            </a>
            <a href="/register" className="text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm">
              Create Account
            </a>
            <a href="/terms" className="text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm">
              Terms & Conditions
            </a>
            <a href="/privacy" className="text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="/responsible-gaming" className="text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm">
              Responsible Gaming
            </a>
            <a href="/download" className="text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm">
              Download App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;