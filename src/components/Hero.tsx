import { Button } from "@/components/ui/button";
import { CheckCircle, Play, ArrowRight } from "lucide-react";

const Hero = () => {
  const trustIndicators = [
    "Verified 2M+ contacts in 2024",
    "99.9% accuracy rate",
    "GDPR & SOC2 compliant",
    "Enterprise-grade security"
  ];

  return (
    <section className="relative py-20 lg:py-32 hero-bg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6 animate-fade-in-up">
              <CheckCircle className="h-4 w-4 mr-2 text-trust-green" />
              Trusted by 1000+ Sales Teams
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Validate Every Contact
              <span className="text-gradient block">Before You Click Send</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Contact Validator helps sales and marketing teams improve delivery, reduce bounce rates, and boost outreach ROI with enterprise-grade email and phone verification.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                asChild
                className="glass-button bg-gradient-primary text-primary-foreground hover:shadow-glow interactive-scale"
              >
                <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="glass-button border-primary/20 hover:border-primary/40 interactive-scale"
              >
                <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-trust-green mr-2 flex-shrink-0" />
                  {indicator}
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="glass-card p-8 shadow-glow">
              {/* Dashboard Mock */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Contact Validation Dashboard</h3>
                  <div className="trust-badge px-3 py-1 rounded-full text-xs font-medium">
                    Live Demo
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-trust-green rounded-full mr-3"></div>
                      <span className="text-sm">john.doe@company.com</span>
                    </div>
                    <span className="text-xs text-trust-green font-medium">Verified ✓</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm">sarah.smith@example.org</span>
                    </div>
                    <span className="text-xs text-primary font-medium">Validating...</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3"></div>
                      <span className="text-sm">invalid@wrongdomain.xyz</span>
                    </div>
                    <span className="text-xs text-destructive font-medium">Invalid ✗</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-trust-green">98.5%</div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">2.1K</div>
                      <div className="text-xs text-muted-foreground">Validated</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">45ms</div>
                      <div className="text-xs text-muted-foreground">Avg Speed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;