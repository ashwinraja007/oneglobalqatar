import { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Linkedin, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '#home', isPage: false },
    { name: 'About Us', href: '#about', isPage: false },
    { name: 'Our Services', href: '/services', isPage: true },
    { name: 'Vision & Mission', href: '#vision', isPage: false },
    { name: 'Contact Us', href: '#contact', isPage: false },
  ];

  const countries = [
    { name: 'Qatar', phone: '+974 558 558 36 / 446 79 444 / 446 79 400' },
    { name: 'India', phone: '+91 XXXXX XXXXX' },
    { name: 'UAE', phone: '+971 XX XXX XXXX' },
  ];

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (link) => {
    setIsMenuOpen(false);
    link.isPage ? navigate(link.href) : scrollToSection(link.href.replace('#', ''));
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-primary py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-primary-foreground text-sm">
          <div className="flex items-center gap-6">
            <div className="relative">
              <button
                onClick={() => setCountryOpen(!countryOpen)}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Qatar</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {countryOpen && (
                <div className="absolute left-0 mt-2 bg-white text-foreground rounded-md shadow-lg w-64 z-50">
                  {countries.map((c) => (
                    <div
                      key={c.name}
                      className="px-4 py-2 text-sm hover:bg-secondary cursor-pointer"
                    >
                      <p className="font-medium">{c.name}</p>
                      <p className="text-xs opacity-80">{c.phone}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a href="mailto:info@oneglobalqatar.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@oneglobalqatar.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/oneglobalqatar" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/onegloballogistics/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <img src="/onegloballogo.png" alt="One Global Consolidators Logo" className="w-16 md:w-24 h-auto" />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="px-4 py-2 text-sm font-medium hover:text-accent relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all group-hover:w-3/4" />
                </button>
              ))}
            </div>

            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="block w-full text-left px-4 py-3 hover:bg-secondary"
                >
                  {link.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
