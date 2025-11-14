import React from 'react';
import { WhatsAppIcon } from './icons/SocialIcons';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/237652910003"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 z-40 transform hover:scale-105 flex items-center gap-2"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
      <span className="font-semibold pr-2">+237 652 910 003</span>
    </a>
  );
};

export default WhatsAppButton;