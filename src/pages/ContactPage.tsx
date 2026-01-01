import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Send,
  Clock,
  Building2
} from 'lucide-react';

const ContactPage = () => {
  const location = useLocation();
  const { toast } = useToast();
  
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Building2,
      title: 'Head Office',
      lines: ['One Global Logistics Services W.L.L', 'Doha, Qatar'],
    },
    {
      icon: MapPin,
      title: 'Address',
      lines: ['P.O. Box: 37233', 'Doha, Qatar'],
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['+974 558 558 36', '+974 4442 7742'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@oneglobalqatar.com', 'sales@oneglobalqatar.com'],
    },
    {
      icon: Globe,
      title: 'Website',
      lines: ['www.oneglobalqatar.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      lines: ['Sunday - Thursday', '8:00 AM - 6:00 PM'],
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
                <p className="text-primary-foreground/90 text-lg md:text-xl">
                  Get in touch with our logistics experts for personalized solutions
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg border">
                  <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we'll respond within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Email *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Phone</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+974 XXXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Company</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your logistics needs..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
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
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Our team is ready to assist you with all your logistics needs.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-5 border shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          {item.lines.map((line, i) => (
                            <p key={i} className="text-sm text-muted-foreground">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="bg-muted rounded-xl h-[250px] flex items-center justify-center border">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-10 h-10 mx-auto mb-2 opacity-50" />
                    <p>Doha, Qatar</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;