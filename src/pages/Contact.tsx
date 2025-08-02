import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  MessageSquare,
  Headphones,
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Sales Inquiry",
      description: "Get personalized pricing and solutions for your team",
      action: "Contact Sales",
      href: "https://salescentri.com/contact/sales-inquiry"
    },
    {
      icon: Headphones,
      title: "Support Request", 
      description: "Technical support and account assistance",
      action: "Get Support",
      href: "https://salescentri.com/contact/support-request"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized demo with our team",
      action: "Book Demo",
      href: "https://salescentri.com/get-started/book-demo"
    },
    {
      icon: Users,
      title: "Partnership Inquiry",
      description: "Explore partnership and integration opportunities",
      action: "Partner With Us",
      href: "https://salescentri.com/contact/partnerships"
    }
  ];

  const officeInfo = {
    address: "123 Market Street, Suite 400",
    city: "San Francisco, CA 94105",
    phone: "(555) 123-4567",
    email: "contact@oursummerrecords.com",
    hours: "Monday - Friday, 9 AM - 6 PM PST"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
              <CheckCircle className="h-4 w-4 mr-2 text-trust-green" />
              We're Here to Help
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Get in Touch with
              <span className="text-gradient block">Our Expert Team</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Whether you need sales assistance, technical support, or want to explore partnerships, 
              our team is ready to help you succeed with contact validation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="glass-card border-0 shadow-card hover:shadow-glow transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto p-4 rounded-lg bg-gradient-primary mb-4 w-fit">
                    <method.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <Button 
                    asChild
                    className="glass-button bg-gradient-primary text-primary-foreground hover:shadow-glow interactive-scale"
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      {method.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Send Us a
                <span className="text-gradient"> Message</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours during business days.
              </p>

              <Card className="glass-card border-0 shadow-glow">
                <CardContent className="p-6">
                  <form className="space-y-6" action="https://salescentri.com/get-started/contact" method="get">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input 
                          name="firstName"
                          placeholder="Enter your first name" 
                          className="glass-button border-primary/20 focus:border-primary/40"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input 
                          name="lastName"
                          placeholder="Enter your last name" 
                          className="glass-button border-primary/20 focus:border-primary/40"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input 
                        type="email"
                        name="email"
                        placeholder="Enter your email address" 
                        className="glass-button border-primary/20 focus:border-primary/40"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input 
                        name="company"
                        placeholder="Enter your company name" 
                        className="glass-button border-primary/20 focus:border-primary/40"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input 
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number" 
                        className="glass-button border-primary/20 focus:border-primary/40"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea 
                        name="message"
                        placeholder="Tell us how we can help you..." 
                        rows={4}
                        className="glass-button border-primary/20 focus:border-primary/40"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full glass-button bg-gradient-primary text-primary-foreground hover:shadow-glow interactive-scale"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Office &
                <span className="text-gradient"> Information</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Visit our San Francisco headquarters or reach out through any of our contact channels.
              </p>

              <div className="space-y-6">
                <Card className="glass-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Office Address</h3>
                        <p className="text-muted-foreground text-sm">
                          {officeInfo.address}<br />
                          {officeInfo.city}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Phone Number</h3>
                        <p className="text-muted-foreground text-sm">
                          <a href={`tel:${officeInfo.phone}`} className="hover:text-primary transition-colors">
                            {officeInfo.phone}
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Email Address</h3>
                        <p className="text-muted-foreground text-sm">
                          <a href={`mailto:${officeInfo.email}`} className="hover:text-primary transition-colors">
                            {officeInfo.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                        <p className="text-muted-foreground text-sm">{officeInfo.hours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Quick Actions</h3>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full glass-button border-primary/20 hover:border-primary/40 interactive-scale"
                  >
                    <a href="https://salescentri.com/contact/support-request/live-chat" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Start Live Chat
                      <MessageSquare className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full glass-button border-primary/20 hover:border-primary/40 interactive-scale"
                  >
                    <a href="https://salescentri.com/contact/support-request/submit-ticket" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Submit Support Ticket
                      <Headphones className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    className="w-full glass-button bg-gradient-primary text-primary-foreground hover:shadow-glow interactive-scale"
                  >
                    <a href="https://salescentri.com/get-started/calendly" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Schedule a Call
                      <Calendar className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Us in
                <span className="text-gradient"> San Francisco</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Located in the heart of San Francisco's tech district
              </p>
            </div>

            <Card className="glass-card border-0 shadow-glow">
              <CardContent className="p-8 text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
                <p className="text-muted-foreground mb-4">
                  {officeInfo.address}<br />
                  {officeInfo.city}
                </p>
                <Button 
                  asChild
                  variant="outline"
                  className="glass-button border-primary/20 hover:border-primary/40"
                >
                  <a 
                    href={`https://maps.google.com?q=${encodeURIComponent(officeInfo.address + ' ' + officeInfo.city)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View on Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;