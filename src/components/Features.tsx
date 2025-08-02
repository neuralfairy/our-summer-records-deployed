import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  Database, 
  Zap, 
  Upload, 
  Settings,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Mail,
      title: "Email Verification",
      description: "Complete email validation with syntax, domain, and SMTP checks to ensure deliverability.",
      benefits: ["Syntax validation", "Domain verification", "SMTP server check", "Disposable email detection"]
    },
    {
      icon: Phone,
      title: "Phone Validation", 
      description: "International phone number lookup and validation with carrier information and line type detection.",
      benefits: ["Number format validation", "Carrier lookup", "Line type detection", "International support"]
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Seamless integration with popular CRMs to validate contacts automatically and maintain data quality.",
      benefits: ["Salesforce integration", "HubSpot connector", "Real-time sync", "Automated workflows"]
    },
    {
      icon: Zap,
      title: "API Access",
      description: "Developer-friendly REST API for integrating contact validation into your applications and workflows.",
      benefits: ["RESTful API", "Webhook support", "Rate limiting", "Comprehensive docs"]
    },
    {
      icon: Upload,
      title: "Bulk Upload",
      description: "Process thousands of contacts simultaneously with our high-performance bulk validation engine.",
      benefits: ["CSV/Excel support", "Batch processing", "Progress tracking", "Export results"]
    },
    {
      icon: Settings,
      title: "Real-time Results",
      description: "Get instant validation results with detailed reports and actionable insights for your contact lists.",
      benefits: ["Instant validation", "Detailed reports", "Quality scores", "Export options"]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            <CheckCircle className="h-4 w-4 mr-2 text-trust-green" />
            Powerful Features
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="text-gradient block">Perfect Contact Validation</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of validation tools ensures your contact data is accurate, 
            up-to-date, and ready for high-converting outreach campaigns.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary group-hover:glow-pulse">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-trust-green mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Contact Quality?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of sales and marketing teams who trust our platform 
              to validate their contact data and boost campaign performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                  Interactive Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;