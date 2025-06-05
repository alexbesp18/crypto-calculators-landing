import React from 'react';
import { Calculator, TrendingUp, DollarSign, Zap, ArrowRight, Shield, Clock, BarChart3 } from 'lucide-react';

function App() {
  const calculators = [
    {
      title: "Bitcoin Mining Profitability Calculator",
      description: "Advanced mining profitability analysis with real-time data and comprehensive cost modeling",
      url: "https://miner-profit-version-3-claude.vercel.app",
      icon: <Zap className="w-6 h-6" />,
      features: ["Real-time electricity costs", "Hardware efficiency", "Pool fees", "Market analysis"]
    },
    {
      title: "Portfolio Analyzer", 
      description: "Comprehensive crypto portfolio tracking with advanced charts and performance metrics",
      url: "https://portfolio-analyzer-three.vercel.app",
      icon: <TrendingUp className="w-6 h-6" />,
      features: ["Portfolio tracking", "Performance charts", "Risk assessment", "Asset allocation"]
    },
    {
      title: "Miner Acquisition Calculator",
      description: "Calculate the optimal timing and costs for acquiring Bitcoin mining hardware", 
      url: "https://miner-acquisition-calculator.vercel.app",
      icon: <Calculator className="w-6 h-6" />,
      features: ["Hardware pricing", "ROI analysis", "Market timing", "Cost optimization"]
    },
    {
      title: "BTC Loan Calculator",
      description: "Advanced Bitcoin-backed loan calculations with collateral and interest analysis",
      url: "https://btc-loan-calculator.vercel.app",
      icon: <DollarSign className="w-6 h-6" />,
      features: ["Collateral ratios", "Interest calculations", "Liquidation analysis", "Risk management"]
    },
    {
      title: "Miner Price Tracker",
      description: "Real-time mining hardware price tracking and market analysis tools",
      url: "https://miner-price-tracker.vercel.app",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Price monitoring", "Market trends", "Hardware comparisons", "Alert system"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calculator className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Alex BTC Calcs</h1>
            </div>
            <div className="text-sm text-gray-600">
              Professional Crypto Calculators
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Professional Crypto Calculators
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Make informed decisions with our suite of advanced cryptocurrency calculation tools. 
            Built for traders, miners, and investors who demand accuracy.
          </p>
          
          {/* Trust Indicators */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5 text-green-500" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>Real-time Data</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Calculator className="w-5 h-5 text-purple-500" />
              <span>Professional Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculators.map((calc, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {calc.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {calc.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {calc.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {calc.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={calc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Open Calculator
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Premium Access
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get unlimited access to all professional calculators
            </p>
          </div>
          
          <div className="mt-12 max-w-lg mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">Lifetime Access</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$19</span>
                  <span className="text-gray-600"> one-time</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Unlimited access to all current and future calculators
                </p>
                
                <div className="mt-6">
                  <div className="flex items-center justify-center space-x-2 text-green-600 mb-2">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium">Instant Access</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-green-600 mb-2">
                    <Calculator className="w-5 h-5" />
                    <span className="font-medium">All Calculators</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-medium">Future Updates</span>
                  </div>
                </div>
                
                <a 
                  href="https://paypal.me/AlexanderBespalov440/19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg inline-block text-center"
                  style={{textDecoration: 'none'}}
                >
                  Get Access Now
                </a>
                
                <p className="mt-4 text-sm text-gray-500">
                  Secure payment • Instant delivery • No subscription
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Calculator className="w-6 h-6" />
              <span className="text-xl font-bold">Alex BTC Calcs</span>
            </div>
            <p className="text-gray-400">
              Professional cryptocurrency calculation tools for informed decision making
            </p>
            <div className="mt-8 text-sm text-gray-500">
              © 2025 Alex BTC Calcs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;