
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

const Services: React.FC = () => {
  return (
    <div className="bg-sgi-white text-sgi-dark-gray pt-24">
      {/* Hero */}
      <section className="bg-sgi-deep-blue text-white py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Services</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">Comprehensive solutions for every stage of your project.</p>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection className="py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <Link
                to={`/services/${service.id}`}
                key={service.id}
                className="group block bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-sgi-deep-blue mb-2 group-hover:text-sgi-green-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sgi-dark-gray">{service.shortDescription}</p>
                  <span className="inline-block mt-4 text-sgi-green-blue font-semibold group-hover:underline">
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Services;
