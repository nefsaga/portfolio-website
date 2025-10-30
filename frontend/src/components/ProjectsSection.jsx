import React from 'react';
import { siteContent } from '../mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const { projects } = siteContent;

  return (
    <section id="projects" className="py-20 bg-[#141b3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Başarı Hikayelerimiz
          </h2>
          <p className="text-xl text-[#a0aec0] max-w-2xl mx-auto">
            Çeşitli sektörlerde gerçekleştirdiğimiz projelerle fark yarattık
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-[#0a0e27] border-[#1e2749] overflow-hidden group hover:border-[#ff6b35] transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#ff6b35] text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-[#a0aec0] mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-[#1e2749] text-[#a0aec0]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-start space-x-2 text-sm text-[#ff6b35]">
                  <ExternalLink size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{project.result}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;