import React, { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('placements');

  const galleryItems = [
    {
      id: 1,
      title: 'Warehouse Placement Drive',
      description: 'Successful placement of 50+ warehouse workers',
      category: 'placements',
      icon: '🏭',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'IT Recruitment',
      description: 'Tech professionals placed in leading companies',
      category: 'placements',
      icon: '💻',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Manufacturing Team',
      description: 'Skilled workers for manufacturing sector',
      category: 'placements',
      icon: '⚙️',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Campus Hiring Event',
      description: 'Annual campus recruitment drive',
      category: 'events',
      icon: '🎓',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 5,
      title: 'Hospitality Staff',
      description: 'Hotel and restaurant staff placements',
      category: 'placements',
      icon: '🏨',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 6,
      title: 'Construction Workers',
      description: 'Skilled construction workforce',
      category: 'placements',
      icon: '🏗️',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      id: 7,
      title: 'Client Partnership Meet',
      description: 'Building strong client relationships',
      category: 'clients',
      icon: '🤝',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 8,
      title: 'BPO Recruitment',
      description: 'Call center and BPO staff placements',
      category: 'placements',
      icon: '📞',
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful placements, events, and client partnerships that showcase 
            our commitment to excellence.
          </p>
        </div>

        {/* Gallery Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          <button 
            onClick={() => setActiveTab('placements')}
            className={`px-6 py-3 rounded-full font-medium transition ${
              activeTab === 'placements' 
                ? 'bg-purple-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            Placements (6)
          </button>
          <button 
            onClick={() => setActiveTab('events')}
            className={`px-6 py-3 rounded-full font-medium transition ${
              activeTab === 'events' 
                ? 'bg-purple-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            Events (1)
          </button>
          <button 
            onClick={() => setActiveTab('clients')}
            className={`px-6 py-3 rounded-full font-medium transition ${
              activeTab === 'clients' 
                ? 'bg-purple-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-purple-50'
            }`}
          >
            Clients (1)
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <div className={`relative h-64 bg-gradient-to-br ${item.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl animate-float group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                    {item.category}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-4 flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span className="text-sm">View Details</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;