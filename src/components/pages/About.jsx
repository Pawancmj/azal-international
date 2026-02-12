import React from "react";
import { Link } from 'react-router-dom';
import SEO from "../ui/SEO";
import ScrollReveal from "../ui/ScrollReveal";

const About = () => {
  const productsOffered = [
    "Hand Knotted Rugs",
    "Hand Tufted Carpets",
    "Handloom Rugs",
    "Broadloom Carpets",
    "Jute Rugs",
    "Hand Woven Flat weaves",
    "Leather Carpets"
  ];

  const services = [
    {
      title: "Designer team for generating CAD's",
      icon: "📐"
    },
    {
      title: "Product Sampling",
      icon: "🧶"
    },
    {
      title: "Worldwide delivery of Rugs and Carpets",
      icon: "🌎"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors pt-20">
      <SEO
        title="About Us"
        description="Discover AZAL INTERNATIONAL, where love and passion are woven into every thread. A family legacy dedicated to premium craftsmanship, sustainability, and global rug solutions."
        keywords="rug legacy, family-owned carpet business, sustainable rug manufacturing, premium craftsmanship, global delivery rugs"
      />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-8 font-playfair tracking-tight">
              ABOUT US
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-gold-600 font-playfair italic mb-8">
                "Love and passion are woven into every thread."
              </p>
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                Welcome to <span className="font-bold">AZAL INTERNATIONAL</span>. Step into our world and discover the story behind our unwavering commitment to craftsmanship, quality, and unparalleled service. With over two decades of experience, we invite you to explore the essence of elegance—a love letter to your home.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Story / Legacy Section */}
        <ScrollReveal animation="scroll-reveal-up">
          <section className="mb-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 font-playfair">A Family Legacy</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  AZAL INTERNATIONAL is a family legacy, founded on a love for rugs and carpets that spans generations. Our passion drives us to provide the finest quality products and services, each piece a testament to our love for what we do.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  We are a beacon of love in the rug industry, deeply rooted in the artistry and tradition of rug weaving. Our journey began with a vision to create rugs that embody timeless elegance—a love story for your home.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Each rug is a labor of love, meticulously handcrafted by skilled artisans using premium materials sourced from around the globe. From luxurious wool to sumptuous silk, every rug reflects our unwavering commitment to excellence and attention to detail.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800"
                  alt="Azal Heritage"
                  className="rounded-2xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Mission & Vision */}
        <ScrollReveal>
          <section className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 transition-all hover:border-gold-500/30">
              <div className="text-gold-600 mb-6 flex items-center gap-4">
                <span className="text-4xl">🎯</span>
                <h2 className="text-3xl font-bold font-playfair uppercase tracking-widest">Mission</h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  At <span className="font-bold">AZAL INTERNATIONAL</span>, our mission is to create exquisite rugs and carpets that elevate the aesthetic of any environment. We strive to blend timeless techniques with contemporary styles, ensuring that each piece not only serves a functional purpose but also adds a touch of sophistication to homes and businesses.
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  We are dedicated to weaving together quality, craftsmanship, and sustainability in every rug we create, honoring traditional techniques and eco-friendly practices.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-10 rounded-3xl border border-gold-500/20 shadow-2xl relative overflow-hidden">
              <div className="text-gold-500 mb-6 flex items-center gap-4 relative z-10">
                <span className="text-4xl">✨</span>
                <h2 className="text-3xl font-bold font-playfair uppercase tracking-widest">Vision</h2>
              </div>
              <div className="space-y-4 relative z-10 text-slate-300">
                <p className="leading-relaxed">
                  Our vision is to redefine the way people experience flooring. We strive to be a leader in sustainable, innovative carpet solutions that blend style, comfort, and durability.
                </p>
                <p>
                  Through cutting-edge designs, exceptional quality, and eco-friendly practices, we aim to transform spaces into warm, inviting environments while making a positive impact on our planet. Our commitment is to inspire, elevate, and create lasting value for our customers, partners, and communities.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl"></div>
            </div>
          </section>
        </ScrollReveal>

        {/* Products Offered */}
        <ScrollReveal animation="scroll-reveal-left">
          <section className="mb-24 py-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 font-playfair">PRODUCTS OFFERED</h2>
              <p className="text-gold-600 font-bold tracking-widest">IMAGINATION TO REALITY</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {productsOffered.map((product, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 group hover:border-gold-500 transition-colors">
                  <span className="w-2 h-2 bg-gold-500 rounded-full group-hover:scale-125 transition-transform"></span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">{product}</span>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Our Services */}
        <ScrollReveal animation="scroll-reveal-right">
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 font-playfair">OUR SERVICES</h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg text-center group hover:-translate-y-2 transition-all">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Final CTA */}
        <ScrollReveal>
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-16 text-center relative overflow-hidden border border-gold-500/20 shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 font-playfair tracking-wide">Ready to Elevate Your Space?</h2>
              <p className="text-xl text-slate-300 mb-10">
                Connect with our team to bring the elegance of <span className="text-gold-500 font-bold">AZAL INTERNATIONAL</span> into your environment.
              </p>
              <Link to="/contact" className="inline-block px-12 py-5 bg-gold-600 text-white rounded-lg font-bold hover:bg-gold-700 transition-all transform hover:scale-105 shadow-xl shadow-gold-500/20 uppercase tracking-widest text-lg">
                Schedule a Consultation
              </Link>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl"></div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;

