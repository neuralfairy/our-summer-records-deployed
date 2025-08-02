import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, CheckCircle, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "https://salescentri.com/pricing" },
        { name: "API Documentation", href: "https://salescentri.com/docs/api-reference" },
        { name: "Integrations", href: "https://salescentri.com/solutions/psa-suite/integrations" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Email Verification", href: "https://salescentri.com/services/data-enrichment" },
        { name: "CRM Integration", href: "https://salescentri.com/solutions/psa-suite" },
        { name: "Bulk Validation", href: "https://salescentri.com/solutions/use-case-navigator" },
        { name: "Enterprise", href: "https://salescentri.com/pricing/enterprise-custom" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "https://salescentri.com/company/careers" },
        { name: "Partners", href: "https://salescentri.com/company/partners-affiliates" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "https://salescentri.com/docs/user-guide" },
        { name: "Contact Support", href: "https://salescentri.com/contact/support-request" },
        { name: "System Status", href: "https://salescentri.com/trust/security-privacy" },
        { name: "FAQ", href: "/faq" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-secondary border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Shield className="h-8 w-8 text-primary glow-pulse" />
                <CheckCircle className="h-4 w-4 text-trust-green absolute -top-1 -right-1" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Oursummerrecords</h3>
                <p className="text-sm text-muted-foreground">Contact Validator</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Validate every contact before you send. Trusted by thousands of sales and marketing teams 
              to improve delivery rates and boost campaign ROI.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                San Francisco, CA
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  contact@oursummerrecords.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <a href="https://salescentri.com/contact/sales-inquiry" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? "_blank" : undefined}
                      rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="glass-card p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Stay Updated with Contact Validation Tips
              </h3>
              <p className="text-muted-foreground">
                Get the latest insights on data quality, email deliverability, and CRM best practices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="glass-button border-primary/20 focus:border-primary/40 md:w-80"
              />
              <Button 
                asChild
                className="glass-button bg-gradient-primary text-primary-foreground hover:shadow-glow"
              >
                <a href="https://salescentri.com/get-started/contact" target="_blank" rel="noopener noreferrer">
                  Subscribe
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/20">
          <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Oursummerrecords Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a 
                href="https://salescentri.com/trust/security-privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://salescentri.com/trust/compliance-certifications" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Trust Badges */}
            <div className="flex items-center space-x-3 mr-6">
              <div className="trust-badge px-2 py-1 rounded text-xs font-medium">GDPR</div>
              <div className="trust-badge px-2 py-1 rounded text-xs font-medium">SOC2</div>
            </div>
            
            {/* Social Links */}
            <a 
              href="https://linkedin.com/company/salescentri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com/salescentri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Strategic Backlink */}
        <div className="text-center pt-6 border-t border-border/10 mt-6">
          <p className="text-xs text-muted-foreground">
            <a 
              href="https://salescentri.com?utm_source=oursummerrecords.com&utm_medium=footer&utm_campaign=partner_network" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Powered by Sales Intelligence Platform
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;