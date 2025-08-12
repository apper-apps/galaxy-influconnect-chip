import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { Link } from "react-router-dom";

const ClientOnboarding = () => {
  const onboardingSteps = [
    {
      title: "Account Setup",
      description: "Complete your business profile and verify your payment method",
      icon: "Settings",
      tasks: [
        "Add company information",
        "Upload business logo",
        "Verify payment method",
        "Set up billing preferences"
      ],
      timeEstimate: "5-10 minutes"
    },
    {
      title: "Job Posting Strategy",
      description: "Learn how to write effective job posts that attract quality freelancers",
      icon: "FileText",
      tasks: [
        "Define project scope clearly",
        "Set realistic budgets and timelines",
        "Choose appropriate skill requirements",
        "Add screening questions"
      ],
      timeEstimate: "15-20 minutes"
    },
    {
      title: "Freelancer Evaluation",
      description: "Master the art of reviewing proposals and selecting the right talent",
      icon: "UserCheck",
      tasks: [
        "Review portfolios and work samples",
        "Check freelancer ratings and reviews",
        "Conduct effective interviews",
        "Verify skills and experience"
      ],
      timeEstimate: "20-30 minutes"
    },
    {
      title: "Project Management",
      description: "Use Upwork's tools to collaborate effectively with your freelancers",
      icon: "Briefcase",
      tasks: [
        "Set up project milestones",
        "Use time tracking features",
        "Communicate through Upwork",
        "Review and approve deliverables"
      ],
      timeEstimate: "10-15 minutes"
    }
  ];

  const bestPractices = [
    {
      category: "Writing Job Posts",
      icon: "Edit3",
      tips: [
        {
          title: "Be Specific",
          description: "Clearly describe what you need, including deliverables, timeline, and budget."
        },
        {
          title: "Set Realistic Budgets",
          description: "Research market rates and set competitive budgets to attract quality freelancers."
        },
        {
          title: "Include Examples",
          description: "Provide examples of work you like or link to similar projects for clarity."
        },
        {
          title: "Ask Good Questions",
          description: "Add screening questions to help identify the most qualified candidates."
        }
      ]
    },
    {
      category: "Managing Freelancers",
      icon: "Users",
      tips: [
        {
          title: "Clear Communication",
          description: "Provide detailed feedback and respond promptly to freelancer questions."
        },
        {
          title: "Set Milestones",
          description: "Break large projects into smaller milestones for better progress tracking."
        },
        {
          title: "Regular Check-ins",
          description: "Schedule regular progress updates to ensure projects stay on track."
        },
        {
          title: "Provide Resources",
          description: "Share all necessary files, access, and information upfront."
        }
      ]
    },
    {
      category: "Building Relationships",
      icon: "Heart",
      tips: [
        {
          title: "Give Constructive Feedback",
          description: "Provide specific, actionable feedback to help freelancers improve."
        },
        {
          title: "Pay Promptly",
          description: "Release payments quickly after satisfactory work completion."
        },
        {
          title: "Leave Reviews",
          description: "Write thoughtful reviews that help freelancers build their reputation."
        },
        {
          title: "Build Long-term Partnerships",
          description: "Nurture relationships with great freelancers for future projects."
        }
      ]
    }
  ];

  const commonMistakes = [
    {
      mistake: "Vague Job Descriptions",
      solution: "Write detailed, specific job posts that clearly explain project requirements",
      icon: "AlertCircle"
    },
    {
      mistake: "Unrealistic Budgets",
      solution: "Research market rates and set competitive budgets for quality work",
      icon: "DollarSign"
    },
    {
      mistake: "Poor Communication",
      solution: "Respond promptly and provide clear, detailed feedback to freelancers",
      icon: "MessageSquare"
    },
    {
      mistake: "Micromanaging",
      solution: "Trust skilled freelancers and focus on results rather than process",
      icon: "Eye"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client Onboarding & Best Practices
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Learn how to successfully hire, manage, and build relationships with freelancers. 
              Master the tools and strategies used by top-performing clients on Upwork.
            </p>
            <Link to="/client-how-it-works">
              <Button size="lg">
                Start with Client Basics
                <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Onboarding Steps */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Client Onboarding Journey
            </h2>
            <p className="text-lg text-gray-600">
              Follow these steps to set yourself up for hiring success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {onboardingSteps.map((step, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ApperIcon name={step.icon} className="h-6 w-6 text-purple-600" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {step.timeEstimate}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center text-sm text-gray-600">
                          <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          {task}
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

      {/* Best Practices */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Client Best Practices
            </h2>
            <p className="text-lg text-gray-600">
              Proven strategies from successful clients
            </p>
          </div>

          <div className="space-y-12">
            {bestPractices.map((section, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ApperIcon name={section.icon} className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {section.category}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {section.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {tip.title}
                      </h4>
                      <p className="text-gray-600">
                        {tip.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Avoid These Common Mistakes
            </h2>
            <p className="text-lg text-gray-600">
              Learn from others' experiences and set yourself up for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {commonMistakes.map((item, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ApperIcon name={item.icon} className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-900 mb-2">
                      ❌ {item.mistake}
                    </h4>
                    <p className="text-red-700">
                      <strong>Solution:</strong> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-lg text-gray-600">
              Tools and guides to help you succeed as a client
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <ApperIcon name="BookOpen" className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Client Help Center
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides, tutorials, and FAQs for clients
              </p>
              <Button variant="outline" size="sm">
                Visit Help Center
              </Button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <ApperIcon name="Users" className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community Forum
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with other clients and share experiences
              </p>
              <Button variant="outline" size="sm">
                Join Community
              </Button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <ApperIcon name="Headphones" className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600 mb-4">
                Get help from our customer success team anytime
              </p>
              <Button variant="outline" size="sm">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Hire Your First Freelancer?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Apply what you've learned and start building your remote team today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary">
                Create Client Account
                <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/browse">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                Browse Talent Now
                <ApperIcon name="Search" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientOnboarding;