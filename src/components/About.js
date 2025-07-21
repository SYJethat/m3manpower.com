import React from 'react';

const About = () => {
  const coverage = [
    'Bihar', 'Jharkhand', 'Odisha', 'Assam', 'West Bengal', 'Uttar Pradesh'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About M3 MANPOWER
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              M3MANPOWER (Migrant Magnet Manpower) is a comprehensive recruitment 
              and staffing solution provider specializing in both blue-collar and white-collar 
              hiring across India.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We are committed to bridging the gap between skilled talent from migrant 
              communities and the industries that need them most — from warehouses and 
              factories to offices and tech hubs.
            </p>

            {/* Vision */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Vision</h3>
              </div>
              <p className="text-gray-600 ml-16">
                To become India's most reliable and inclusive manpower solution, connecting 
                industries with the right talent across every skill level and empowering 
                migrant workers with meaningful employment opportunities and long-term career growth.
              </p>
            </div>

            {/* Mission */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Mission</h3>
              </div>
              <div className="ml-16 space-y-3">
                <p className="text-gray-600">• Deliver end-to-end recruitment solutions for both blue-collar and white-collar roles</p>
                <p className="text-gray-600">• Build trustworthy bridges between migrant talent and industries</p>
                <p className="text-gray-600">• Create a tech-enabled recruitment network for faster, transparent hiring</p>
                <p className="text-gray-600">• Uphold dignity, fairness, and opportunity in every job placement</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Company Images Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 text-center">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-white text-4xl">🏭</div>
                </div>
                <h4 className="font-bold text-gray-800">Manufacturing</h4>
                <p className="text-gray-600 text-sm">Skilled workforce placement</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 text-center">
                <div className="w-full h-48 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-white text-4xl">🏢</div>
                </div>
                <h4 className="font-bold text-gray-800">Corporate</h4>
                <p className="text-gray-600 text-sm">Professional recruitment</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center">
                <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-white text-4xl">🚛</div>
                </div>
                <h4 className="font-bold text-gray-800">Logistics</h4>
                <p className="text-gray-600 text-sm">Warehouse & delivery staff</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 text-center">
                <div className="w-full h-48 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-white text-4xl">🏨</div>
                </div>
                <h4 className="font-bold text-gray-800">Hospitality</h4>
                <p className="text-gray-600 text-sm">Hotel & restaurant staff</p>
              </div>
            </div>

            {/* Coverage */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Coverage</h3>
              </div>
              <p className="text-gray-600 mb-6">Strong presence across major states:</p>
              <div className="grid grid-cols-2 gap-3">
                {coverage.map((state, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700">{state}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;