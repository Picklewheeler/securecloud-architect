
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShieldCheck, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/50 border-b border-border">
      <nav className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-primary">
          <ShieldCheck className="h-6 w-6" />
          <span className="font-bold text-lg">SecureCloud Architect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
            Architecture
          </Link>
          <Link to="/implementation" className="text-foreground/80 hover:text-primary transition-colors">
            Implementation
          </Link>
          <Link to="/security" className="text-foreground/80 hover:text-primary transition-colors">
            Security
          </Link>
          <Button size="sm" variant="outline">Contact Us</Button>
        </div>

        {/* Mobile Navigation Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-foreground p-2 rounded-md hover:bg-accent transition-colors"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Architecture
            </Link>
            <Link 
              to="/implementation" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Implementation
            </Link>
            <Link 
              to="/security" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Security
            </Link>
            <Button variant="outline" onClick={() => setIsMenuOpen(false)}>Contact Us</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
