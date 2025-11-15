import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick: () => void }> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block py-2 px-3 text-sgi-white rounded hover:bg-sgi-green-blue md:hover:bg-transparent md:border-0 md:hover:text-sgi-green-blue md:p-0 transition-colors duration-300 ${isActive ? 'text-sgi-green-blue' : ''}`
    }
  >
    {children}
  </NavLink>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesSubMenuOpen, setIsServicesSubMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close sub-menu when route changes
  useEffect(() => {
    setIsServicesSubMenuOpen(false);
  }, [location.pathname]);


  const closeMenu = () => {
      setIsOpen(false);
  }
  
  const toggleServicesSubMenu = () => {
      setIsServicesSubMenuOpen(!isServicesSubMenuOpen);
  }
  
  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-sgi-deep-blue/95 shadow-lg backdrop-blur-sm' : 'bg-sgi-deep-blue/90'}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={closeMenu}>
         <img src="/WhatsApp Image 2025-11-15 at 09.35.19_6d7251cf.jpg" alt="sinjohLogo" className="inline-block h-10 w-10 ml-2 rounded-full" />

          <span className="self-center text-2xl font-semibold whitespace-nowrap text-sgi-white">Sinjoh Group</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-sgi-light-gray rounded-lg md:hidden hover:bg-sgi-green-blue focus:outline-none focus:ring-2 focus:ring-sgi-light-gray"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-sgi-dark-gray/50 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:items-center">
            <li><NavItem to="/" onClick={closeMenu}>Home</NavItem></li>
            <li><NavItem to="/about" onClick={closeMenu}>About Us</NavItem></li>
            
            {/* Services Dropdown for Desktop */}
            <li className="hidden md:block relative group">
              <NavLink
                to="/services"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-2 text-sgi-white rounded md:hover:bg-transparent md:border-0 md:hover:text-sgi-green-blue md:p-0 transition-colors duration-300 ${isActive || isServicesActive ? 'text-sgi-green-blue' : ''}`
                }
              >
                Services
              </NavLink>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 -mt-2 w-56 rounded-md shadow-lg bg-sgi-deep-blue z-20 hidden group-hover:block transition-all duration-300 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 origin-top">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {SERVICES_DATA.map(service => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      onClick={closeMenu}
                      className="block px-4 py-2 text-sm text-sgi-white hover:bg-sgi-green-blue transition-colors duration-200"
                      role="menuitem"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            
            {/* Services Accordion for Mobile */}
            <li className="md:hidden">
              <button
                onClick={toggleServicesSubMenu}
                className={`flex items-center justify-between w-full py-2 px-3 text-sgi-white rounded hover:bg-sgi-green-blue transition-colors duration-300 ${isServicesActive ? 'text-sgi-green-blue' : ''}`}
              >
                <span>Services</span>
                <svg className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${isServicesSubMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isServicesSubMenuOpen && (
                <ul className="pl-4 mt-2 space-y-1">
                  <li><NavItem to="/services" onClick={closeMenu}>All Services</NavItem></li>
                  {SERVICES_DATA.map(service => (
                    <li key={service.id}>
                      <NavItem to={`/services/${service.id}`} onClick={closeMenu}>
                        {service.title}
                      </NavItem>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><NavItem to="/projects" onClick={closeMenu}>Projects</NavItem></li>
            <li><NavItem to="/contact" onClick={closeMenu}>Contact</NavItem></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;