import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';

const ContactPage = () => {
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      lines: [
        'One Global Logistics Services W.L.L',
        'Office no: 48, 2nd Floor',
        'Al matar Centre, Old Airport Road',
        'Doha, Qatar',
      ],
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['International: +974 558 558 36, 446 79 444, 446 79 400'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@oneglobalqatar.com'],
    },
    {
      icon: Globe,
      title: 'Website',
      lines: ['www.oneglobalqatar.com'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[350px] md:h-[450px] overflow-hidden">
          <img
            src="/port.jpg"
            alt="Contact One Global Logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                  Contact Us
                </h1>
                <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed">
                  Get in touch with our team for inquiries, quotes, or any
                  questions about our services.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg border">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                    <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                    <Input name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} />
                    <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={5} className="resize-none" />

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg border h-fit">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Our Office
                  </h2>

                  <div className="space-y-8">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div key={index} className="flex gap-4 items-start">
                          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                            {info.lines.map((line, idx) => (
                              <p key={idx} className="text-muted-foreground text-sm leading-relaxed">{line}</p>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl shadow-lg border overflow-hidden"
            >
              <iframe
                className="w-full h-[400px] border-0"
                loading="lazy"
                src="https://www.google.com/maps/d/embed?mid=1x7_4LJ6dtdf7j5_wLKodrqPKOdjmUlw&ehbc=2E312F&noprof=1"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
