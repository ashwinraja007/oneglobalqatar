import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceBreadcrumbProps {
  serviceName: string;
}

const ServiceBreadcrumb = ({ serviceName }: ServiceBreadcrumbProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-muted/50 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <nav className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-primary font-medium">{serviceName}</span>
        </nav>
        <Button 
          onClick={() => navigate('/contact')}
          size="sm"
          className="bg-accent hover:bg-accent/90 text-white"
        >
          Get a Quote
        </Button>
      </div>
    </div>
  );
};

export default ServiceBreadcrumb;