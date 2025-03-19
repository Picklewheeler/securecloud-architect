
import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  CheckSquare, 
  AlertTriangle, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import NavBar from '@/components/NavBar';
import ImplementationPhase from '@/components/ImplementationPhase';

const Implementation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-accent to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4 animate-fade-in">
              Implementation Plan
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 animate-slide-up" style={{animationDelay: '100ms'}}>
              Phased Approach to Building Your Secure Payment Platform
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl animate-slide-up" style={{animationDelay: '200ms'}}>
              A detailed roadmap for implementing the PCI-compliant architecture with clear milestones and security-focused steps.
            </p>
          </div>
        </div>
      </section>
      
      {/* Implementation Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Implementation Timeline</h2>
            <p className="text-muted-foreground md:text-lg">
              A structured, phased approach to building your PCI-compliant AWS architecture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ImplementationPhase
              phase={1}
              title="Foundation Phase"
              timeline="Weeks 1-2"
              description="Establish the core infrastructure and network configuration."
              tasks={[
                "Create AWS accounts with proper separation",
                "Set up VPC with public/private subnets",
                "Configure security groups and NACLs",
                "Implement IAM roles and policies",
                "Set up baseline CloudTrail and CloudWatch"
              ]}
              isActive={true}
            />
            
            <ImplementationPhase
              phase={2}
              title="Core Services Phase"
              timeline="Weeks 3-5"
              description="Build the application components and database architecture."
              tasks={[
                "Deploy application load balancers",
                "Set up API Gateway and Lambda functions",
                "Configure RDS with encryption",
                "Implement DynamoDB for non-sensitive data",
                "Set up S3 buckets with proper policies"
              ]}
            />
            
            <ImplementationPhase
              phase={3}
              title="Payment Integration Phase"
              timeline="Weeks 6-7"
              description="Implement secure payment processing functionality."
              tasks={[
                "Integrate third-party payment processor",
                "Implement tokenization service",
                "Configure payment service Lambda functions",
                "Set up encryption for cardholder data",
                "Implement dedicated security groups"
              ]}
            />
            
            <ImplementationPhase
              phase={4}
              title="Multi-Tenant Configuration"
              timeline="Weeks 8-9"
              description="Implement tenant isolation and customization features."
              tasks={[
                "Set up tenant identification and routing",
                "Configure tenant-specific data isolation",
                "Implement branding and customization features",
                "Create tenant management interfaces",
                "Test tenant separation controls"
              ]}
            />
            
            <ImplementationPhase
              phase={5}
              title="Security Hardening Phase"
              timeline="Weeks 10-11"
              description="Enhance security controls and monitoring capabilities."
              tasks={[
                "Implement AWS WAF with rule sets",
                "Configure GuardDuty and Security Hub",
                "Set up automated security response",
                "Implement MFA for all access points",
                "Configure network flow logs and analysis"
              ]}
            />
            
            <ImplementationPhase
              phase={6}
              title="Testing & Compliance Phase"
              timeline="Weeks 12-14"
              description="Validate the implementation against requirements."
              tasks={[
                "Conduct penetration testing",
                "Perform security vulnerability assessment",
                "Validate PCI DSS requirements coverage",
                "Run disaster recovery tests",
                "Prepare documentation for compliance audit"
              ]}
            />
          </div>
          
          <div className="mt-16 bg-muted rounded-xl p-6 md:p-8 border border-border">
            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Implementation Considerations</h3>
                <p className="text-muted-foreground mb-4">
                  Key factors to consider during the implementation process:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckSquare className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      Each phase should include thorough testing before moving to the next
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      Security reviews should be conducted at the end of each phase
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      Cost optimization should be considered throughout implementation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      Documentation should be continuously updated as the architecture evolves
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      Consider using Infrastructure as Code (IaC) with AWS CloudFormation or Terraform
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Specific Security Steps Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Security and Compliance Steps</h2>
            <p className="text-muted-foreground md:text-lg">
              Critical security measures to implement during each phase.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Network Security</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">VPC Configuration</h4>
                    <p className="text-sm text-muted-foreground">
                      Create isolated VPCs with no public internet access for PCI components. Use VPC endpoints for AWS services.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Security Groups</h4>
                    <p className="text-sm text-muted-foreground">
                      Implement strict security groups with minimal allowed ports and specific source/destination rules.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">WAF Rules</h4>
                    <p className="text-sm text-muted-foreground">
                      Configure AWS WAF with OWASP Top 10 protections and custom rules for payment-specific patterns.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Network Monitoring</h4>
                    <p className="text-sm text-muted-foreground">
                      Implement VPC Flow Logs, CloudWatch, and GuardDuty for continuous network traffic analysis.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-panel rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Data Protection</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Encryption Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Implement end-to-end encryption using AWS KMS with custom key policies and automated key rotation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Tokenization</h4>
                    <p className="text-sm text-muted-foreground">
                      Replace sensitive payment data with tokens using a third-party tokenization service or AWS Payment Cryptography.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Secrets Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Use AWS Secrets Manager for API keys, credentials, and connection strings with automatic rotation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Database Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Enable RDS encryption, implement column-level encryption for sensitive fields, and use IAM authentication.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-panel rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Access Controls</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">IAM Configuration</h4>
                    <p className="text-sm text-muted-foreground">
                      Implement least privilege principles with role-based access and specific permission boundaries.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">MFA Implementation</h4>
                    <p className="text-sm text-muted-foreground">
                      Require MFA for all administrative access to AWS console, application admin interfaces, and API access.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Service Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      Use IAM roles for service-to-service communication with temporary credentials and limited scope.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Access Reviews</h4>
                    <p className="text-sm text-muted-foreground">
                      Implement automated access reviews using AWS IAM Access Analyzer and regular permission audits.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-panel rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Monitoring & Auditing</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Logging Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Centralize logs in CloudWatch Logs with retention policies aligned with PCI DSS requirements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Automated Alerts</h4>
                    <p className="text-sm text-muted-foreground">
                      Set up CloudWatch Alarms for suspicious activity, anomalous behaviors, and compliance violations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Security Dashboards</h4>
                    <p className="text-sm text-muted-foreground">
                      Create Security Hub dashboards for compliance status and security findings visualization.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Penetration Testing</h4>
                    <p className="text-sm text-muted-foreground">
                      Schedule regular penetration testing with AWS approval and address findings promptly.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testing Strategy Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Testing Approach</h2>
            <p className="text-muted-foreground md:text-lg">
              Comprehensive testing strategies to validate security, compliance, and functionality.
            </p>
          </div>
          
          <div className="glass-panel rounded-xl p-6 md:p-8 border border-border/50 mb-8">
            <h3 className="text-xl font-semibold mb-6">Testing Framework</h3>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Unit Testing</h4>
                    <p className="text-sm text-muted-foreground">Individual component functionality tests</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Integration Testing</h4>
                    <p className="text-sm text-muted-foreground">Cross-component communication validation</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Security Testing</h4>
                    <p className="text-sm text-muted-foreground">Vulnerability scans and penetration tests</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Performance Testing</h4>
                    <p className="text-sm text-muted-foreground">Load and stress testing for scalability</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3">
                    <span className="font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Compliance Testing</h4>
                    <p className="text-sm text-muted-foreground">PCI DSS requirements validation</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-3">
                    <span className="font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Disaster Recovery</h4>
                    <p className="text-sm text-muted-foreground">Failover and recovery procedure testing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="space-y-4">
              <h4 className="font-medium">Security Testing Specifics</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm">
                    Automated security scanning with AWS Inspector and third-party tools
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm">
                    Manual penetration testing by certified security professionals
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm">
                    Regular security code reviews and static analysis
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm">
                    Simulated attack exercises and response drills
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm">
                    Data leakage testing and third-party API security validation
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-xl p-6 md:p-8 border border-border">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                <CheckSquare className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Final Validation Checklist</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Technical Validation</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm">All security groups properly configured</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm">Encryption verified for all data at rest and in transit</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm">WAF rules tested and verified</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm">All access controls and permissions validated</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm">CloudTrail and CloudWatch alerts functioning</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Compliance Validation</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm">PCI DSS requirements mapping completed</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm">Documentation prepared for QSA review</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm">Security policies and procedures documented</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm">Third-party integrations assessed for compliance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm">Incident response plan tested and validated</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation Section */}
      <section className="py-12 md:py-16 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Button variant="outline" size="lg" className="w-full md:w-auto" asChild>
              <Link to="/">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Architecture
              </Link>
            </Button>
            
            <Button size="lg" className="w-full md:w-auto" asChild>
              <Link to="/security">
                View Security Details
                <ChevronRight className="ml-2 h-4 w-4" />
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

export default Implementation;
