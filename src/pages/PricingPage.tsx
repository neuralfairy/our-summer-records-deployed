import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calculator, ArrowRight, HelpCircle } from "lucide-react";
import { useState } from "react";

const PricingPage = () => {
  const [validations, setValidations] = useState(10000);
  const [isAnnual, setIsAnnual] = useState(false);

  const calculatePrice = (validations: number, annual: boolean = false) => {
    const basePrice = validations <= 5000 ? 49 : 
                     validations <= 25000 ? 149 : 
                     Math.ceil(validations / 25000) * 149;
    return annual ? Math.round(basePrice * 0.8) : basePrice;
  };

  const faqs = [
    {
      question: "How accurate is your verification engine?",
      answer: "Our validation engine maintains a 99.5% accuracy rate across all verification types, with real-time SMTP checking and advanced algorithms to detect edge cases."
    },
    {
      question: "What CRMs can I integrate with?",
      answer: "We support native integrations with Salesforce, HubSpot, Zoho, ActiveCampaign, Pipedrive, and 50+ other platforms. Custom integrations available via API."
    },
    {
      question: "Do I pay for invalid contacts?",
      answer: "No, you only pay for successful verifications. Invalid emails and unreachable phone numbers don't count against your quota."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, all plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel at any time."
    },
    {
      question: "What happens to unused credits?",
      answer: "Unused verification credits roll over to the next month. Credits are valid for 12 months from purchase date."
    },
    {
      question: "Do you offer enterprise discounts?",
      answer: "Yes, we offer volume discounts for enterprise customers with high validation needs. Contact our sales team for custom pricing."
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
              Transparent Pricing
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Simple, Scalable Pricing
              <span className="text-gradient block">for Every Team Size</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Start free, scale as you grow. No hidden fees, no setup costs. 
              Pay only for successful verifications with credits that never expire.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ROI Calculator
                <span className="text-gradient"> for Your Team</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                See how much you can save and earn with better contact validation
              </p>
            </div>

            <Card className="glass-card border-0 shadow-glow p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Calculator Inputs */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-primary" />
                    Calculate Your Savings
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Monthly Validations Needed</label>
                      <input
                        type="range"
                        min="1000"
                        max="100000"
                        step="1000"
                        value={validations}
                        onChange={(e) => setValidations(Number(e.target.value))}
                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>1K</span>
                        <span className="font-medium text-primary">{validations.toLocaleString()}</span>
                        <span>100K</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className="text-sm">Monthly</span>
                      <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          isAnnual ? 'bg-primary' : 'bg-secondary'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            isAnnual ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                      <span className="text-sm">Annual (20% off)</span>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Your Results</h3>
                  
                  <div className="space-y-4">
                    <div className="glass-card p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Monthly Cost</span>
                        <span className="text-2xl font-bold text-primary">
                          ${calculatePrice(validations, isAnnual)}
                        </span>
                      </div>
                      {isAnnual && (
                        <div className="text-sm text-trust-green mt-1">
                          Save ${calculatePrice(validations, false) - calculatePrice(validations, true)}/month
                        </div>
                      )}
                    </div>
                    
                    <div className="glass-card p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Cost per Validation</span>
                        <span className="text-lg font-semibold">
                          ${(calculatePrice(validations, isAnnual) / validations * 1000).toFixed(3)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="glass-card p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Estimated Bounce Reduction</span>
                        <span className="text-lg font-semibold text-trust-green">95%</span>
                      </div>
                    </div>
                    
                    <div className="glass-card p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Monthly ROI Improvement</span>
                        <span className="text-lg font-semibold text-trust-green">
                          ${Math.round(validations * 0.15)}+
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    asChild
                    size="lg"
                    className="w-full mt-6 glass-button bg-gradient-primary text-primary-foreground hover:shadow-glow interactive-scale"
                  >
                    <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked
                <span className="text-gradient"> Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="glass-card border-0 shadow-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-start">
                      <HelpCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Still have questions? Our team is here to help.
              </p>
              <Button 
                variant="outline" 
                asChild
                className="glass-button border-primary/20 hover:border-primary/40"
              >
                <a href="https://salescentri.com/contact/support-request" target="_blank" rel="noopener noreferrer">
                  Contact Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Improve Your Contact Quality?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start with our free trial. No credit card required. 
              Validate 500 contacts and see the difference quality data makes.
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
                <a href="https://salescentri.com/contact/sales-inquiry/request-quote" target="_blank" rel="noopener noreferrer">
                  Get Custom Quote
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

export default PricingPage;