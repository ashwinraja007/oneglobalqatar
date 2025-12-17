import { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Vision & Mission', href: '#vision' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      
      {/* Top Bar */}
      <div className="bg-primary py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-primary-foreground text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+97455855836" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+974 558 558 36</span>
            </a>
            <a href="mailto:info@oneglobalqatar.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@oneglobalqatar.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://www.facebook.com/oneglobalqatar" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="hover:text-accent transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/company/onegloballogistics/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
              className="hover:text-accent transition-colors"
            >
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
            <a href="#home" className="flex items-center">
              <img 
                src="/onegloballogo.png" 
                alt="One Global Consolidators Logo" 
                // Reduced width: w-16 (mobile) and w-24 (desktop)
                className="w-16 md:w-24 h-auto" 
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 font-body text-sm font-medium text-foreground hover:text-accent transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all group-hover:w-3/4" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 animate-fade-in">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 font-body text-foreground hover:bg-secondary hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-2 bg-accent hover:bg-red-hover text-accent-foreground font-body">
                Get a Quote
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
