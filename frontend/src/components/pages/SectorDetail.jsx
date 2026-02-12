import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SectorDetail = () => {
  const { sectorName } = useParams();

  const sectorData = {
    hospitality: {
      name: 'Hospitality',
      icon: '🏨',
      description: 'Premium carpet solutions designed specifically for the hospitality industry',
      intro: 'Transform your hotel, resort, or hospitality venue with our luxury carpet collections that combine elegance, durability, and functionality.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      designApproach: [
        'Luxury aesthetics that enhance guest experience',
        'Durability to withstand high foot traffic',
        'Easy maintenance and cleaning',
        'Sound absorption for guest comfort',
        'Custom designs to match brand identity'
      ],
      relatedProjects: [
        { name: 'Grand Hyatt Dubai', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
        { name: 'Ritz Carlton London', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400' }
      ]
    },
    residential: {
      name: 'Residential',
      icon: '🏠',
      description: 'Elegant flooring solutions that make your house a home',
      intro: 'Create warm, inviting spaces with our residential carpet collections designed for comfort and style.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
      designApproach: [
        'Soft, comfortable textures for family living',
        'Wide variety of styles and colors',
        'Stain-resistant and easy to clean',
        'Safe and allergen-free materials',
        'Long-lasting quality'
      ],
      relatedProjects: [
        { name: 'Luxury Villa NYC', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400' }
      ]
    },
    commercial: {
      name: 'Commercial',
      icon: '🏢',
      description: 'Professional carpet solutions for modern workspaces',
      intro: 'Enhance your office environment with carpets that combine professionalism, durability, and acoustic benefits.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      designApproach: [
        'Professional appearance for corporate environments',
        'High traffic resistance',
        'Noise reduction for productivity',
        'Modular options for flexibility',
        'Sustainable materials'
      ],
      relatedProjects: [
        { name: 'Corporate Tower London', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400' }
      ]
    },
    exhibition: {
      name: 'Exhibition',
      icon: '🎪',
      description: 'Specialized carpeting for events and exhibitions',
      intro: 'Make your event stand out with our exhibition carpet solutions designed for quick installation and visual impact.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      designApproach: [
        'Quick and easy installation',
        'Portable and reusable',
        'Custom branding options',
        'Variety of colors and patterns',
        'Cost-effective solutions'
      ],
      relatedProjects: []
    },
    retail: {
      name: 'Retail',
      icon: '🛍️',
      description: 'Enhance your retail space with durable, attractive flooring',
      intro: 'Create the perfect shopping environment with carpets that enhance your brand and withstand heavy foot traffic.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      designApproach: [
        'Brand-enhancing designs',
        'High durability for heavy traffic',
        'Easy maintenance',
        'Visual appeal to attract customers',
        'Comfortable shopping experience'
      ],
      relatedProjects: []
    }
  };

  const sector = sectorData[sectorName] || sectorData.hospitality;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors pt-20 animate-blur-in">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={sector.image}
          alt={sector.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-white">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-6xl">{sector.icon}</span>
                <h1 className="text-5xl font-bold">{sector.name}</h1>
              </div>
              <p className="text-2xl text-gray-200">{sector.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6 animate-reveal">Introduction</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{sector.intro}</p>
        </section>

        {/* Design Approach */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 animate-reveal">Our Design Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sector.designApproach.map((approach, index) => (
              <div key={index} className="flex items-start space-x-4 bg-slate-50 dark:bg-slate-900 p-6 rounded-lg animate-fade-in-up">
                <svg className="w-6 h-6 text-gold-600 dark:text-gold-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-slate-700 dark:text-slate-300">{approach}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Projects */}
        {sector.relatedProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Related Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sector.relatedProjects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{project.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Inquiry Button */}
        <section className="bg-gold-50 dark:bg-gold-900/10 transition-colors rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 animate-reveal">
            Interested in {sector.name} Solutions?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 animate-fade-in-up">
            Let's discuss how we can enhance your {sector.name.toLowerCase()} space
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gold-600 text-white rounded-lg font-semibold hover:bg-gold-700 transition-all transform hover:scale-105"
          >
            Contact Our Team
          </Link>
        </section>
      </div>
    </div>
  );
};

export default SectorDetail;
