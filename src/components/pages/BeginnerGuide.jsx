import { useState } from "react";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { Link } from "react-router-dom";

const BeginnerGuide = () => {
  const [activeSection, setActiveSection] = useState('account-creation');

  const sections = [
    {
      id: 'account-creation',
      title: 'Account Creation',
      icon: 'UserPlus'
    },
    {
      id: 'profile-setup',
      title: 'Profile Setup',
      icon: 'User'
    },
    {
      id: 'finding-jobs',
      title: 'Finding Jobs',
      icon: 'Search'
    },
    {
      id: 'proposals',
      title: 'Writing Proposals',
      icon: 'FileText'
    },
    {
      id: 'interviews',
      title: 'Interviews',
      icon: 'MessageCircle'
    },
    {
      id: 'first-projects',
      title: 'First Projects',
      icon: 'Briefcase'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'account-creation':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Creating Your Upwork Account</h2>
            <p className="text-lg text-gray-600">
              Getting started on Upwork is simple and free. Follow these steps to create your account.
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Choose Your Account Type</h3>
                <p className="text-gray-600">
                  Select "I'm a freelancer" when signing up. This determines the features and tools available to you.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Verify Your Email</h3>
                <p className="text-gray-600">
                  Check your email and click the verification link. This ensures the security of your account.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Complete Security Setup</h3>
                <p className="text-gray-600">
                  Add two-factor authentication for enhanced security. This protects your earnings and client relationships.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start">
                <ApperIcon name="Info" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900">Pro Tip</h4>
                  <p className="text-blue-800 text-sm mt-1">
                    Use a professional email address when signing up. This builds trust with potential clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'profile-setup':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Setting Up Your Profile</h2>
            <p className="text-lg text-gray-600">
              Your profile is your storefront. Make it compelling and professional to attract quality clients.
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Headline</h3>
                <p className="text-gray-600">
                  Write a clear, specific headline that includes your main skills and target niche.
                </p>
                <div className="mt-2 p-3 bg-gray-50 rounded text-sm">
                  <strong>Example:</strong> "Full-Stack Developer | React & Node.js Expert | 5+ Years Experience"
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Portfolio Samples</h3>
                <p className="text-gray-600">
                  Upload 3-6 of your best work samples. Include variety to showcase your range of skills.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Skills & Tests</h3>
                <p className="text-gray-600">
                  Add relevant skills and consider taking Upwork skill tests to validate your expertise.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-start">
                <ApperIcon name="CheckCircle" className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-900">Success Tip</h4>
                  <p className="text-green-800 text-sm mt-1">
                    Profiles with professional photos get 5x more views. Use a clear, friendly headshot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'finding-jobs':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Finding the Right Jobs</h2>
            <p className="text-lg text-gray-600">
              Learn how to search effectively and identify jobs that match your skills and goals.
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Use Advanced Filters</h3>
                <p className="text-gray-600">
                  Filter by budget, experience level, client history, and payment verification to find quality opportunities.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Save Searches</h3>
                <p className="text-gray-600">
                  Create saved searches for your favorite job types and get email notifications for new matches.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Check Client Reviews</h3>
                <p className="text-gray-600">
                  Review the client's previous job history and feedback from other freelancers before applying.
                </p>
              </div>
            </div>
          </div>
        );

      case 'proposals':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Writing Winning Proposals</h2>
            <p className="text-lg text-gray-600">
              Your proposal is your chance to make a great first impression. Here's how to stand out.
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address Their Needs</h3>
                <p className="text-gray-600">
                  Show that you understand their project by addressing specific requirements mentioned in the job post.
                </p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Show Relevant Experience</h3>
                <p className="text-gray-600">
                  Highlight similar projects you've completed and include links to relevant portfolio samples.
                </p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ask Questions</h3>
                <p className="text-gray-600">
                  Show engagement by asking 1-2 clarifying questions about the project scope or timeline.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-start">
                <ApperIcon name="Lightbulb" className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-900">Writing Tip</h4>
                  <p className="text-yellow-800 text-sm mt-1">
                    Keep proposals concise but personal. Aim for 150-300 words that directly address their needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'interviews':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Acing Your Interviews</h2>
            <p className="text-lg text-gray-600">
              When clients are interested, they'll invite you to interview. Here's how to prepare and succeed.
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prepare Questions</h3>
                <p className="text-gray-600">
                  Come prepared with thoughtful questions about the project scope, timeline, and expectations.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Be Professional</h3>
                <p className="text-gray-600">
                  Respond promptly to interview invitations and be professional in all communications.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discuss Terms Clearly</h3>
                <p className="text-gray-600">
                  Be clear about your rates, availability, and any project requirements before accepting work.
                </p>
              </div>
            </div>
          </div>
        );

      case 'first-projects':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Succeeding on Your First Projects</h2>
            <p className="text-lg text-gray-600">
              Your first few projects are crucial for building your reputation. Here's how to excel from day one.
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Over-Communicate</h3>
                <p className="text-gray-600">
                  Keep clients updated on your progress and ask questions when you need clarification.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Deliver Quality Work</h3>
                <p className="text-gray-600">
                  Always deliver your best work, even on small projects. Your reputation depends on consistent quality.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Meet Deadlines</h3>
                <p className="text-gray-600">
                  Always deliver on time or communicate early if you'll need more time. Reliability is key.
                </p>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-start">
                <ApperIcon name="Heart" className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-900">Relationship Building</h4>
                  <p className="text-red-800 text-sm mt-1">
                    Great client relationships lead to repeat work and referrals. Treat every client like your most important one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Beginner's Guide for Freelancers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know to start your freelancing journey on Upwork, 
            from creating your account to landing your first projects.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Guide Sections</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <ApperIcon name={section.icon} className="h-4 w-4 mr-2" />
                    {section.title}
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link to="/signup">
                  <Button size="sm" className="w-full">
                    Get Started Now
                    <ApperIcon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            <div className="prose prose-lg max-w-none">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginnerGuide;