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
    { name: "Home", href: "/Hero" },
    { name: "About Us", href: "/About" },
    { name: "Global Network", href: "/GlobalNetwork" },
    { name: "Vision & Mission", href: "/VisionMission" },
    { name: "Core Values", href: "/CoreValues" },
    { name: "Contact Us", href: "/Contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* MAIN FOOTER */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ABOUT */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm text-primary-foreground/80 leading-6">
              One Global Logistics Services W.L.L is a Qatar based global NVOCC
              (Non-vessel owned common carrier) operator providing LCL
              consolidation services worldwide markets.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="md:pl-10">
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition"
                  >
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition">
                      →
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICE */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Office</h3>

            <div className="space-y-4 text-sm text-primary-foreground/80">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <div>
                  <p className="font-bold">
                    One Global Logistics Services W.L.L
                  </p>
                  <p>Office no: 48, 2nd Floor</p>
                  <p>Al Matar Centre, Old Airport Road</p>
                  <p>Doha, Qatar</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-accent mt-1" />
                <p>+974 558 558 36 / 446 79 444</p>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-accent" />
                <a
                  href="mailto:info@oneglobalqatar.com"
                  className="hover:text-accent underline"
                >
                  info@oneglobalqatar.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* LOGO */}
        <div className="mt-10 flex justify-center">
          <img
            src="/logo.png"
            alt="One Global Logistics"
            className="h-16 w-auto object-contain"
          />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/60">
            © 2025 One Global Logistics. All rights reserved.
          </p>

          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
