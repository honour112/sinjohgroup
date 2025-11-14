import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from '../components/icons/SocialIcons';

const Contact: React.FC = () => {
  return (
    <div className="bg-sgi-white text-sgi-dark-gray pt-24">
      {/* Hero */}
      <section className="bg-sgi-deep-blue text-white py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">We're here to answer your questions. Let's build something great together.</p>
        </div>
      </section>

      {/* Contact Section */}
      <AnimatedSection className="py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-sgi-deep-blue mb-6">Get in Touch</h2>
            <p className="text-lg mb-8">
              Have a project in mind or need a consultation? Fill out the form or use our contact details below. We look forward to hearing from you.
            </p>
            <div className="space-y-4 text-lg">
              <p><strong>Address:</strong> Street 4, Tiko, Cameroon</p>
              <p><strong>Email:</strong> sinjohs@yahoo.com</p>
              <p><strong>Phone:</strong> +237 652 910 003</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-sgi-deep-blue mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="transform hover:scale-110 transition-transform"><FacebookIcon /></a>
                <a href="#" className="transform hover:scale-110 transition-transform"><InstagramIcon /></a>
                <a href="#" className="transform hover:scale-110 transition-transform"><LinkedInIcon /></a>
                <a href="https://wa.me/237652910003" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform"><WhatsAppIcon /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="first-name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sgi-green-blue focus:border-sgi-green-blue" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="last-name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sgi-green-blue focus:border-sgi-green-blue" />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sgi-green-blue focus:border-sgi-green-blue" />
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={5} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sgi-green-blue focus:border-sgi-green-blue"></textarea>
              </div>
              <div className="mt-6">
                <button type="submit" className="w-full bg-sgi-green-blue text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-all duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Embedded Map */}
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63671.23702174825!2d9.309063242095942!3d4.08000980556209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1060c427a19a9871%3A0x6283521a20684616!2sTiko%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1701202831888!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          title="Company Location in Tiko, Cameroon"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
