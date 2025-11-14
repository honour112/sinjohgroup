
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = SERVICES_DATA.find(s => s.id === serviceId);

  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
    window.scrollTo(0, 0);
  }, [service, navigate]);

  if (!service) {
    return null; // Or a loading/not found component
  }
  
  const BulletIcon = () => (
    <svg className="w-5 h-5 mr-2 text-sgi-green-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
  );

  return (
    <div className="bg-sgi-white text-sgi-dark-gray pt-20">
      {/* Hero Banner */}
      <section className="relative py-32 lg:py-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.imageUrl})` }}>
        <div className="absolute inset-0 bg-sgi-dark-gray bg-opacity-60"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-sgi-white">{service.title}</h1>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-4 py-20 lg:py-32 grid lg:grid-cols-3 gap-16">
        {/* Main Content */}
        <main className="lg:col-span-2">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-sgi-deep-blue mb-4">Full Description</h2>
            <p className="text-lg leading-relaxed">{service.longDescription}</p>
          </AnimatedSection>
          
          <AnimatedSection className="mt-16">
            <h2 className="text-3xl font-bold text-sgi-deep-blue mb-6">Our Process</h2>
            <div className="space-y-8">
              {service.process.map(p => (
                <div key={p.step} className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border-2 border-sgi-green-blue rounded-full">
                        <span className="text-lg font-bold text-sgi-green-blue">{p.step}</span>
                      </div>
                    </div>
                    <div className="w-px h-full bg-sgi-light-gray"></div>
                  </div>
                  <div className="pb-8">
                    <h3 className="font-bold text-xl mb-2 text-sgi-dark-gray">{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="mt-16">
             <h2 className="text-3xl font-bold text-sgi-deep-blue mb-6">Project Samples</h2>
             <div className="grid sm:grid-cols-2 gap-6">
                 {service.projectSamples.map((img, index) => (
                     <img key={index} src={img} alt={`${service.title} project sample ${index + 1}`} className="rounded-lg shadow-md w-full h-64 object-cover" loading="lazy" />
                 ))}
             </div>
          </AnimatedSection>

        </main>
        
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-28">
            <AnimatedSection className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-sgi-deep-blue mb-4">Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-lg"><BulletIcon />{benefit}</li>
                ))}
              </ul>
            </AnimatedSection>
             <AnimatedSection className="mt-8">
               <Link to="/contact" className="w-full text-center block bg-sgi-green-blue text-white font-bold py-4 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300">
                 Inquire About This Service
               </Link>
             </AnimatedSection>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ServiceDetail;
