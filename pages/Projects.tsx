
import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import { Project } from '../types';

type Filter = 'All' | 'Residential' | 'Commercial' | 'Renovation' | 'Ongoing';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: Filter[] = ['All', 'Residential', 'Commercial', 'Renovation', 'Ongoing'];
  
  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="bg-sgi-white text-sgi-dark-gray pt-24">
      {/* Hero */}
      <section className="bg-sgi-deep-blue text-white py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Portfolio</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">A showcase of our commitment to excellence and quality craftsmanship.</p>
        </div>
      </section>

      {/* Filter System */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-center flex-wrap gap-2">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                filter === f
                  ? 'bg-sgi-green-blue text-white'
                  : 'bg-sgi-light-gray text-sgi-dark-gray hover:bg-sgi-green-blue/50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Project Gallery */}
      <AnimatedSection className="py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-all duration-500 transform group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sgi-light-gray">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-modal-fade-in" onClick={() => setSelectedProject(null)}>
            <div className="bg-white rounded-lg max-w-3xl w-full relative animate-modal-scale-up" onClick={e => e.stopPropagation()}>
                <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-sgi-dark-gray hover:bg-sgi-light-gray z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="rounded-t-lg w-full h-auto max-h-[60vh] object-cover" />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-sgi-deep-blue">{selectedProject.title}</h2>
                    <span className="inline-block bg-sgi-green-blue text-white text-sm px-3 py-1 rounded-full my-2">{selectedProject.category}</span>
                    <p className="text-sgi-dark-gray mt-2">{selectedProject.description}</p>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Projects;