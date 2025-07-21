import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 1,
      title: 'Blue & White Collar Staffing',
      description: 'Comprehensive staffing solutions for both skilled and unskilled workforce across various industries.',
      price: 'Custom Pricing',
      rating: 4.9,
      clients: '1k clients',
      features: ['Factory Workers', 'Office Staff', 'Technical Professionals'],
      icon: '👥',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Contract & Permanent Recruitment',
      description: 'Flexible hiring solutions tailored to your business needs with both temporary and permanent placements.',
      price: 'Custom Pricing',
      rating: 4.8,
      clients: '50+ clients',
      features: ['Contract Staffing', 'Permanent Hiring', 'Project-based Teams'],
      icon: '🏢',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Bulk Hiring & Campus Drives',
      description: 'Large-scale recruitment drives and campus hiring programs for rapid workforce expansion.',
      price: 'Custom Pricing',
      rating: 4.7,
      clients: '200+ clients',
      features: ['Mass Recruitment', 'Campus Placement', 'Walk-in Drives'],
      icon: '🎯',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const stats = [
    { number: '600+', label: 'Successful Placements' },
    { number: '4+', label: 'Happy Clients' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🎯 Our Expertise & Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">OUR SERVICES</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive recruitment and staffing solutions designed to meet your workforce needs 
            across all industries and skill levels with cutting-edge technology and personalized service.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-full font-medium transition ${
              activeTab === 'all' 
                ? 'bg-purple-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            🎯 All Services (3)
          </button>
          <button 
            onClick={() => setActiveTab('staffing')}
            className={`px-6 py-3 rounded-full font-medium transition ${
              activeTab === 'staffing' 
                ? 'bg-purple-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            👥 Staffing (1)
          </button>
          <button 
            onClick={() => setActiveTab('recruitment')}
            className={`px-6 py-3 rounded-full font-medium transition ${
              activeTab === 'recruitment' 
                ? 'bg-purple-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            📋 Recruitment (1)
          </button>
          <button 
            onClick={() => setActiveTab('support')}
            className={`px-6 py-3 rounded-full font-medium transition ${
              activeTab === 'support' 
                ? 'bg-purple-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            🎯 Support (1)
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-500 text-lg">⭐</span>
                  <span className="font-semibold ml-1">{service.rating}</span>
                  <span className="text-gray-500 ml-1">{service.clients}</span>
                </div>
                <div className="text-green-600 font-semibold">98%</div>
              </div>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <div className="text-2xl font-bold text-purple-600 mb-4">{service.price}</div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;