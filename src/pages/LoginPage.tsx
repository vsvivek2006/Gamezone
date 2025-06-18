import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Smartphone, Shield, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('mobile'); // 'mobile' or 'email'

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-primary-500 to-gold-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
            <LogIn className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome Back to <span className="text-glow text-primary-500">GameZone</span>
          </h1>
          <p className="text-gray-400">Login to continue your winning streak!</p>
        </div>

        {/* Login Form */}
        <div className="card-gaming p-8">
          {/* Login Method Toggle */}
          <div className="flex bg-dark-700 rounded-lg p-1 mb-6">
            <button
              onClick={() => setLoginMethod('mobile')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 ${
                loginMethod === 'mobile'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Smartphone className="inline-block h-4 w-4 mr-2" />
              Mobile
            </button>
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 ${
                loginMethod === 'email'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Email
            </button>
          </div>

          <form className="space-y-6">
            {/* Mobile/Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {loginMethod === 'mobile' ? 'Mobile Number' : 'Email Address'}
              </label>
              <input
                type={loginMethod === 'mobile' ? 'tel' : 'email'}
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                placeholder={loginMethod === 'mobile' ? 'Enter your mobile number' : 'Enter your email'}
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300 pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary-500 bg-dark-700 border-dark-600 rounded focus:ring-primary-500 focus:ring-2"
                />
                <span className="ml-2 text-sm text-gray-300">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary-400 hover:text-primary-300 transition-colors duration-300">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center space-x-2"
            >
              <LogIn className="h-5 w-5" />
              <span>Login to GameZone</span>
            </button>

            {/* OTP Login Option */}
            {loginMethod === 'mobile' && (
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm">
                  <div className="flex-1 h-px bg-gray-600"></div>
                  <span>or</span>
                  <div className="flex-1 h-px bg-gray-600"></div>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Login with OTP
                </button>
              </div>
            )}
          </form>

          {/* Security Notice */}
          <div className="mt-6 bg-dark-700 p-4 rounded-lg border border-dark-600">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-white">Secure Login</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Your login is protected with 256-bit SSL encryption and two-factor authentication.
                </p>
              </div>
            </div>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-300"
              >
                Register now
              </Link>
            </p>
          </div>
        </div>

        {/* Download App CTA */}
        <div className="mt-8 card-gaming p-6 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Get the Mobile App</h3>
          <p className="text-gray-400 text-sm mb-4">
            Download our app for the best gaming experience and exclusive mobile bonuses!
          </p>
          <Link
            to="/download"
            className="btn-secondary w-full"
          >
            Download App
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-6 text-center space-y-2">
          <div className="flex justify-center space-x-6 text-sm">
            <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
              Privacy Policy
            </Link>
          </div>
          <div className="flex justify-center space-x-6 text-sm">
            <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
              Need Help?
            </Link>
            <Link to="/faq" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;