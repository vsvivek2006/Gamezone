import React from 'react';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-primary-500 to-gold-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy <span className="text-glow text-primary-500">Policy</span>
          </h1>
          <p className="text-xl text-gray-400">
            Your privacy is important to us. Learn how we protect your data.
          </p>
          <div className="text-sm text-gray-500 mt-4">
            Last updated: January 15, 2024
          </div>
        </div>

        {/* Privacy Overview */}
        <div className="card-gaming p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Privacy at a Glance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Lock className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-white font-semibold">Secure Encryption</div>
              <div className="text-gray-400 text-sm">256-bit SSL protection</div>
            </div>
            <div className="text-center">
              <Eye className="h-8 w-8 text-primary-500 mx-auto mb-2" />
              <div className="text-white font-semibold">No Data Selling</div>
              <div className="text-gray-400 text-sm">We never sell your data</div>
            </div>
            <div className="text-center">
              <UserCheck className="h-8 w-8 text-gold-500 mx-auto mb-2" />
              <div className="text-white font-semibold">Your Control</div>
              <div className="text-gray-400 text-sm">Manage your privacy</div>
            </div>
          </div>
        </div>

        {/* Privacy Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Database className="h-6 w-6 text-primary-500" />
              <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <h3 className="text-lg font-semibold text-white">Personal Information</h3>
              <p>When you register and use our services, we collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, email address, and mobile number</li>
                <li>Date of birth and government-issued ID for age verification</li>
                <li>Bank account details and payment information</li>
                <li>Address and location data for compliance purposes</li>
                <li>Profile photos and other optional information</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Device information (model, operating system, unique identifiers)</li>
                <li>IP address and location data</li>
                <li>Game play data and statistics</li>
                <li>App usage patterns and preferences</li>
                <li>Technical logs and error reports</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="h-6 w-6 text-neon-500" />
              <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our gaming services</li>
                <li>Process payments and withdrawals securely</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our games and user experience</li>
                <li>Send important updates and promotional offers</li>
                <li>Provide customer support and resolve issues</li>
                <li>Analyze usage patterns to enhance our platform</li>
              </ul>
              
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-green-400 font-semibold">Legal Basis</h4>
                    <p className="text-green-300 text-sm mt-1">
                      We process your data based on legitimate business interests, legal compliance, 
                      and your consent where required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="h-6 w-6 text-gold-500" />
              <h2 className="text-2xl font-bold text-white">3. Data Security & Protection</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <h3 className="text-lg font-semibold text-white">Security Measures</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>256-bit SSL encryption for all data transmission</li>
                <li>Secure servers with regular security audits</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular security updates and patches</li>
                <li>Restricted access to personal data on need-to-know basis</li>
                <li>Secure payment processing through certified gateways</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">Data Storage</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Data stored on secure servers in India</li>
                <li>Regular backups with encryption</li>
                <li>Compliance with Indian data protection laws</li>
                <li>Automatic data purging for inactive accounts</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <UserCheck className="h-6 w-6 text-primary-500" />
              <h2 className="text-2xl font-bold text-white">4. Information Sharing</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>We may share your information with:</p>
              
              <h3 className="text-lg font-semibold text-white">Service Providers</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment processors for transaction handling</li>
                <li>KYC verification services for identity confirmation</li>
                <li>Cloud storage providers for data hosting</li>
                <li>Analytics services for platform improvement</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">Legal Requirements</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Government authorities when required by law</li>
                <li>Law enforcement for fraud prevention</li>
                <li>Regulatory bodies for compliance purposes</li>
                <li>Courts in response to legal proceedings</li>
              </ul>
              
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-red-400 font-semibold">We Never Sell Your Data</h4>
                    <p className="text-red-300 text-sm mt-1">
                      We do not sell, rent, or trade your personal information to third parties 
                      for marketing purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-neon-500" />
              <h2 className="text-2xl font-bold text-white">5. Your Privacy Rights</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
                <li><strong>Withdraw Consent:</strong> Revoke previously given consent</li>
              </ul>
              
              <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 mt-6">
                <h4 className="text-primary-400 font-semibold mb-2">How to Exercise Your Rights</h4>
                <p className="text-primary-300 text-sm">
                  Contact our privacy team at privacy@gamezone.com or through your account settings. 
                  We will respond to your request within 30 days.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Database className="h-6 w-6 text-gold-500" />
              <h2 className="text-2xl font-bold text-white">6. Cookies & Tracking</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <h3 className="text-lg font-semibold text-white">Types of Cookies We Use</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                <li><strong>Performance Cookies:</strong> Help us analyze and improve our services</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Understand how you use our platform</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">Managing Cookies</h3>
              <p>
                You can control cookies through your browser settings. However, disabling certain 
                cookies may affect the functionality of our platform.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">7. Data Retention</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>We retain your personal information for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide our services to you</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce our agreements</li>
                <li>Prevent fraud and maintain security</li>
              </ul>
              
              <p className="mt-4">
                <strong>Account Data:</strong> Retained for 7 years after account closure for compliance purposes<br />
                <strong>Transaction Data:</strong> Retained for 10 years as required by financial regulations<br />
                <strong>Marketing Data:</strong> Deleted immediately upon unsubscribe request
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="card-gaming p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold text-white">8. Children's Privacy</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Our services are not intended for individuals under 18 years of age. We do not 
                knowingly collect personal information from children under 18.
              </p>
              <p>
                If we become aware that we have collected personal information from a child under 18, 
                we will take steps to delete such information immediately.
              </p>
              <p>
                Parents or guardians who believe their child has provided personal information to us 
                should contact us immediately at privacy@gamezone.com.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="card-gaming p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Our Privacy Team</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-dark-700 p-4 rounded-lg">
                <div className="space-y-2">
                  <div><strong>Privacy Officer:</strong> privacy@gamezone.com</div>
                  <div><strong>Phone:</strong> 📞 9341436937</div>
                  <div><strong>Address:</strong> Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan, India – 302017</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Policy Updates Notice */}
        <div className="mt-12 card-gaming p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Policy Updates</h3>
          <p className="text-gray-400 mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any 
            material changes by email or through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Privacy Team
            </a>
            <a href="/terms" className="btn-secondary">
              View Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;