
import React from 'react';
import { 
  ShieldCheck, 
  Database, 
  Lock, 
  Server, 
  Network, 
  CreditCard, 
  Users, 
  Cloud, 
  Clock,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import NavBar from '@/components/NavBar';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import SecurityFeature from '@/components/SecurityFeature';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-accent to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4 animate-fade-in">
                PCI DSS Compliant Architecture
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight animate-slide-up" style={{animationDelay: '100ms'}}>
                Secure Cloud Architecture for Payment Processing
              </h1>
              
              <p className="text-lg text-muted-foreground md:text-xl md:max-w-xl animate-slide-up" style={{animationDelay: '200ms'}}>
                A robust AWS-based solution for multi-tenant applications that minimizes PCI scope while maintaining security and scalability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-slide-up" style={{animationDelay: '300ms'}}>
                <Button asChild size="lg">
                  <a href="#architecture">
                    Explore Architecture <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/implementation">Implementation Plan</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-md mx-auto md:max-w-none animate-zoom-in">
              <div className="p-1 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl">
                <div className="glass-panel rounded-xl overflow-hidden shadow-xl">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <ShieldCheck className="h-8 w-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">PCI Compliance Highlights</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold">✓</span>
                        </div>
                        <span className="text-sm">Clear PCI DSS compliance boundaries</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold">✓</span>
                        </div>
                        <span className="text-sm">End-to-end encryption for sensitive data</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold">✓</span>
                        </div>
                        <span className="text-sm">Network segmentation with security groups</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold">✓</span>
                        </div>
                        <span className="text-sm">MFA for all administrative access</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold">✓</span>
                        </div>
                        <span className="text-sm">Comprehensive audit logging and monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Architecture Overview Section */}
      <section id="architecture" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Architecture Overview</h2>
            <p className="text-muted-foreground md:text-lg max-w-3xl">
              A comprehensive design that balances security, compliance, and scalability for your multi-tenant payment processing application.
            </p>
          </div>
          
          <div className="mb-16">
            <ArchitectureDiagram />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SecurityFeature
              icon={Network}
              title="Network Layout"
              description="Segmented VPC with public and private subnets, strict security groups, and controlled traffic flow to minimize attack surface."
              className="animate-fade-in"
              style={{animationDelay: '100ms'}}
            />
            
            <SecurityFeature
              icon={Server}
              title="Serverless Architecture"
              description="Leverages AWS Lambda, API Gateway, and DynamoDB to reduce management overhead and improve scalability."
              className="animate-fade-in"
              style={{animationDelay: '200ms'}}
            />
            
            <SecurityFeature
              icon={CreditCard}
              title="Payment Processing"
              description="Isolated payment services using tokenization with third-party processors to minimize PCI DSS scope."
              className="animate-fade-in"
              style={{animationDelay: '300ms'}}
            />
            
            <SecurityFeature
              icon={Database}
              title="Data Storage"
              description="Encrypted databases with separate storage for sensitive and non-sensitive data, using KMS for key management."
              className="animate-fade-in"
              style={{animationDelay: '400ms'}}
            />
            
            <SecurityFeature
              icon={Lock}
              title="Security Controls"
              description="WAF, GuardDuty, and Security Hub integration for continuous monitoring and threat detection."
              className="animate-fade-in"
              style={{animationDelay: '500ms'}}
            />
            
            <SecurityFeature
              icon={Users}
              title="Multi-Tenant Support"
              description="Tenant isolation at multiple levels including data, computing resources, and APIs for secure customer separation."
              className="animate-fade-in"
              style={{animationDelay: '600ms'}}
            />
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Key Security Features</h2>
              <p className="text-muted-foreground">
                Our architecture implements robust security controls at every layer to ensure compliance with PCI DSS requirements while enabling business functionality.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-md font-medium">Clear Compliance Boundaries</h3>
                    <p className="text-sm text-muted-foreground">Explicit network segmentation that clearly defines and isolates PCI DSS scoped components.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-md font-medium">End-to-End Encryption</h3>
                    <p className="text-sm text-muted-foreground">All sensitive data is encrypted both in transit (TLS 1.2+) and at rest (AES-256) using AWS KMS.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-md font-medium">Comprehensive Logging & Monitoring</h3>
                    <p className="text-sm text-muted-foreground">AWS CloudTrail, CloudWatch, and Security Hub provide detailed audit trails and real-time monitoring.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-md font-medium">Multi-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">MFA required for all administrative access to both AWS console and application admin interfaces.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-md font-medium">Least Privilege Access</h3>
                    <p className="text-sm text-muted-foreground">IAM roles and policies follow least privilege principles with regular access reviews.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button asChild>
                  <Link to="/security">View Full Security Details</Link>
                </Button>
              </div>
            </div>
            
            <div className="glass-panel rounded-xl p-6 md:p-8 shadow-lg border border-border/50">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <h3 className="text-xl font-semibold">AWS Services Used</h3>
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center p-3 rounded-lg bg-background">
                    <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <Network className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">VPC & Subnets</span>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-background">
                    <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <Server className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">Lambda</span>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-background">
                    <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <Database className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">RDS & DynamoDB</span>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-background">
                    <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <Lock className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">KMS & Secrets</span>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-background">
                    <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">WAF & Shield</span>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-background">
                    <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">CloudWatch</span>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">PCI DSS Compliance Features</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our architecture addresses all 12 PCI DSS requirements with special attention to:
                  </p>
                  
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <span>Requirement 1: Install and maintain a firewall configuration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <span>Requirement 3: Protect stored cardholder data</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <span>Requirement 4: Encrypt transmission of cardholder data</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <span>Requirement 6: Develop and maintain secure systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <span>Requirement 10: Track and monitor access to network resources</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Ready to Implement This Architecture?</h2>
              <p className="text-muted-foreground md:text-lg">
                Our detailed implementation plan breaks down the steps needed to build this secure payment processing platform.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link to="/implementation">View Implementation Plan</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/security">Security Details</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex-1 glass-panel rounded-xl overflow-hidden shadow-lg border border-border/50">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Implementation Overview</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Foundation Phase</h4>
                      <p className="text-sm text-muted-foreground">VPC setup, network configuration, security foundations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Core Services Phase</h4>
                      <p className="text-sm text-muted-foreground">Building application services, databases, and APIs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Payment Integration Phase</h4>
                      <p className="text-sm text-muted-foreground">Payment processor integration with tokenization</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Security Hardening Phase</h4>
                      <p className="text-sm text-muted-foreground">WAF rules, monitoring, and final security controls</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Testing & Compliance Phase</h4>
                      <p className="text-sm text-muted-foreground">Testing, validation, and PCI DSS assessment</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2 text-primary">
              <ShieldCheck className="h-6 w-6" />
              <span className="font-bold text-lg">SecureCloud Architect</span>
            </div>
            
            <div className="flex space-x-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/implementation" className="text-muted-foreground hover:text-foreground transition-colors">
                Implementation
              </Link>
              <Link to="/security" className="text-muted-foreground hover:text-foreground transition-colors">
                Security
              </Link>
            </div>
            
            <div className="text-sm text-muted-foreground">
              &copy; 2023 SecureCloud Architect. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
