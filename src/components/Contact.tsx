import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Globe } from 'lucide-react'; // Added Globe
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// Using about-bg.webp directly as background (no white overlay)
import bgImage from '/about-bg.webp';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      lines: [
        'International: +974 558 558 36, 446 79 444, 446 79 400'
      ],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@oneglobalqatar.com'],
    },
    {
      icon: Globe, // Changed from Website to Globe
      title: 'Website',
      lines: ['www.oneglobalqatar.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      lines: ['Sunday - Thursday', '8:00 AM - 5:00 PM'],
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden min-h-[600px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/about-bg.jpg";
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 drop-shadow-md">
            CONTACT US
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto drop-shadow-md">
            Get in touch with our team for inquiries, quotes, or any questions
            about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-white/90 p-8 rounded-xl shadow-md backdrop-blur-sm animate-slide-in-left">
            <h3 className="font-heading text-xl font-bold text-primary mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="font-body"
              />

              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="font-body"
              />

              <Input
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="font-body"
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="font-body resize-none"
              />

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-red-hover text-accent-foreground font-body font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <h3 className="font-heading text-xl font-bold text-primary mb-6 drop-shadow-md">
              Our Office
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;

                return (
                  <div key={index} className="flex gap-4 bg-white/80 p-4 rounded-xl backdrop-blur-sm shadow-sm">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-primary mb-1">
                        {info.title}
                      </h4>
                      {info.lines.map((line, idx) => (
                        <p
                          key={idx}
                          className="font-body text-muted-foreground text-sm"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
