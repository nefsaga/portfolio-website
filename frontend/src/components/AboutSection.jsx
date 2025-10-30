import React from 'react';
import { siteContent } from '../mock';
import { Card, CardContent } from './ui/card';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const { about } = siteContent;

  return (
    <section id="about" className="py-20 bg-[#141b3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {about.title}
            </h2>
            <p className="text-lg text-[#a0aec0] leading-relaxed mb-8">
              {about.description}
            </p>
            <div className="space-y-4">
              {about.values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-[#ff6b35] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold text-lg">{value.title}</h3>
                    <p className="text-[#a0aec0]">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#ff6b35] opacity-20 rounded-lg blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;