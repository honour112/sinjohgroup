import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sgi-dark-gray text-sgi-light-gray">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-3xl font-bold text-sgi-white">Sinjoh Group Int.</h2>
            <p className="text-sgi-light-gray text-base">
              “Building Dreams, One Brick at a Time”
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-sgi-white transition-colors duration-300"><FacebookIcon /></a>
              <a href="#" className="hover:text-sgi-white transition-colors duration-300"><InstagramIcon /></a>
              <a href="#" className="hover:text-sgi-white transition-colors duration-300"><LinkedInIcon /></a>
              <a href="https://wa.me/237652910003" target="_blank" rel="noopener noreferrer" className="hover:text-sgi-white transition-colors duration-300"><WhatsAppIcon /></a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-sgi-white tracking-wider uppercase">Quick Links</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/about" className="text-base text-sgi-light-gray hover:text-sgi-white">About</Link></li>
                  <li><Link to="/services" className="text-base text-sgi-light-gray hover:text-sgi-white">Services</Link></li>
                  <li><Link to="/projects" className="text-base text-sgi-light-gray hover:text-sgi-white">Projects</Link></li>
                  <li><Link to="/contact" className="text-base text-sgi-light-gray hover:text-sgi-white">Contact</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-sgi-white tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/privacy-policy" className="text-base text-sgi-light-gray hover:text-sgi-white">Privacy Policy</Link></li>
                  <li><Link to="/terms-conditions" className="text-base text-sgi-light-gray hover:text-sgi-white">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                <h3 className="text-sm font-semibold text-sgi-white tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li className="text-base text-sgi-light-gray">Street 4, Tiko, Cameroon</li>
                  <li className="text-base text-sgi-light-gray">sinjohs@yahoo.com</li>
                  <li className="text-base text-sgi-light-gray">+237 652 910 003</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-sgi-light-gray text-center">&copy; {new Date().getFullYear()} Sinjoh Group International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
