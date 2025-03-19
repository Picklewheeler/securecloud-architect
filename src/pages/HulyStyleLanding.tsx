
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Star, Menu, X, Check, ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '@/components/AnimatedSection';

const HulyStyleLanding = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      <Helmet>
        <title>SecureFlow - All-in-one Cloud Security Platform</title>
        <meta 
          name="description" 
          content="SecureFlow - The complete platform for cloud security, compliance, and infrastructure management"
        />
      </Helmet>

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 border-b border-slate-800/60 backdrop-blur-md bg-slate-900/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 6V12C4 15.31 7.58 18.8 12 20C16.42 18.8 20 15.31 20 12V6L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold">SecureFlow</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/purchase" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</Link>
            <Link to="/implementation" className="text-sm text-slate-300 hover:text-white transition-colors">Implementation</Link>
            <Link to="/security" className="text-sm text-slate-300 hover:text-white transition-colors">Security</Link>
            <div className="relative group">
              <button className="text-sm text-slate-300 hover:text-white transition-colors flex items-center">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg py-1 bg-slate-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="#" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700">Documentation</Link>
                <Link to="#" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700">Tutorials</Link>
                <Link to="#" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700">API Reference</Link>
              </div>
            </div>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="#" className="hidden md:flex items-center text-sm text-slate-300 hover:text-white transition-colors">
              <Github className="mr-1 h-4 w-4" />
              <span>Star Us</span>
            </Link>
            <Button variant="outline" className="hidden md:flex border-slate-700 hover:bg-slate-800 hover:text-white text-slate-300">Sign In</Button>
            <Button className="gradient-button text-white">
              <span className="relative z-10">Get Started</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient overflow-hidden">
        <div className="hero-glow"></div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <AnimatedSection animation="fade-up" className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Everything App<br />
              <span className="text-blue-400 text-glow">for your security</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 max-w-xl">
              SecureFlow, an open-source platform, serves as an all-in-one replacement for traditional security tools, with built-in PCI DSS compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="gradient-button text-white px-8 py-6">
                <span className="relative z-10 flex items-center">
                  Try it free <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Button>
              <Button variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300 px-8 py-6">
                View Demo
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="md:w-1/2 relative">
            <div className="app-screenshot">
              <img 
                src="/placeholder.svg" 
                alt="SecureFlow Dashboard" 
                className="w-full rounded-lg shadow-xl"
              />
              
              <div className="absolute -bottom-5 -right-5 bg-slate-800 rounded-lg p-3 shadow-lg border border-slate-700">
                <div className="flex items-center space-x-2 text-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-slate-300">PCI DSS Compliant</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              All-in-one Cloud Security Platform
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Streamline your security operations with our comprehensive platform designed for modern cloud architectures.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "PCI DSS Compliance",
                description: "Automated compliance checks and documentation for PCI DSS requirements.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 6V12C4 15.31 7.58 18.8 12 20C16.42 18.8 20 15.31 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              },
              {
                title: "Cloud Infrastructure",
                description: "Secure cloud architecture with automated deployment and management.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 6L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              },
              {
                title: "Security Monitoring",
                description: "Real-time threat detection and incident response capabilities.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 22H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="3" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-slate-800/30 relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center">
          <div className="w-1/2 h-full bg-blue-500/5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Security that works the way you do
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our platform adapts to your workflow, making security implementation effortless.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" className="app-screenshot mx-auto max-w-5xl">
            <div className="bg-slate-900 rounded-t-lg border-b border-slate-700 p-3 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-sm text-slate-400">SecureFlow Dashboard</div>
            </div>
            <div className="bg-slate-900 p-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 bg-slate-800 rounded-lg p-3">
                  <div className="mb-4">
                    <div className="h-6 w-24 bg-slate-700 rounded mb-2"></div>
                    <div className="h-4 w-full bg-slate-700 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex items-center p-2 rounded bg-slate-700/50">
                        <div className="w-4 h-4 rounded-full bg-blue-500/50 mr-2"></div>
                        <div className="h-3 bg-slate-600 rounded w-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-9 bg-slate-800 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-700 h-24 rounded-lg"></div>
                    <div className="bg-slate-700 h-24 rounded-lg"></div>
                  </div>
                  <div className="bg-slate-700 h-64 rounded-lg"></div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to secure your cloud infrastructure?
            </h2>
            <p className="text-slate-400 mb-8">
              Get started with SecureFlow today and experience the future of cloud security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="gradient-button text-white px-8 py-6">
                <span className="relative z-10">Get Started Now</span>
              </Button>
              <Button variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300 px-8 py-6">
                Contact Sales
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 6V12C4 15.31 7.58 18.8 12 20C16.42 18.8 20 15.31 20 12V6L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-lg font-bold">SecureFlow</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                The complete platform for cloud security, compliance, and infrastructure management.
              </p>
              <div className="flex space-x-3">
                <Link to="#" className="text-slate-400 hover:text-white">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.48A10.019 10.019 0 0 0 22 12c0-5.523-4.477-10-10-10z"></path></svg>
                </Link>
                <Link to="#" className="text-slate-400 hover:text-white">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg>
                </Link>
                <Link to="#" className="text-slate-400 hover:text-white">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">Features</Link></li>
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">Compliance</Link></li>
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">Security</Link></li>
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">Implementation</Link></li>
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">Documentation</Link></li>
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">Guides</Link></li>
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">API Reference</Link></li>
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">Community</Link></li>
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">About Us</Link></li>
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">Careers</Link></li>
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">Contact</Link></li>
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">Privacy</Link></li>
                <li><Link to="#" className="text-slate-400 hover:text-white text-sm">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} SecureFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HulyStyleLanding;
