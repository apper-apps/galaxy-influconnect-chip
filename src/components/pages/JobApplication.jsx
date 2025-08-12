import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { Link } from "react-router-dom";

const JobApplication = () => {
  const stages = [
    {
      stage: "Discovery",
      title: "Search & Filter",
      description: "Find jobs that match your skills and interests",
      icon: "Search",
      details: [
        "Use advanced search filters",
        "Save searches for regular checking",
        "Set up job alerts for new opportunities",
        "Review client history and ratings"
      ]
    },
    {
      stage: "Application",
      title: "Submit Proposal",
      description: "Craft compelling proposals that stand out",
      icon: "FileText",
      details: [
        "Read job requirements carefully",
        "Write personalized cover letters",
        "Attach relevant portfolio samples",
        "Set competitive but fair rates"
      ]
    },
    {
      stage: "Selection",
      title: "Client Review",
      description: "Clients review proposals and shortlist candidates",
      icon: "Users",
      details: [
        "Clients evaluate your proposal",
        "Profile strength influences decisions",
        "Previous work samples are reviewed",
        "Ratings and reviews matter"
      ]
    },
    {
      stage: "Interview",
      title: "Interview Process",
      description: "Connect with interested clients",
      icon: "MessageCircle",
      details: [
        "Respond promptly to interview invitations",
        "Prepare thoughtful questions",
        "Clarify project requirements",
        "Discuss timeline and budget"
      ]
    },
    {
      stage: "Offer",
      title: "Job Offer",
      description: "Receive and evaluate job offers",
      icon: "Award",
      details: [
        "Review contract terms carefully",
        "Negotiate if necessary",
        "Accept offers that align with your goals",
        "Decline professionally if not a good fit"
      ]
    },
    {
      stage: "Onboarding",
      title: "Project Start",
      description: "Begin working with your new client",
      icon: "Play",
      details: [
        "Set clear expectations and milestones",
        "Establish communication preferences",
        "Create a project timeline",
        "Start building a great working relationship"
      ]
    }
  ];

  const tips = [
    {
      title: "Optimize Your Search",
      icon: "Target",
      content: "Use specific keywords related to your skills and filter by client preferences to find the best matches."
    },
    {
      title: "Quality Over Quantity",
      icon: "Star",
      content: "Submit fewer, high-quality proposals rather than many generic ones. Personalization is key."
    },
    {
      title: "Build Relationships",
      icon: "Heart",
      content: "Focus on building long-term relationships with clients rather than just completing one-off projects."
    },
    {
      title: "Track Your Success",
      icon: "BarChart3",
      content: "Monitor your proposal success rate and adjust your approach based on what works best."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Job Application Process
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Understand the complete journey from discovering opportunities to landing your next project. 
              Master each stage to increase your success rate.
            </p>
            <Link to="/beginner-guide">
              <Button size="lg">
                Read Full Beginner's Guide
                <ApperIcon name="BookOpen" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Application Stages */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              6 Stages of the Application Process
            </h2>
            <p className="text-lg text-gray-600">
              From search to project start - here's what to expect at each stage
            </p>
          </div>

          <div className="space-y-8">
            {stages.map((stage, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < stages.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-200 z-0"></div>
                )}
                
                <div className="flex items-start gap-6">
                  {/* Stage Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center relative z-10">
                      <ApperIcon name={stage.icon} className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Stage Content */}
                  <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-sm text-primary-600 font-semibold bg-primary-100 px-2 py-1 rounded">
                        {stage.stage}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {stage.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {stage.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-2">
                      {stage.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          {detail}
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

      {/* Success Tips */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tips for Success
            </h2>
            <p className="text-lg text-gray-600">
              Proven strategies to improve your application success rate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ApperIcon name={tip.icon} className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Typical Success Metrics
            </h2>
            <p className="text-lg text-gray-600">
              What you can expect as you build your freelancing career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">5-15%</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Proposal Success Rate</div>
              <p className="text-gray-600 text-sm">
                New freelancers typically see this range, improving with experience
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">2-7 days</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Average Response Time</div>
              <p className="text-gray-600 text-sm">
                How long clients typically take to respond to proposals
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">3-5</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Proposals to Land First Job</div>
              <p className="text-gray-600 text-sm">
                Average number of proposals before getting your first project
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Applying for Jobs?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Put your knowledge into practice and start building your freelancing career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary">
                Create Your Account
                <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/connects-guide">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600">
                Learn About Connects
                <ApperIcon name="HelpCircle" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;