import { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Linkedin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CountrySelector from '@/components/CountrySelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '#home', isPage: false },
    { name: 'About Us', href: '/about', isPage: true },
    { name: 'Our Services', href: '/services', isPage: true },
    { name: 'Global Presence', href: '/global-presence', isPage: true },
    { name: 'Contact Us', href: '/contact', isPage: true },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsMenuOpen(false);
    if (link.isPage) navigate(link.href);
    else scrollToSection(link.href.replace('#', ''));
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md bg-background">

      {/* Top Bar */}
      <div className="bg-primary py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-primary-foreground text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+97455855836" className="flex items-center gap-2 hover:text-accent">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+974 558 558 36</span>
            </a>
            <a href="mailto:info@oneglobalqatar.com" className="flex items-center gap-2 hover:text-accent">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@oneglobalqatar.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/oneglobalqatar" target="_blank" className="hover:text-accent">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/onegloballogistics/?viewAsMember=true" target="_blank" className="hover:text-accent">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/onegloballogo.png" alt="One Global Consolidators Logo" className="w-16 md:w-24 h-auto" />
            </Link>

            {/* Desktop Nav + Country Selector */}
            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="px-4 py-2 text-sm font-medium hover:text-accent transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all group-hover:w-3/4" />
                </button>
              ))}

              {/* 🌍 Switch Country Button */}
              <CountrySelector />
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
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

              {/* 🌍 Country Selector on Mobile */}
              <div className="px-4 pt-4">
                <CountrySelector />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
