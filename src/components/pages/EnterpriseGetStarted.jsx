import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { Link } from "react-router-dom";

const EnterpriseGetStarted = () => {
  const enterpriseFeatures = [
    {
      title: "Advanced Security & Compliance",
      description: "Enterprise-grade security controls and compliance with industry standards",
      icon: "Shield",
      features: [
        "Single Sign-On (SSO) integration",
        "Advanced data encryption",
        "GDPR and CCPA compliance",
        "SOC 2 Type II certification",
        "Custom security policies",
        "Audit trails and reporting"
      ]
    },
    {
      title: "Dedicated Account Management",
      description: "Personal support and guidance from enterprise specialists",
      icon: "UserCheck",
      features: [
        "Dedicated Customer Success Manager",
        "Strategic planning sessions",
        "Custom onboarding program",
        "Priority technical support",
        "Quarterly business reviews",
        "Success optimization guidance"
      ]
    },
    {
      title: "Advanced Talent Access",
      description: "Exclusive access to top-tier, enterprise-ready freelancers",
      icon: "Users",
      features: [
        "Curated talent pools",
        "Pre-vetted professionals",
        "Enterprise skill matching",
        "Talent advisory services",
        "Custom talent sourcing",
        "Long-term talent relationships"
      ]
    },
    {
      title: "Powerful Analytics & Reporting",
      description: "Comprehensive insights to optimize your freelance program",
      icon: "BarChart3",
      features: [
        "Custom dashboards",
        "Spend analytics",
        "Performance metrics",
        "ROI tracking",
        "Compliance reporting",
        "API access for integrations"
      ]
    }
  ];

  const useCases = [
    {
      industry: "Technology",
      title: "Scale Development Teams",
      description: "Quickly augment your engineering teams with specialized talent",
      icon: "Code",
      benefits: [
        "Access to specialized tech skills",
        "Faster project delivery",
        "Cost-effective scaling",
        "Global talent pool"
      ]
    },
    {
      industry: "Marketing",
      title: "Digital Marketing Campaigns",
      description: "Launch comprehensive marketing initiatives with expert freelancers",
      icon: "Megaphone",
      benefits: [
        "Multi-channel expertise",
        "Campaign flexibility",
        "Performance tracking",
        "Creative diversity"
      ]
    },
    {
      industry: "Consulting",
      title: "Project-Based Expertise",
      description: "Bring in specialized consultants for specific project needs",
      icon: "Briefcase",
      benefits: [
        "Domain expertise",
        "Flexible engagements",
        "Cost efficiency",
        "Quality deliverables"
      ]
    },
    {
      industry: "Healthcare",
      title: "Compliance & Documentation",
      description: "Ensure regulatory compliance with specialized freelancers",
      icon: "Heart",
      benefits: [
        "Regulatory expertise",
        "Compliance assurance",
        "Documentation quality",
        "Risk mitigation"
      ]
    }
  ];

  const pricingTiers = [
    {
      tier: "Enterprise Standard",
      price: "Custom Pricing",
      description: "For growing businesses looking to scale their freelance programs",
      features: [
        "Advanced talent matching",
        "Dedicated account manager",
        "Custom onboarding",
        "Priority support",
        "Basic analytics",
        "SSO integration"
      ],
      highlight: false
    },
    {
      tier: "Enterprise Plus",
      price: "Contact Sales",
      description: "For large organizations with complex requirements",
      features: [
        "All Standard features",
        "Advanced security controls",
        "Custom compliance setup",
        "Advanced analytics",
        "API access",
        "White-glove service"
      ],
      highlight: true
    },
    {
      tier: "Enterprise Custom",
      price: "Contact Sales",
      description: "Fully customized solution for unique enterprise needs",
      features: [
        "All Plus features",
        "Custom integrations",
        "Bespoke security measures",
        "Custom reporting",
        "Dedicated infrastructure",
        "24/7 premium support"
      ],
      highlight: false
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Discovery Call",
      description: "Schedule a consultation to understand your needs and objectives",
      icon: "Phone"
    },
    {
      step: 2,
      title: "Custom Proposal",
      description: "Receive a tailored proposal with pricing and implementation plan",
      icon: "FileText"
    },
    {
      step: 3,
      title: "Contract & Setup",
      description: "Finalize agreements and begin the enterprise onboarding process",
      icon: "Settings"
    },
    {
      step: 4,
      title: "Launch & Support",
      description: "Go live with dedicated support and ongoing account management",
      icon: "Rocket"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="Building2" className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Started with Upwork Enterprise
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Scale your business with enterprise-grade freelancing solutions. 
              Access top talent, advanced security, and dedicated support designed for large organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Schedule Demo
                <ApperIcon name="Calendar" className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Download Enterprise Guide
                <ApperIcon name="Download" className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Features */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to manage freelance talent at scale
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ApperIcon name={feature.icon} className="h-6 w-6 text-slate-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    
                    <ul className="grid md:grid-cols-2 gap-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              How leading companies use Upwork Enterprise across industries
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ApperIcon name={useCase.icon} className="h-5 w-5 text-blue-600" />
                  </div>
                  
                  <div>
                    <div className="text-sm text-blue-600 font-semibold mb-1">
                      {useCase.industry}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {useCase.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <ApperIcon name="ArrowRight" className="h-3 w-3 text-blue-500 mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Flexible pricing options designed to meet your organization's needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm border-2 ${
                  tier.highlight
                    ? 'border-slate-500 relative'
                    : 'border-gray-200'
                } p-8`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-slate-500 text-white px-4 py-1 text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tier.tier}
                </h3>
                <div className="text-2xl font-bold text-gray-900 mb-4">
                  {tier.price}
                </div>
                <p className="text-gray-600 mb-6">
                  {tier.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  className="w-full"
                  variant={tier.highlight ? 'default' : 'outline'}
                >
                  Contact Sales
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Getting Started Process */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Path to Enterprise Success
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to get your enterprise program up and running
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={step.icon} className="h-8 w-8 text-slate-600" />
                </div>
                <div className="text-sm text-slate-600 font-semibold mb-2">
                  Step {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of enterprises scaling with Upwork
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-600 mb-2">500+</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Fortune 500 Companies</div>
              <p className="text-gray-600 text-sm">
                Trust Upwork for their freelance programs
              </p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-slate-600 mb-2">99.9%</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Uptime Guarantee</div>
              <p className="text-gray-600 text-sm">
                Enterprise-grade reliability and availability
              </p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-slate-600 mb-2">24/7</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Enterprise Support</div>
              <p className="text-gray-600 text-sm">
                Dedicated support when you need it most
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-slate-600 mb-2">50M+</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Hours Worked</div>
              <p className="text-gray-600 text-sm">
                Successful enterprise projects completed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-100 mb-8">
            Connect with our enterprise specialists to explore how Upwork can accelerate your growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Your Demo
              <ApperIcon name="Calendar" className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/enterprise-onboarding">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-600">
                Learn About Onboarding
                <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseGetStarted;