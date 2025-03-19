
import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Database, 
  CheckCircle2, 
  AlertTriangle,
  ChevronLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import NavBar from '@/components/NavBar';
import SecurityRating from '@/components/SecurityRating';

const Security = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-accent to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4 animate-fade-in">
              Security & Compliance
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 animate-slide-up" style={{animationDelay: '100ms'}}>
              Comprehensive Security Controls for PCI DSS Compliance
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl animate-slide-up" style={{animationDelay: '200ms'}}>
              A detailed breakdown of the security measures implemented to protect cardholder data and maintain PCI DSS compliance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Security Overview Tabs */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="network" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="network" className="px-4 py-2">Network Security</TabsTrigger>
                <TabsTrigger value="data" className="px-4 py-2">Data Protection</TabsTrigger>
                <TabsTrigger value="access" className="px-4 py-2">Access Controls</TabsTrigger>
                <TabsTrigger value="monitoring" className="px-4 py-2">Monitoring</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="network" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-panel rounded-xl p-6 md:p-8 border border-border/50">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Network Security Architecture</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">VPC Configuration</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        The architecture uses a dedicated VPC with strict segmentation:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Public subnets for internet-facing load balancers only</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Private subnets for application components</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Dedicated isolated subnets for payment processing components</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Private subnet for encrypted database instances</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Security Groups</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Granular security groups control traffic flow:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Web tier: Allows HTTP/HTTPS from ALB only</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>App tier: Accepts connections from web tier only</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Payment tier: Highly restricted with specific port access</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Database: Only accessible from application and payment tiers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="glass-panel rounded-xl p-6 md:p-8 border border-border/50">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <Lock className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Defense in Depth Strategy</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">AWS WAF Configuration</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Web Application Firewall protects public-facing endpoints:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>OWASP Top 10 protection rule sets</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Rate limiting to prevent brute force attacks</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Geo-blocking for high-risk regions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Custom rules for payment-specific attack patterns</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">DDoS Protection</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Multi-layered DDoS mitigation:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>AWS Shield Standard enabled by default</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>CloudFront for edge caching and traffic distribution</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Auto-scaling to handle traffic surges</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>AWS Shield Advanced as an option for critical workloads</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-900">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-amber-800 dark:text-amber-300">Security Consideration</h4>
                        <p className="text-sm text-amber-700 dark:text-amber-400">
                          For maximum network protection, consider adding AWS Network Firewall between public and private subnets for deep packet inspection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 flex flex-col md:flex-row gap-6">
                  <SecurityRating 
                    score={9}
                    label="Network Security Rating"
                    color="green"
                    className="flex-1"
                  />
                  
                  <div className="flex-[2] glass-panel rounded-xl p-6 md:p-8 border border-border/50">
                    <h3 className="text-xl font-semibold mb-4">PCI DSS Compliance for Network Security</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      This architecture directly addresses these PCI DSS requirements:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 1</h4>
                        <p className="text-xs text-muted-foreground">
                          Install and maintain a firewall configuration to protect cardholder data
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 2</h4>
                        <p className="text-xs text-muted-foreground">
                          Do not use vendor-supplied defaults for system passwords and security parameters
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 4</h4>
                        <p className="text-xs text-muted-foreground">
                          Encrypt transmission of cardholder data across open, public networks
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 11</h4>
                        <p className="text-xs text-muted-foreground">
                          Regularly test security systems and processes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="data" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-panel rounded-xl p-6 md:p-8 border border-border/50">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <Database className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Sensitive Data Management</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Data Classification</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Clear separation of data based on sensitivity:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Cardholder data (CHD): Highest protection level</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Sensitive authentication data: Never stored</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Customer data: Separate database with access controls</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Product data: Lowest sensitivity, separate storage</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Tokenization Strategy</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Replacing sensitive data with non-sensitive equivalents:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Payment card data tokenized immediately upon receipt</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Token vault managed by PCI-compliant third party</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Format-preserving tokens for compatibility</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Only tokens stored in application databases</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="glass-panel rounded-xl p-6 md:p-8 border border-border/50">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <Lock className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Encryption Implementation</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Encryption at Rest</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Comprehensive data encryption strategy:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>AWS KMS for key management with automatic rotation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>RDS with encryption enabled using AES-256</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>S3 bucket encryption for stored files</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>DynamoDB encryption for non-sensitive data</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Encryption in Transit</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Securing data during transmission:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>TLS 1.2+ for all external communications</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>TLS for internal service communications</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>API Gateway with TLS enforcement</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Certificate management through AWS Certificate Manager</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-900">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-amber-800 dark:text-amber-300">Security Consideration</h4>
                        <p className="text-sm text-amber-700 dark:text-amber-400">
                          For fields requiring limited exposure, consider implementing application-level encryption with separate key management for fields like customer PII.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 flex flex-col md:flex-row gap-6">
                  <SecurityRating 
                    score={10}
                    label="Data Protection Rating"
                    color="green"
                    className="flex-1"
                  />
                  
                  <div className="flex-[2] glass-panel rounded-xl p-6 md:p-8 border border-border/50">
                    <h3 className="text-xl font-semibold mb-4">PCI DSS Compliance for Data Protection</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      This architecture directly addresses these PCI DSS requirements:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 3</h4>
                        <p className="text-xs text-muted-foreground">
                          Protect stored cardholder data
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 4</h4>
                        <p className="text-xs text-muted-foreground">
                          Encrypt transmission of cardholder data across open, public networks
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 6</h4>
                        <p className="text-xs text-muted-foreground">
                          Develop and maintain secure systems and applications
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 7</h4>
                        <p className="text-xs text-muted-foreground">
                          Restrict access to cardholder data by business need to know
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="access" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-panel rounded-xl p-6 md:p-8 border border-border/50">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <Eye className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Identity & Access Management</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">IAM Policy Structure</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Principle of least privilege implementation:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Role-based access control (RBAC) for all users</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Service roles with minimal required permissions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Permission boundaries for all IAM entities</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Regular access reviews and permission pruning</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Authentication Controls</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Strong identity verification measures:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>MFA required for all privileged access</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Strong password policies with complexity requirements</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Temporary credentials for programmatic access</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>API key rotation policies and enforcement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="glass-panel rounded-xl p-6 md:p-8 border border-border/50">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <Lock className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Tenant Isolation & Access</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Multi-Tenant Architecture</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Secure separation of customer environments:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Data isolation through tenant-specific encryption keys</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Tenant identifier in all database queries</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Role-based access with tenant context</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>API Gateway with request validation for tenant access</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Administrative Access</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Controlled access for management functions:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Just-in-time access for elevated privileges</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Session recording for administrative actions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Break-glass procedures for emergency access</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Approval workflows for sensitive operations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-900">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-amber-800 dark:text-amber-300">Security Consideration</h4>
                        <p className="text-sm text-amber-700 dark:text-amber-400">
                          Consider implementing AWS Organizations with Service Control Policies (SCPs) to enforce organization-wide guardrails for payment environments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 flex flex-col md:flex-row gap-6">
                  <SecurityRating 
                    score={9}
                    label="Access Control Rating"
                    color="green"
                    className="flex-1"
                  />
                  
                  <div className="flex-[2] glass-panel rounded-xl p-6 md:p-8 border border-border/50">
                    <h3 className="text-xl font-semibold mb-4">PCI DSS Compliance for Access Controls</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      This architecture directly addresses these PCI DSS requirements:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 7</h4>
                        <p className="text-xs text-muted-foreground">
                          Restrict access to cardholder data by business need to know
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 8</h4>
                        <p className="text-xs text-muted-foreground">
                          Identify and authenticate access to system components
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 9</h4>
                        <p className="text-xs text-muted-foreground">
                          Restrict physical access to cardholder data
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 12</h4>
                        <p className="text-xs text-muted-foreground">
                          Maintain a policy that addresses information security for all personnel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="monitoring" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-panel rounded-xl p-6 md:p-8 border border-border/50">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <Eye className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Logging & Monitoring</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Comprehensive Logging</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Detailed activity records across all components:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>CloudTrail for all AWS API interactions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>VPC Flow Logs for network traffic analysis</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Application logs with structured format</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Database query and modification logging</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Real-Time Monitoring</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Active detection of security incidents:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>CloudWatch Alarms for suspicious activity</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>GuardDuty for threat detection</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>AWS Config for compliance monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Security Hub for centralized visibility</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="glass-panel rounded-xl p-6 md:p-8 border border-border/50">
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <Lock className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">Incident Response</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Automated Responses</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Proactive security controls:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>EventBridge rules for automated remediation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Lambda functions for security responses</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Auto-scaling responses to DoS conditions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>SNS notifications for critical alerts</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Response Procedures</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Structured approach to security incidents:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Documented incident response playbooks</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Regular security incident drills</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Post-incident analysis process</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span>Evidence collection and preservation procedures</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-900">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-amber-800 dark:text-amber-300">Security Consideration</h4>
                        <p className="text-sm text-amber-700 dark:text-amber-400">
                          Consider adding Amazon Detective or a SIEM solution for advanced correlation of security events and deeper forensic capabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 flex flex-col md:flex-row gap-6">
                  <SecurityRating 
                    score={9}
                    label="Monitoring Rating"
                    color="green"
                    className="flex-1"
                  />
                  
                  <div className="flex-[2] glass-panel rounded-xl p-6 md:p-8 border border-border/50">
                    <h3 className="text-xl font-semibold mb-4">PCI DSS Compliance for Monitoring</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      This architecture directly addresses these PCI DSS requirements:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 10</h4>
                        <p className="text-xs text-muted-foreground">
                          Track and monitor all access to network resources and cardholder data
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 11</h4>
                        <p className="text-xs text-muted-foreground">
                          Regularly test security systems and processes
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 12</h4>
                        <p className="text-xs text-muted-foreground">
                          Maintain a policy that addresses information security for all personnel
                        </p>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Requirement 6</h4>
                        <p className="text-xs text-muted-foreground">
                          Develop and maintain secure systems and applications
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Overall Security Rating */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Overall Security Assessment</h2>
            <p className="text-muted-foreground md:text-lg">
              Comprehensive evaluation of the architecture's security posture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <SecurityRating 
              score={9}
              label="Network Security"
              color="green"
            />
            
            <SecurityRating 
              score={10}
              label="Data Protection"
              color="green"
            />
            
            <SecurityRating 
              score={9}
              label="Access Controls"
              color="green"
            />
            
            <SecurityRating 
              score={9}
              label="Monitoring"
              color="green"
            />
          </div>
          
          <div className="mt-12 p-6 md:p-8 glass-panel rounded-xl border border-border/50">
            <h3 className="text-xl font-semibold mb-4">Security Summary</h3>
            <p className="text-muted-foreground mb-6">
              This architecture provides a robust foundation for PCI DSS compliance with a comprehensive approach to security:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Clear Compliance Boundaries</h4>
                    <p className="text-sm text-muted-foreground">
                      The architecture establishes distinct PCI DSS boundaries with proper segmentation to limit the scope of compliance requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Defense in Depth</h4>
                    <p className="text-sm text-muted-foreground">
                      Multiple layers of security controls ensure that no single point of failure can compromise the entire system.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Automated Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Extensive use of automation for security monitoring, response, and compliance verification reduces human error risks.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Comprehensive Data Protection</h4>
                    <p className="text-sm text-muted-foreground">
                      Strong encryption, tokenization, and data isolation strategies protect sensitive information throughout its lifecycle.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Scalable Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Security controls are designed to scale with the application, maintaining effectiveness as the user base grows.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Continuous Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      Built-in monitoring and automated controls ensure ongoing compliance with PCI DSS requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="space-y-4">
              <h4 className="font-medium">Areas for Potential Enhancement</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">
                    Consider adding AWS Network Firewall for deeper network traffic inspection
                  </span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">
                    Evaluate additional SIEM solutions for more advanced security analytics
                  </span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">
                    Consider implementing AWS Organizations with SCPs for organizational guardrails
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link to="/implementation">
                <ChevronLeft className="mr-2 h-4 w-4" />
                View Implementation Plan
              </Link>
            </Button>
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

export default Security;
