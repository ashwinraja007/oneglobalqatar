import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  const services = [
    "Sea Freight (FCL)",
    "Sea Freight (LCL)",
    "Air Freight",
    "Customs Clearance",
    "Warehousing",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* TOP FOOTER */}
      <div className="container mx-auto px-6 py-24">
        {/* increased py from 16 → 24 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <span className="font-heading font-bold text-2xl tracking-wide">
                ONE
              </span>
              <p className="font-heading text-xs tracking-widest text-primary-foreground/70">
                GLOBAL CONSOLIDATORS
              </p>
            </div>

            <p className="font-body text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              One of the largest international freight forwarding companies.
              OGC operates fully fledged container services across the globe.
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-body text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">
              Contact Info
            </h3>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="font-body text-primary-foreground/80 text-sm leading-relaxed max-w-xs break-words">
                  One Global Logistics Services WLL
                  <br />
                  Al Nasr Tower A,
                  <br />
                  Doha, Qatar
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="font-body text-primary-foreground/80 text-sm">
                  +974 4000 1234
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="font-body text-primary-foreground/80 text-sm break-all">
                  info@oneglobal.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-8">
          {/* increased py */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-primary-foreground/60 text-sm text-center md:text-left">
              © 2025 One Global Consolidators. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-body text-primary-foreground/60 hover:text-accent text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-body text-primary-foreground/60 hover:text-accent text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
