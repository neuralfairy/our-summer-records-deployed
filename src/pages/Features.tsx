import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  ArrowRight,
  Shield,
  Clock,
  Globe,
  BarChart3
} from "lucide-react";

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: Mail,
      title: "Advanced Email Verification",
      description: "Our comprehensive email validation engine checks syntax, domain validity, SMTP server response, and detects disposable email addresses to ensure maximum deliverability.",
      details: [
        "Syntax and format validation",
        "Domain MX record verification", 
        "SMTP server connectivity check",
        "Disposable email detection",
        "Role-based email identification",
        "Spam trap detection"
      ],
      benefits: "Reduce bounce rates by up to 95% and improve sender reputation"
    },
    {
      icon: Phone,
      title: "International Phone Validation",
      description: "Validate phone numbers globally with carrier lookup, line type detection, and number portability information across 200+ countries.",
      details: [
        "International format validation",
        "Carrier identification",
        "Line type detection (mobile/landline)",
        "Number portability lookup",
        "Country code verification",
        "Time zone information"
      ],
      benefits: "Ensure accurate phone outreach with 99.5% validation accuracy"
    },
    {
      icon: Database,
      title: "Seamless CRM Integration",
      description: "Connect directly with your existing CRM and marketing automation platforms for real-time contact validation and automated data hygiene.",
      details: [
        "Salesforce native integration",
        "HubSpot real-time sync",
        "Zoho CRM connector",
        "ActiveCampaign automation",
        "Custom webhook support",
        "Automated workflow triggers"
      ],
      benefits: "Save 10+ hours per week on manual data cleaning"
    },
    {
      icon: Zap,
      title: "Developer-Friendly API",
      description: "Integrate contact validation into your applications with our RESTful API, featuring comprehensive documentation and code examples.",
      details: [
        "RESTful API endpoints",
        "JSON response format",
        "Rate limiting protection",
        "Webhook notifications",
        "SDK libraries available",
        "Comprehensive documentation"
      ],
      benefits: "Integrate validation in under 30 minutes with our API"
    },
    {
      icon: Upload,
      title: "High-Performance Bulk Processing",
      description: "Process thousands of contacts simultaneously with our enterprise-grade bulk validation engine that handles large datasets efficiently.",
      details: [
        "CSV and Excel file support",
        "Batch processing up to 1M records",
        "Real-time progress tracking",
        "Duplicate detection and removal",
        "Custom field mapping",
        "Scheduled validation runs"
      ],
      benefits: "Process 100K contacts in under 10 minutes"
    },
    {
      icon: Settings,
      title: "Real-Time Validation & Reporting",
      description: "Get instant validation results with detailed quality scores, comprehensive reports, and actionable insights for data improvement.",
      details: [
        "Instant validation results",
        "Quality score metrics",
        "Detailed validation reports",
        "Data quality analytics",
        "Export in multiple formats",
        "Historical trend analysis"
      ],
      benefits: "Make data-driven decisions with comprehensive analytics"
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "GDPR, SOC2, and ISO certified platform with enterprise-grade security"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "99.9% uptime SLA with continuous monitoring and support"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Validate contacts across 200+ countries and territories"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and data quality insights"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
              <CheckCircle className="h-4 w-4 mr-2 text-trust-green" />
              Complete Feature Overview
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Powerful Contact Validation
              <span className="text-gradient block">Features for Every Need</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Discover how our comprehensive suite of validation tools can transform your contact data quality, 
              improve campaign performance, and boost your ROI with enterprise-grade accuracy.
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
      </section>

      {/* Main Features */}
      <section className="py-20 lg:py-32 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-primary glow-pulse">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{feature.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-trust-green mr-2 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                  
                  <div className="glass-card p-4 mb-6">
                    <p className="text-sm font-medium text-primary">{feature.benefits}</p>
                  </div>
                  
                  <Button 
                    asChild
                    className="glass-button bg-gradient-primary text-primary-foreground hover:shadow-glow interactive-scale"
                  >
                    <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Try This Feature
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                
                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="glass-card border-0 shadow-glow p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Feature Demo</h4>
                        <div className="trust-badge px-3 py-1 rounded-full text-xs font-medium">
                          Live Preview
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="h-4 bg-gradient-primary rounded animate-pulse"></div>
                        <div className="h-3 bg-secondary rounded w-3/4"></div>
                        <div className="h-3 bg-secondary rounded w-1/2"></div>
                        <div className="flex items-center justify-between pt-4">
                          <span className="text-xs text-muted-foreground">Processing...</span>
                          <span className="text-xs text-trust-green font-medium">✓ Validated</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Additional Features &
              <span className="text-gradient"> Enterprise Benefits</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform includes everything you need for comprehensive contact validation and data management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="glass-card border-0 shadow-card hover:shadow-glow transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto p-3 rounded-lg bg-gradient-primary mb-4 w-fit">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of sales and marketing teams who rely on our platform for accurate contact validation 
              and improved campaign performance.
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
                <a href="https://salescentri.com/contact/sales-inquiry" target="_blank" rel="noopener noreferrer">
                  Contact Sales
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;