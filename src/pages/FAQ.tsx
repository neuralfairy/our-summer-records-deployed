import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  HelpCircle, 
  CheckCircle, 
  Search,
  ArrowRight,
  Mail,
  Phone,
  MessageSquare
} from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is contact validation and why do I need it?",
          answer: "Contact validation is the process of verifying that email addresses and phone numbers are valid, deliverable, and active. It helps reduce bounce rates, improve sender reputation, and ensure your outreach campaigns reach real people. This leads to better ROI, higher deliverability rates, and more successful marketing campaigns."
        },
        {
          question: "How accurate is your verification engine?",
          answer: "Our validation engine maintains a 99.5% accuracy rate across all verification types. We use advanced algorithms that check syntax, domain validity, SMTP server response, and perform real-time verification. Our system is continuously updated to handle new email providers and changing validation requirements."
        },
        {
          question: "What types of contacts can you validate?",
          answer: "We can validate email addresses (including syntax, domain, and SMTP checks), phone numbers (domestic and international), and provide additional data enrichment. Our platform supports validation for both individual contacts and bulk lists up to 1 million records."
        },
        {
          question: "How fast is the validation process?",
          answer: "Individual validations typically complete in under 2 seconds. Bulk validations depend on list size - we can process up to 100,000 contacts in under 10 minutes. Real-time API validations return results instantly for integration into your existing workflows."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "How does your pricing work?",
          answer: "We offer transparent, usage-based pricing with three main plans: Starter (5K validations/month for $49), Professional (25K validations/month for $149), and Enterprise (custom pricing). You only pay for successful verifications, and unused credits roll over monthly for up to 12 months."
        },
        {
          question: "Do I pay for invalid contacts?",
          answer: "No, you only pay for successful verifications. Invalid emails, unreachable phone numbers, and failed validations don't count against your quota. This ensures you get maximum value from your validation credits."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, all plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel at any time through your account dashboard. Unused credits remain valid for 12 months even after cancellation."
        },
        {
          question: "Do you offer discounts for annual payments?",
          answer: "Yes, we offer a 20% discount for annual subscriptions across all plans. Enterprise customers may qualify for additional volume discounts based on their validation needs."
        }
      ]
    },
    {
      category: "Integrations & API",
      questions: [
        {
          question: "What CRMs can I integrate with?",
          answer: "We offer native integrations with Salesforce, HubSpot, Zoho, ActiveCampaign, Pipedrive, and 50+ other platforms. Our REST API also allows custom integrations with any system that can make HTTP requests."
        },
        {
          question: "How difficult is it to integrate your API?",
          answer: "Our RESTful API is designed for easy integration. Most developers can integrate validation into their applications in under 30 minutes using our comprehensive documentation, code examples, and SDK libraries available in multiple programming languages."
        },
        {
          question: "Do you support webhook notifications?",
          answer: "Yes, we support webhook notifications for bulk validation completion, API rate limit alerts, and account notifications. This allows you to build automated workflows that respond to validation events in real-time."
        },
        {
          question: "What are your API rate limits?",
          answer: "API rate limits vary by plan: Starter (100 requests/minute), Professional (500 requests/minute), and Enterprise (custom limits). We also offer burst capacity for occasional high-volume needs."
        }
      ]
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          question: "How do you protect my data?",
          answer: "We use enterprise-grade security including AES-256 encryption, secure data centers, and strict access controls. All data is encrypted in transit and at rest. We're SOC2 Type II certified and maintain regular security audits."
        },
        {
          question: "Are you GDPR compliant?",
          answer: "Yes, we are fully GDPR compliant. We implement data minimization, provide data processing agreements, support data portability requests, and maintain strict data retention policies. Users have full control over their data with options to export or delete at any time."
        },
        {
          question: "Do you store validated contact data?",
          answer: "We temporarily cache validation results for 30 days to improve performance for repeat queries. After this period, all contact data is automatically purged. We never share or sell contact data to third parties."
        },
        {
          question: "What certifications do you have?",
          answer: "We maintain SOC2 Type II, ISO 27001, and GDPR compliance certifications. Our platform also undergoes regular penetration testing and security audits by third-party security firms."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What support do you offer?",
          answer: "We provide multiple support channels: email support (24/7), live chat (business hours), comprehensive documentation, video tutorials, and API reference guides. Enterprise customers receive priority support and dedicated account management."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "Email support: within 4 hours during business days. Live chat: immediate response during business hours (9 AM - 6 PM PST). Enterprise customers receive 1-hour response time SLA with 24/7 phone support available."
        },
        {
          question: "Do you provide implementation assistance?",
          answer: "Yes, we offer implementation support including API integration guidance, CRM setup assistance, and best practices consultation. Enterprise customers receive dedicated onboarding and ongoing technical support."
        },
        {
          question: "What if I need help with bulk validation?",
          answer: "Our support team can assist with bulk validation setup, file formatting, field mapping, and result interpretation. We also provide guidance on data preparation and optimization for best validation results."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
              <HelpCircle className="h-4 w-4 mr-2 text-trust-green" />
              Frequently Asked Questions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Get Answers to Your
              <span className="text-gradient block">Validation Questions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Find quick answers to common questions about contact validation, pricing, integrations, 
              and our platform. Can't find what you're looking for? Our support team is here to help.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass-button border-primary/20 focus:border-primary/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.length > 0 ? (
              <div className="space-y-12">
                {filteredCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
                      <CheckCircle className="h-8 w-8 text-primary mr-3" />
                      {category.category}
                    </h2>
                    
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border-0">
                          <Card className="glass-card border-0 shadow-card overflow-hidden">
                            <AccordionTrigger className="hover:no-underline p-6 text-left">
                              <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </AccordionContent>
                          </Card>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">
                  Try searching with different keywords or browse all categories above.
                </p>
                <Button 
                  onClick={() => setSearchTerm("")}
                  variant="outline"
                  className="glass-button border-primary/20 hover:border-primary/40"
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Need Help?
                <span className="text-gradient"> We're Here for You</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Can't find the answer you're looking for? Our support team is ready to assist you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card border-0 shadow-card hover:shadow-glow transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto p-4 rounded-lg bg-gradient-primary mb-4 w-fit">
                    <MessageSquare className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Live Chat</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Get instant help from our support team during business hours
                  </p>
                </CardHeader>
                <CardContent>
                  <Button 
                    asChild
                    className="glass-button bg-gradient-primary text-primary-foreground hover:shadow-glow interactive-scale"
                  >
                    <a href="https://salescentri.com/contact/support-request/live-chat" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Start Chat
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 shadow-card hover:shadow-glow transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto p-4 rounded-lg bg-gradient-primary mb-4 w-fit">
                    <Mail className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Email Support</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Send us a detailed message and we'll respond within 4 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <Button 
                    asChild
                    variant="outline"
                    className="glass-button border-primary/20 hover:border-primary/40 interactive-scale"
                  >
                    <a href="https://salescentri.com/contact/support-request" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Send Email
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 shadow-card hover:shadow-glow transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto p-4 rounded-lg bg-gradient-primary mb-4 w-fit">
                    <Phone className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Phone Support</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Speak directly with our experts for complex technical issues
                  </p>
                </CardHeader>
                <CardContent>
                  <Button 
                    asChild
                    variant="outline"
                    className="glass-button border-primary/20 hover:border-primary/40 interactive-scale"
                  >
                    <a href="https://salescentri.com/contact/sales-inquiry" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Request Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base CTA */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore Our Knowledge Base
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access detailed guides, API documentation, video tutorials, and best practices 
              to get the most out of our contact validation platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild
                className="glass-button bg-gradient-primary text-primary-foreground hover:shadow-glow interactive-scale"
              >
                <a href="https://salescentri.com/docs/user-guide" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Browse Documentation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="glass-button border-primary/20 hover:border-primary/40 interactive-scale"
              >
                <a href="https://salescentri.com/resources/tutorials-webinars" target="_blank" rel="noopener noreferrer">
                  Watch Tutorials
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

export default FAQ;