import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-sgi-green-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const About: React.FC = () => {
  const values = [
    { title: 'Integrity', description: 'We uphold the highest standards of integrity in all of our actions.' },
    { title: 'Quality', description: 'We provide outstanding craftsmanship and unsurpassed service that, together, deliver premium value to our customers.' },
    { title: 'Innovation', description: 'We thrive on creativity and ingenuity, constantly seeking new ways to improve and excel.' },
    { title: 'Passion', description: 'We are passionate about what we do, and it shows in our dedication to every project.' },
  ];

  const whyChooseUs = [
      { title: 'Expert Craftsmanship', description: 'Our skilled team brings precision and artistry to every detail, ensuring a superior finish on all projects.'},
      { title: 'Years of Experience', description: 'With a proven track record, our extensive experience ensures your project is in capable hands.'},
      { title: 'On-Time Completion', description: 'We respect your time. Our efficient project management guarantees that we meet deadlines without compromising quality.'},
      { title: 'Competitive Pricing', description: 'We offer transparent, fair pricing and provide the best possible value for your investment.'},
      { title: 'High-Quality Materials', description: 'We source only the most durable and reliable materials to ensure longevity and excellence.'},
      { title: 'Safety First', description: 'Our strict safety protocols create a secure work environment for our team and clients.'},
      { title: 'Customer Satisfaction', description: 'Your satisfaction is our priority. We work closely with you to exceed your expectations.'},
      { title: 'Innovative Solutions', description: 'We leverage modern techniques and creative problem-solving to overcome any construction challenge.'},
  ];

  return (
    <div className="bg-sgi-white text-sgi-dark-gray pt-24">
      {/* Hero */}
      <section className="bg-sgi-deep-blue text-white py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Sinjoh Group International</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">Building a legacy of excellence in construction, engineering, and development.</p>
        </div>
      </section>

      {/* Company Story */}
      <AnimatedSection className="py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-sgi-deep-blue mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              Founded on the principles of precision and passion, Sinjoh Group International has grown from a small, dedicated team into a leading force in the construction industry. Our journey is one of continuous growth, driven by a commitment to innovation and an unwavering dedication to our clients' success.
            </p>
            <p className="text-lg">
              We have successfully delivered a diverse range of projects, from modern residential homes to large-scale commercial complexes, each one a testament to our expertise and high-end craftsmanship.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/WhatsApp%20Image%202025-11-14%20at%2023.16.08_5d74033d.jpg" alt="Company history" className="rounded-lg shadow-xl" loading="lazy" />
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-sgi-green-blue mb-4">Our Mission</h3>
            <p className="text-lg">
              To deliver superior construction and development solutions through exceptional quality, innovation, and integrity, while fostering lasting relationships with our clients, partners, and communities.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-sgi-green-blue mb-4">Our Vision</h3>
            <p className="text-lg">
              To be the most trusted and sought-after construction partner, renowned for creating enduring landmarks that shape the future and inspire generations.
            </p>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Core Values */}
       <AnimatedSection className="py-20 lg:py-32">
         <div className="max-w-screen-xl mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-sgi-deep-blue mb-12">Our Core Values</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {values.map((value) => (
                     <div key={value.title} className="p-6 border border-sgi-light-gray rounded-lg">
                         <h3 className="text-2xl font-bold text-sgi-deep-blue mb-3">{value.title}</h3>
                         <p>{value.description}</p>
                     </div>
                 ))}
             </div>
         </div>
       </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-20 lg:py-32 bg-sgi-deep-blue text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto text-sgi-light-gray">
              Our dedication to excellence sets us apart.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-sgi-dark-gray/30 rounded-lg">
                  <div className="flex-shrink-0">
                      <CheckIcon/>
                  </div>
                  <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sgi-light-gray">{item.description}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
