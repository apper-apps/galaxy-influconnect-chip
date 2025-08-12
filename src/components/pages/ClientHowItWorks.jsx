import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { Link } from "react-router-dom";

const ClientHowItWorks = () => {
  const steps = [
    {
      icon: "FileText",
      title: "Post Your Job",
      description: "Describe your project, set your budget, and specify the skills you need.",
      details: [
        "Write a clear job description",
        "Set your budget and timeline", 
        "Choose required skills and experience level",
        "Add screening questions if needed"
      ]
    },
    {
      icon: "Users",
      title: "Review Proposals",
      description: "Freelancers submit proposals. Review their profiles, portfolios, and rates.",
      details: [
        "Receive proposals from qualified freelancers",
        "Review portfolios and work samples",
        "Check ratings and client feedback",
        "Compare rates and availability"
      ]
    },
    {
      icon: "MessageCircle",
      title: "Interview & Hire",
      description: "Interview your top candidates and hire the best freelancer for your project.",
      details: [
        "Interview promising candidates",
        "Discuss project requirements in detail",
        "Negotiate terms and timeline",
        "Send job offers to your chosen freelancer"
      ]
    },
    {
      icon: "CheckCircle",
      title: "Collaborate & Pay",
      description: "Work together using Upwork's tools and pay securely when satisfied.",
      details: [
        "Use Upwork's collaboration tools",
        "Track progress with time tracking",
        "Review and approve deliverables", 
        "Pay securely through the platform"
      ]
    }
  ];

  const services = [
    {
      title: "Talent Marketplace",
      description: "Browse and hire from millions of freelancers across all skill categories",
      icon: "Search",
      features: [
        "Advanced search and filters",
        "Verified freelancer profiles",
        "Portfolio samples and reviews",
        "Skill tests and certifications"
      ]
    },
    {
      title: "Project Catalog",
      description: "Buy pre-packaged services from freelancers at fixed prices",
      icon: "Package",
      features: [
        "Ready-made service packages",
        "Fixed pricing and delivery times",
        "Browse by category or search",
        "Quick hiring process"
      ]
    },
    {
      title: "Talent Scout™",
      description: "Let our experts find and vet the perfect freelancers for you",
      icon: "UserCheck",
      features: [
        "Dedicated talent specialists",
        "Hand-picked recommendations",
        "Pre-vetted candidates",
        "Faster hiring process"
      ]
    }
  ];

  const benefits = [
    {
      icon: "Shield",
      title: "Secure Payments",
      description: "Pay with confidence using our secure payment protection."
    },
    {
      icon: "Clock",
      title: "Save Time",
      description: "Find qualified freelancers quickly with our advanced matching."
    },
    {
      icon: "TrendingUp",
      title: "Scale Your Business",
      description: "Access global talent to grow your business faster."
    },
    {
      icon: "Award",
      title: "Quality Work",
      description: "Work with top-rated freelancers who deliver excellent results."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Upwork Works for Clients
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how millions of businesses use Upwork to hire freelancers, 
              manage projects, and grow their teams with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="px-8">
                  Get Started as a Client
                  <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/browse">
                <Button variant="outline" size="lg" className="px-8">
                  Browse Freelancers
                  <ApperIcon name="Search" className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Steps */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hire Freelancers in 4 Simple Steps
            </h2>
            <p className="text-lg text-gray-600">
              From posting your job to project completion
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <ApperIcon name={step.icon} className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-green-600 font-semibold mb-1">
                        Step {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-4">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-gray-600">
                            <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <ApperIcon name={step.icon} className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Hiring Method
            </h2>
            <p className="text-lg text-gray-600">
              Multiple ways to find and hire the right talent for your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <ApperIcon name={service.icon} className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Upwork
            </h2>
            <p className="text-lg text-gray-600">
              Join millions of businesses that trust Upwork for their freelancing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={benefit.icon} className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-lg text-gray-600">
              See how Upwork helps businesses of all sizes succeed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">18M+</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Registered Freelancers</div>
              <p className="text-gray-600 text-sm">
                Access to the world's largest pool of skilled professionals
              </p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5M+</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Registered Clients</div>
              <p className="text-gray-600 text-sm">
                Join millions of businesses that trust Upwork
              </p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$3.8B+</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Paid to Freelancers</div>
              <p className="text-gray-600 text-sm">
                Billions in work completed through our platform
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Hire Your First Freelancer?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Post your job today and start receiving proposals from qualified freelancers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary">
                Post a Job - It's Free
                <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/client-onboarding">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                Learn Client Best Practices
                <ApperIcon name="BookOpen" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHowItWorks;