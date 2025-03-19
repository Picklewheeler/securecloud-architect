
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Server, CheckCircle } from 'lucide-react';
import PaymentModal from '@/components/payment/PaymentModal';
import AnimatedSection from '@/components/AnimatedSection';
import { Helmet } from 'react-helmet-async';

const pricingOptions = [
  {
    title: 'Basic Architecture',
    price: 49900,
    description: 'Essential PCI compliance architecture for startups',
    features: [
      'Basic PCI DSS compliant design',
      'AWS infrastructure templates',
      'Basic security controls',
      'Email support',
      '30-day updates'
    ],
    recommended: false
  },
  {
    title: 'Professional',
    price: 99900,
    description: 'Complete solution for growing businesses',
    features: [
      'Advanced PCI DSS architecture',
      'Full AWS CloudFormation templates',
      'Enhanced security controls',
      'Implementation guidance',
      'Priority email support',
      '6 months of updates'
    ],
    recommended: true
  },
  {
    title: 'Enterprise',
    price: 199900,
    description: 'Custom solution for large organizations',
    features: [
      'Custom PCI DSS architecture',
      'Complete IaC deployment scripts',
      'Advanced security & compliance',
      'Implementation assistance',
      'Priority support',
      '12 months of updates',
      'Compliance documentation'
    ],
    recommended: false
  }
];

const Purchase = () => {
  const [selectedPlan, setSelectedPlan] = useState<typeof pricingOptions[0] | null>(null);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const handlePaymentSuccess = (paymentIntent: any) => {
    console.log('Payment successful:', paymentIntent);
    setPaymentModalOpen(false);
    // In a real app, you would redirect to a success page or show a success message
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Purchase SecureCloud Architecture | PCI DSS Compliant Solutions</title>
        <meta 
          name="description" 
          content="Purchase our PCI DSS compliant cloud architecture solutions for secure payment processing. Choose from Basic, Professional, or Enterprise plans."
        />
        <meta name="keywords" content="PCI DSS, AWS architecture, secure payment processing, cloud security" />
        <link rel="canonical" href="https://yourdomain.com/purchase" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Purchase SecureCloud Architecture | PCI DSS Compliant Solutions" />
        <meta property="og:description" content="Purchase our PCI DSS compliant cloud architecture solutions for secure payment processing." />
        <meta property="og:url" content="https://yourdomain.com/purchase" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Structured Data for Product */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "PCI DSS Compliant Architecture",
            "description": "Secure cloud architecture for payment processing with PCI DSS compliance",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "499.00",
              "highPrice": "1999.00",
              "priceCurrency": "USD",
              "offerCount": "3"
            }
          }
        `}</script>
      </Helmet>

      <NavBar />
      
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-accent to-background">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Choose Your Architecture Package
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Select the perfect PCI DSS compliant architecture solution for your business needs
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingOptions.map((plan, index) => (
              <AnimatedSection key={plan.title} animation="fade-up" delay={index * 150} className="h-full">
                <Card className={cn(
                  "h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                  plan.recommended && "border-primary/50 shadow-md"
                )}>
                  {plan.recommended && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                      Recommended
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">${(plan.price / 100).toFixed(2)}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      variant={plan.recommended ? "default" : "outline"}
                      onClick={() => {
                        setSelectedPlan(plan);
                        setPaymentModalOpen(true);
                      }}
                    >
                      Select Plan
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="fade-up" delay={300} className="mt-16 text-center">
            <div className="bg-muted rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">All Plans Include</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start">
                  <Server className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-sm">AWS architecture diagrams</span>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-sm">PCI DSS compliance guidance</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-sm">Implementation documentation</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {selectedPlan && (
        <PaymentModal
          open={paymentModalOpen}
          onOpenChange={setPaymentModalOpen}
          amount={selectedPlan.price}
          productName={selectedPlan.title}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default Purchase;

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
