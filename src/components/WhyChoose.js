import React from 'react';

const WhyChoose = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Fast & Reliable Hiring',
      description: 'Quick turnaround times with reliable candidate screening and placement processes.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🌐',
      title: 'Pan-India Network',
      description: 'Extensive network across multiple states ensuring wide talent pool access.',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: '👥',
      title: 'Migrant Workforce Experts',
      description: 'Specialized expertise in connecting migrant talent with suitable opportunities.',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: '🕒',
      title: '24/7 Support',
      description: 'Round-the-clock support for all your recruitment and staffing needs.',
      color: 'from-pink-400 to-purple-500'
    }
  ];

  const industries = [
    'Logistics', 'Construction', 'Retail', 'IT', 'Hospitality', 'Manufacturing', 'BPO', 'Healthcare'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose M3Manpower?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We combine industry expertise with innovative solutions to deliver exceptional 
            recruitment services that drive your business forward.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium hover:bg-white/30 transition">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;