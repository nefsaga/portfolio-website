import React from 'react';
import { siteContent } from '../mock';
import { Card, CardContent } from './ui/card';
import { Code, Smartphone, Palette } from 'lucide-react';

const ServicesSection = () => {
  const { services } = siteContent;

  const getIcon = (iconName) => {
    const icons = {
      Code: Code,
      Smartphone: Smartphone,
      Palette: Palette
    };
    const IconComponent = icons[iconName];
    return <IconComponent size={40} />;
  };

  return (
    <section id="services" className="py-20 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-[#a0aec0] max-w-2xl mx-auto">
            End-to-end dijital çözümlerle projenizi hayata geçiriyoruz
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-[#141b3d] border-[#1e2749] hover:border-[#ff6b35] transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="text-[#ff6b35] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-[#a0aec0] leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;