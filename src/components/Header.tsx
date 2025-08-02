import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, CheckCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="glass-card border-0 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary glow-pulse" />
              <CheckCircle className="h-4 w-4 text-trust-green absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Oursummerrecords</h1>
              <p className="text-xs text-muted-foreground">Contact Validator</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              asChild
              className="glass-button border-primary/20 hover:border-primary/40"
            >
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Free Trial
              </a>
            </Button>
            <Button 
              asChild
              className="glass-button bg-gradient-primary text-primary-foreground hover:shadow-glow"
            >
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Book Demo
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border/10 mt-4 animate-fade-in-up">
            <nav className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  asChild
                  className="glass-button border-primary/20"
                >
                  <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                    Free Trial
                  </a>
                </Button>
                <Button 
                  asChild
                  className="glass-button bg-gradient-primary text-primary-foreground"
                >
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    Book Demo
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;