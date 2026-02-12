import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 animate-reveal">
            About AZAL International
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Crafting premium carpets with passion, precision, and sustainability
            since 1990
          </p>
        </div>

        {/* Company Story */}
        <section id="story" className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6 animate-reveal">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Founded in 1990, AZAL International began as a small
                family-owned carpet workshop with a vision to combine
                traditional craftsmanship with modern innovation. Over three
                decades, we've grown into a global leader in premium carpet
                manufacturing.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our journey has been marked by continuous innovation, commitment
                to quality, and an unwavering dedication to customer
                satisfaction. Today, we serve clients across 50+ countries,
                delivering excellence in every fiber.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300"
                alt="Craftsmanship"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300"
                alt="Team"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-20 bg-slate-50 dark:bg-slate-900 transition-colors -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To be the world's most trusted and innovative carpet
                  manufacturer, setting new standards in quality, design, and
                  sustainability while enriching spaces and lives globally.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To create exceptional carpet solutions that blend artistry,
                  technology, and environmental responsibility, delivering
                  unmatched value to our customers and contributing to a
                  sustainable future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
            Our Manufacturing Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Design",
                desc: "Creative conceptualization and pattern development",
              },
              {
                step: "02",
                title: "Material Selection",
                desc: "Premium quality fibers and sustainable materials",
              },
              {
                step: "03",
                title: "Weaving",
                desc: "Expert craftsmanship with state-of-the-art machinery",
              },
              {
                step: "04",
                title: "Quality Control",
                desc: "Rigorous testing and inspection processes",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gold-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Craftsmanship */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1600166898405-da9535204843?w=600"
                alt="Craftsmanship"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Master Craftsmanship
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Our artisans bring decades of experience and traditional
                techniques, combined with modern technology to create carpets
                that are both beautiful and durable.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Every carpet we produce is a testament to their skill, attention
                to detail, and commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section
          id="sustainability"
          className="mb-20 bg-green-50 dark:bg-green-900/10 transition-colors -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Sustainability Commitment
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                We believe in protecting our planet while creating beautiful
                spaces
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "♻️",
                  title: "Eco-Friendly Materials",
                  desc: "Using sustainable and recycled fibers",
                },
                {
                  icon: "💧",
                  title: "Water Conservation",
                  desc: "Advanced water recycling systems",
                },
                {
                  icon: "🌱",
                  title: "Carbon Neutral",
                  desc: "Offsetting our carbon footprint",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center shadow-lg"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IP Consultation */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gold-600 to-gold-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">
              Intellectual Property Consultation
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              We offer expert consultation on design patents, trademarks, and
              intellectual property protection for custom carpet designs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
