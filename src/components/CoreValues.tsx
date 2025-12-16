import { Shield, Award, Handshake, Clock } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: Shield,
      title: 'Strive for excellence',
      description: 'We are a true client-centric company, so we strive for the best possible solutions for our clients.',
    },
    {
      icon: Award,
      title: 'Accept, learn & educate from best industry practices',
      description: 'Continuous improvement through industry-leading practices and knowledge sharing.',
    },
    {
      icon: Handshake,
      title: 'Open & honest relationship with customers',
      description: 'Building trust through transparency and genuine partnerships.',
    },
    {
      icon: Clock,
      title: 'Continuous Innovation',
      description: 'Embracing new technologies and methods to improve our services constantly.',
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="font-body text-accent font-semibold tracking-wider mb-2">CORE VALUES SEGMENT</p>
          <p className="font-body text-muted-foreground max-w-3xl mx-auto">
            We are a true client-centric company so we strive with the client's business instead of just selling logistics/freight forwarding services. We invest in innovation to stay ahead of the challenges facing the shipping industry and are backed by strong financial stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-accent/20" />
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center">
                    <Icon className="w-12 h-12 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-primary mb-3">{value.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
