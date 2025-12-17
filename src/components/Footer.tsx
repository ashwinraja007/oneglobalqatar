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
    { name: "Global Network", href: "#global" },
    { name: "Key Features", href: "#services" },
    { name: "Vision & Mission", href: "#vision" },
    { name: "Core Values", href: "#core" },
    { name: "Value Propositions", href: "#value" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">

      {/* MAIN FOOTER CONTENT */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ABOUT + LOGO */}
          <div>
            {/* LOGO ABOVE ABOUT */}
            <img
              src="/onegloballogo.png"
              alt="One Global Logistics"
              className="h-14 w-auto object-contain mb-4"
            />

            <h3 className="font-heading font-bold text-base mb-3">
              About Us
            </h3>
            <p className="text-sm text-primary-foreground/75 leading-6">
              One Global Logistics Services W.L.L is a Qatar based global NVOCC
              operator providing LCL consolidation services worldwide.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="md:pl-8">
            <h3 className="font-heading font-bold text-base mb-3">
              Quick Links
            </h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-accent transition"
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
            <h3 className="font-heading font-bold text-base mb-3">
              Our Office
            </h3>

            <div className="space-y-3 text-sm text-primary-foreground/75">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <div>
                  <p className="font-semibold">
                    One Global Logistics Services W.L.L
                  </p>
                  <p>Office no: 48, 2nd Floor</p>
                  <p>Al Matar Centre, Old Airport Road</p>
                  <p>Doha, Qatar</p>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-accent" />
                <p>+974 558 558 36 / 446 79 444</p>
              </div>

              <div className="flex gap-2 items-center">
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
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-primary-foreground/60">
            © 2025 One Global Logistics. All rights reserved.
          </p>

          <div className="flex gap-3">
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
