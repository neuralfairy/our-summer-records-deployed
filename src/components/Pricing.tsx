import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      price: "$49",
      period: "/month",
      features: [
        "5,000 verifications/month",
        "Email & phone validation",
        "Basic CRM integration",
        "Standard support",
        "API access",
        "Bulk upload (CSV)"
      ],
      cta: "Start Free Trial",
      href: "https://salescentri.com/get-started/free-trial",
      popular: false
    },
    {
      name: "Professional", 
      description: "For growing sales and marketing teams",
      price: "$149",
      period: "/month",
      features: [
        "25,000 verifications/month",
        "Advanced email validation",
        "Phone & international lookup",
        "Premium CRM integrations",
        "Priority support",
        "Webhook notifications",
        "Custom reporting",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      href: "https://salescentri.com/get-started/free-trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      price: "Custom",
      period: "",
      features: [
        "Unlimited verifications",
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "SLA guarantees",
        "Advanced analytics",
        "SAML/SSO integration"
      ],
      cta: "Contact Sales",
      href: "https://salescentri.com/contact/sales-inquiry",
      popular: false
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            <Star className="h-4 w-4 mr-2 text-trust-green" />
            Simple Pricing
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Perfect
            <span className="text-gradient block">Validation Plan</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Transparent pricing with no hidden fees. Credits rollover monthly, 
            and you only pay for successful verifications.
          </p>

          {/* Pricing Toggle */}
          <div className="inline-flex items-center glass-card p-1 rounded-lg">
            <button className="px-4 py-2 rounded-md bg-gradient-primary text-primary-foreground text-sm font-medium">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-md text-muted-foreground text-sm font-medium hover:text-foreground transition-colors">
              Annual (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`glass-card border-0 shadow-card relative transition-all duration-300 hover:shadow-glow ${
                plan.popular ? 'ring-2 ring-primary/20 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground mt-2">
                  {plan.description}
                </CardDescription>
                
                <div className="mt-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-trust-green mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  size="lg"
                  className={`w-full ${
                    plan.popular 
                      ? 'glass-button bg-gradient-primary text-primary-foreground hover:shadow-glow' 
                      : 'glass-button border-primary/20 hover:border-primary/40'
                  } interactive-scale`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <a href={plan.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-8">
          <div className="glass-card p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">All plans include:</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-trust-green mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-trust-green mr-2" />
                Credits rollover
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-trust-green mr-2" />
                GDPR compliant
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-trust-green mr-2" />
                99.9% uptime SLA
              </div>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground mb-4">
              Need a custom plan? Volume discounts available for enterprise customers.
            </p>
            <Button 
              variant="outline" 
              asChild
              className="glass-button border-primary/20 hover:border-primary/40"
            >
              <a href="https://salescentri.com/contact/sales-inquiry/request-quote" target="_blank" rel="noopener noreferrer">
                Request Custom Quote
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;