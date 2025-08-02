import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  CheckCircle, 
  Users, 
  Target, 
  Award,
  ArrowRight,
  MapPin,
  Calendar,
  TrendingUp
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Data Trust & Privacy",
      description: "We prioritize data security and privacy with enterprise-grade encryption, GDPR compliance, and transparent data handling practices."
    },
    {
      icon: Target,
      title: "Accuracy & Precision", 
      description: "Our mission is to provide the most accurate contact validation in the industry, helping businesses improve their outreach effectiveness."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "We're committed to helping our customers achieve their goals through reliable data validation and exceptional support."
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "We constantly improve our algorithms and expand our services to stay ahead of changing data validation needs."
    }
  ];

  const stats = [
    { number: "2M+", label: "Contacts Validated", description: "In 2024 alone" },
    { number: "1000+", label: "Active Customers", description: "Across 50+ countries" },
    { number: "99.5%", label: "Accuracy Rate", description: "Industry-leading precision" },
    { number: "24/7", label: "Support Available", description: "Always here to help" }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to solve contact data quality issues for sales teams"
    },
    {
      year: "2021", 
      title: "First Enterprise Clients",
      description: "Onboarded major Fortune 500 companies and achieved SOC2 compliance"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Extended validation services to 200+ countries and launched CRM integrations"
    },
    {
      year: "2023",
      title: "AI-Powered Validation",
      description: "Introduced machine learning algorithms to improve accuracy by 40%"
    },
    {
      year: "2024",
      title: "Platform Innovation",
      description: "Launched real-time validation APIs and advanced analytics dashboard"
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
              About Our Company
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building Trust Through
              <span className="text-gradient block">Data Accuracy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Founded in San Francisco, Oursummerrecords Solutions is dedicated to helping businesses 
              improve their contact data quality and boost campaign performance through innovative validation technology.
            </p>

            <div className="flex items-center justify-center space-x-6 text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                San Francisco, CA
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Founded 2020
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                1000+ Customers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card border-0 shadow-card text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission &
                <span className="text-gradient"> Core Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe that accurate contact data is the foundation of successful business relationships. 
                Our platform helps companies build trust with their customers through reliable, verified contact information.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="glass-card border-0 shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-primary">
                        <value.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Journey &
                <span className="text-gradient"> Milestones</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                From startup to industry leader, discover the key moments that shaped our company
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                    
                    {/* Content */}
                    <div className="ml-16">
                      <Card className="glass-card border-0 shadow-card">
                        <CardHeader>
                          <div className="flex items-center space-x-4">
                            <Badge className="bg-gradient-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                              {item.year}
                            </Badge>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Leadership Team &
                <span className="text-gradient"> Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our experienced team combines deep technical expertise with customer-focused innovation 
                to deliver the most reliable contact validation platform in the industry.
              </p>
            </div>

            <div className="text-center">
              <Card className="glass-card border-0 shadow-card inline-block p-8">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Experienced Leadership</h3>
                    <p className="text-muted-foreground">20+ years combined experience in data validation</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Our leadership team brings together expertise from leading technology companies, 
                  with a shared vision of making contact data validation accessible and reliable for businesses of all sizes.
                </p>
                <Button 
                  asChild
                  variant="outline"
                  className="glass-button border-primary/20 hover:border-primary/40"
                >
                  <a href="https://salescentri.com/company/about-us/leadership-team" target="_blank" rel="noopener noreferrer">
                    Learn More About Our Team
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how our platform can help your team achieve better contact data quality 
              and improved campaign performance. Start your free trial today.
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
                  Contact Our Team
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

// Badge component for timeline
const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${className}`}>
    {children}
  </span>
);

export default About;