import React from 'react';
import { FileText, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-primary-500 to-gold-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
            <FileText className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms & <span className="text-glow text-primary-500">Conditions</span>
          </h1>
          <p className="text-xl text-gray-400">
            Please read these terms carefully before using our platform
          </p>
          <div className="text-sm text-gray-500 mt-4">
            Last updated: January 15, 2024
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="card-gaming p-6 mb-8">
          <h3 className="text-lg font-bold text-white mb-4">Quick Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <a href="#acceptance" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
              1. Acceptance
            </a>
            <a href="#eligibility" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
              2. Eligibility
            </a>
            <a href="#account" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
              3. Account Rules
            </a>
            <a href="#gaming" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
              4. Gaming Rules
            </a>
            <a href="#payments" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
              5. Payments
            </a>
            <a href="#prohibited" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
              6. Prohibited Acts
            </a>
            <a href="#liability" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
              7. Liability
            </a>
            <a href="#termination" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">
              8. Termination
            </a>
          </div>
        </div>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section id="acceptance" className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                By accessing and using GameZone's platform, mobile application, and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions ("Terms").
              </p>
              <p>
                These Terms constitute a legally binding agreement between you ("User," "Player," or "You") and GameZone ("Company," "We," "Us," or "Our"). If you do not agree to these Terms, you must not use our services.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our platform. Your continued use of our services after such changes constitutes acceptance of the new Terms.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="eligibility" className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-primary-500" />
              <h2 className="text-2xl font-bold text-white">2. Eligibility Requirements</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>To use our services, you must:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Be at least 18 years of age</li>
                <li>Be a legal resident of India</li>
                <li>Reside in a state where skill-based gaming is legal</li>
                <li>Have the legal capacity to enter into binding agreements</li>
                <li>Provide accurate and complete registration information</li>
                <li>Complete KYC (Know Your Customer) verification when required</li>
              </ul>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-yellow-400 font-semibold">Important Notice</h4>
                    <p className="text-yellow-300 text-sm mt-1">
                      Our services are not available in states where real-money gaming is prohibited by law. 
                      It is your responsibility to ensure compliance with local laws.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="account" className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-neon-500" />
              <h2 className="text-2xl font-bold text-white">3. Account Registration & Security</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <h3 className="text-lg font-semibold text-white">Account Creation</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You may create only one account per person</li>
                <li>All information provided must be accurate and current</li>
                <li>You must verify your mobile number and email address</li>
                <li>KYC verification is mandatory for withdrawals</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">Account Security</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are responsible for maintaining account confidentiality</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Use strong passwords and enable two-factor authentication</li>
                <li>Do not share your account credentials with others</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section id="gaming" className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="h-6 w-6 text-gold-500" />
              <h2 className="text-2xl font-bold text-white">4. Gaming Rules & Fair Play</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <h3 className="text-lg font-semibold text-white">Game Integrity</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All games use certified Random Number Generators (RNG)</li>
                <li>Game outcomes are determined by skill and chance</li>
                <li>We employ anti-fraud measures to ensure fair play</li>
                <li>Collusion, cheating, or exploitation is strictly prohibited</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">Player Conduct</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Play responsibly and within your means</li>
                <li>Respect other players and maintain proper conduct</li>
                <li>Do not use automated software or bots</li>
                <li>Report suspicious activities to our support team</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="payments" className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold text-white">5. Payments & Transactions</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <h3 className="text-lg font-semibold text-white">Deposits</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Minimum deposit amount is ₹10</li>
                <li>All deposits are processed through secure payment gateways</li>
                <li>Deposits are typically credited instantly</li>
                <li>We reserve the right to verify the source of funds</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">Withdrawals</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Minimum withdrawal amount is ₹100</li>
                <li>KYC verification is mandatory for withdrawals</li>
                <li>Processing time: Instant to 24 hours</li>
                <li>We may request additional verification for large withdrawals</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section id="prohibited" className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-bold text-white">6. Prohibited Activities</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>The following activities are strictly prohibited:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Creating multiple accounts</li>
                <li>Using automated software, bots, or scripts</li>
                <li>Colluding with other players</li>
                <li>Exploiting software bugs or glitches</li>
                <li>Money laundering or fraudulent transactions</li>
                <li>Sharing account credentials</li>
                <li>Underage gambling</li>
                <li>Playing from restricted jurisdictions</li>
                <li>Abusive or inappropriate behavior</li>
                <li>Attempting to manipulate game outcomes</li>
              </ul>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-red-400 font-semibold">Violation Consequences</h4>
                    <p className="text-red-300 text-sm mt-1">
                      Violation of these terms may result in account suspension, forfeiture of funds, 
                      and permanent ban from our platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="liability" className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-primary-500" />
              <h2 className="text-2xl font-bold text-white">7. Limitation of Liability</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                GameZone provides its services "as is" and makes no warranties, express or implied, 
                regarding the platform's availability, accuracy, or reliability.
              </p>
              <p>
                We shall not be liable for any direct, indirect, incidental, special, or consequential 
                damages arising from your use of our services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Loss of funds due to technical issues</li>
                <li>Service interruptions or downtime</li>
                <li>Third-party payment gateway failures</li>
                <li>Internet connectivity issues</li>
                <li>Force majeure events</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section id="termination" className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">8. Account Termination</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <h3 className="text-lg font-semibold text-white">Voluntary Termination</h3>
              <p>
                You may close your account at any time by contacting our customer support. 
                Upon closure, you may withdraw any remaining balance subject to our verification procedures.
              </p>
              
              <h3 className="text-lg font-semibold text-white mt-6">Involuntary Termination</h3>
              <p>We reserve the right to suspend or terminate your account if:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You violate these Terms and Conditions</li>
                <li>You engage in fraudulent or illegal activities</li>
                <li>You fail to complete required verification procedures</li>
                <li>Your account remains inactive for an extended period</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="card-gaming p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-dark-700 p-4 rounded-lg">
                <div className="space-y-2">
                  <div><strong>Email:</strong> legal@gamezone.com</div>
                  <div><strong>Phone:</strong> 📞 9341436937</div>
                  <div><strong>Address:</strong> Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan, India – 302017</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Acceptance Notice */}
        <div className="mt-12 card-gaming p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Agreement Acknowledgment</h3>
          <p className="text-gray-400 mb-6">
            By using GameZone's services, you acknowledge that you have read, understood, 
            and agree to be bound by these Terms and Conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="btn-primary">
              I Accept - Create Account
            </a>
            <a href="/contact" className="btn-secondary">
              Have Questions? Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;