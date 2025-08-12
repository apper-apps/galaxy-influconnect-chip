import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { Link } from "react-router-dom";

const FreelancerHowItWorks = () => {
  const steps = [
    {
      icon: "UserPlus",
      title: "Create Your Profile",
      description: "Sign up and create a compelling profile that showcases your skills, experience, and portfolio.",
      details: [
        "Complete your professional profile",
        "Add your skills and expertise",
        "Upload portfolio samples",
        "Set your hourly rate"
      ]
    },
    {
      icon: "Search",
      title: "Find & Apply to Jobs",
      description: "Browse thousands of job postings and submit proposals that stand out to clients.",
      details: [
        "Search jobs that match your skills",
        "Use Connects to submit proposals",
        "Write compelling cover letters",
        "Highlight relevant experience"
      ]
    },
    {
      icon: "MessageCircle",
      title: "Interview & Get Hired",
      description: "Connect with clients, discuss project details, and negotiate terms before getting hired.",
      details: [
        "Communicate with potential clients",
        "Clarify project requirements",
        "Negotiate rates and timeline",
        "Sign contracts securely"
      ]
    },
    {
      icon: "CreditCard",
      title: "Get Paid Securely",
      description: "Complete your work and receive guaranteed payments through Upwork's secure payment system.",
      details: [
        "Submit your completed work",
        "Get paid on time, every time",
        "Build long-term client relationships",
        "Grow your freelance business"
      ]
    }
  ];

  const benefits = [
    {
      icon: "Shield",
      title: "Payment Protection",
      description: "Get paid for all work completed through Upwork with our payment protection guarantee."
    },
    {
      icon: "Users",
      title: "Access to Top Clients",
      description: "Connect with quality clients from startups to Fortune 500 companies worldwide."
    },
    {
      icon: "TrendingUp",
      title: "Grow Your Business",
      description: "Build your reputation, increase your rates, and expand your client base over time."
    },
    {
      icon: "Headphones",
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated customer support team."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Upwork Works for Freelancers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join millions of freelancers who are building successful careers on Upwork. 
              Learn how to create your profile, find work, and get paid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="px-8">
                  Get Started as a Freelancer
                  <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/beginner-guide">
                <Button variant="outline" size="lg" className="px-8">
                  Read Beginner's Guide
                  <ApperIcon name="BookOpen" className="ml-2 h-5 w-5" />
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
              4 Simple Steps to Success
            </h2>
            <p className="text-lg text-gray-600">
              Follow these steps to start your freelancing journey on Upwork
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                        <ApperIcon name={step.icon} className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-primary-600 font-semibold mb-1">
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

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Upwork?
            </h2>
            <p className="text-lg text-gray-600">
              Join the world's largest freelancing platform and grow your career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={benefit.icon} className="h-8 w-8 text-primary-600" />
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

      {/* CTA Section */}
      <div className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Freelancing Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join Upwork today and start connecting with clients who need your skills
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary" className="px-8">
              Sign Up Now - It's Free
              <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreelancerHowItWorks;