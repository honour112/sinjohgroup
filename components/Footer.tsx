import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "./icons/SocialIcons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Column 1 — About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Sinjoh Group Int.</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Sinjoh Group International provides skilled labor, construction services,
              and professional solutions for residential, commercial, and industrial projects.
            </p>
          </div>

          {/* Column 2 — Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-black">About Us</Link></li>
              <li><Link to="/services" className="hover:text-black">Services</Link></li>
              <li><Link to="/projects" className="hover:text-black">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>Construction</li>
              <li>Manpower Supply</li>
              <li>Maintenance</li>
              <li>Logistics</li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Street 4, Tiko, Cameroon</li>
              <li>sinjohs@yahoo.com</li>
              <li>+237 652 910 003</li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <FacebookIcon className="w-6 h-6 cursor-pointer hover:opacity-70" />
              <InstagramIcon className="w-6 h-6 cursor-pointer hover:opacity-70" />
              <LinkedInIcon className="w-6 h-6 cursor-pointer hover:opacity-70" />
              <WhatsAppIcon className="w-6 h-6 cursor-pointer hover:opacity-70" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t pt-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Sinjoh Group International. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
