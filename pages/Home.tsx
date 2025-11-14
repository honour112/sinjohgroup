import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, PROJECTS_DATA, TESTIMONIALS_DATA } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

const Home: React.FC = () => {
  const featuredServices = SERVICES_DATA.slice(0, 3);
  const featuredProjects = PROJECTS_DATA.slice(0, 4);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [currentHeroImage, setCurrentHeroImage] = React.useState(0);

  // Note: assets in `public/` are served at the site root ("/").
  // Don't include the `public/` directory in the URL — reference the file from root
  // (eg. `/image.jpg`). Also avoid spaces in filenames (rename to hyphens) or
  // URL-encode paths. For now we'll encode the existing filename.
  const heroImages = [
    'https://th.bing.com/th/id/OIP.xlzd0JsPXGXYJwTEbx_KHgHaE8?w=276&h=184&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1',
    'https://th.bing.com/th/id/OIP.sryP3RwNAQixrL8XZUb3zwHaEJ?w=281&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1',
    '/WhatsApp%20Image%202025-11-14%20at%2023.16.08_5d74033d.jpg',
  ];

  React.useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    
    const heroTimer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearInterval(testimonialTimer);
      clearInterval(heroTimer);
    };
  }, [currentTestimonial, currentHeroImage]);

  return (
    <div className="bg-sgi-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{ 
              // URL-encode the path in case the filename contains spaces.
              backgroundImage: `url(${encodeURI(img)})`,
              opacity: index === currentHeroImage ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-sgi-dark-gray bg-opacity-60"></div>
        <div className="relative z-10 text-center text-sgi-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight animate-fade-in-down">
            Engineering Tomorrow's Landmarks
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Building Dreams, One Brick at a Time
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Link to="/contact" className="bg-sgi-green-blue text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
              Get a Quote
            </Link>
            <Link to="/services" className="bg-transparent border-2 border-sgi-white text-white font-bold py-3 px-8 rounded-md hover:bg-sgi-white hover:text-sgi-deep-blue transition-all duration-300 transform hover:scale-105">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <AnimatedSection className="py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-sgi-deep-blue mb-4">
              Pioneering Construction with Precision and Passion
            </h2>
            <p className="text-lg text-sgi-dark-gray mb-6">
              Sinjoh Group International stands at the forefront of the construction industry, delivering high-quality structural work and modern builds for both residential and commercial sectors. Our commitment to innovation, integrity, and excellence makes us a trusted partner in bringing architectural visions to life.
            </p>
            <Link to="/about" className="text-sgi-green-blue font-semibold hover:underline">
              Learn More About Us &rarr;
            </Link>
          </div>
          <div>
            <img src="https://picsum.photos/seed/about-home/800/600" alt="Construction Site" className="rounded-lg shadow-xl" loading="lazy" />
          </div>
        </div>
      </AnimatedSection>
      
      {/* Featured Services */}
      <AnimatedSection className="py-20 lg:py-32 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-sgi-deep-blue mb-4">Our Core Services</h2>
              <p className="text-lg text-sgi-dark-gray mb-12 max-w-2xl mx-auto">From initial design to final handover, we offer a comprehensive suite of services.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredServices.map(service => (
                      <Link to={`/services/${service.id}`} key={service.id} className="group bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <img src={service.imageUrl} alt={service.title} className="rounded-lg mb-6 h-48 w-full object-cover" loading="lazy"/>
                          <h3 className="text-2xl font-bold text-sgi-deep-blue mb-2 group-hover:text-sgi-green-blue transition-colors duration-300">{service.title}</h3>
                          <p className="text-sgi-dark-gray">{service.shortDescription}</p>
                      </Link>
                  ))}
              </div>
          </div>
      </AnimatedSection>

      {/* Featured Projects */}
       <AnimatedSection className="py-20 lg:py-32">
         <div className="max-w-screen-xl mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-sgi-deep-blue mb-4">Featured Projects</h2>
             <p className="text-lg text-sgi-dark-gray mb-12 max-w-2xl mx-auto">A glimpse into our portfolio of successfully completed and ongoing projects.</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {featuredProjects.map(project => (
                     <div key={project.id} className="relative group overflow-hidden rounded-lg shadow-lg">
                         <img src={project.imageUrl} alt={project.title} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy"/>
                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                         <div className="absolute bottom-0 left-0 p-6">
                             <h3 className="text-xl font-bold text-white">{project.title}</h3>
                             <p className="text-sgi-light-gray">{project.category}</p>
                         </div>
                     </div>
                 ))}
             </div>
             <div className="mt-12">
                 <Link to="/projects" className="bg-sgi-deep-blue text-white font-bold py-3 px-8 rounded-md hover:bg-sgi-green-blue transition-all duration-300 transform hover:scale-105">
                     View All Projects
                 </Link>
             </div>
         </div>
       </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20 lg:py-32 bg-sgi-deep-blue text-white">
        <div className="max-w-screen-md mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="relative h-48">
             {TESTIMONIALS_DATA.map((testimonial, index) => (
                <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                    <div className="font-bold text-lg">{testimonial.author}</div>
                    <div className="text-sgi-light-gray">{testimonial.company}</div>
                </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Strip */}
      <section className="bg-sgi-green-blue text-white">
        <div className="max-w-screen-xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Ready to build your next project?</h2>
          <Link to="/contact" className="bg-sgi-white text-sgi-deep-blue font-bold py-3 px-8 rounded-md hover:bg-sgi-light-gray transition-colors duration-300 transform hover:scale-105">
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
