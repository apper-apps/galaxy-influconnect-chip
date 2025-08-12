import HowItWorksSection from "@/components/organisms/HowItWorksSection";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const HowItWorks = () => {
  const features = [
    {
      title: "Advanced Search & Filtering",
      description: "Find exactly what you're looking for with our powerful search engine that filters by location, category, follower count, engagement rate, and budget.",
      icon: "Search",
      benefits: ["Smart category matching", "Real-time availability", "Budget optimization", "Location-based results"]
    },
    {
      title: "Secure Messaging System", 
      description: "Communicate directly with influencers through our built-in messaging system. Share briefs, discuss ideas, and build relationships.",
      icon: "MessageSquare",
      benefits: ["Direct communication", "File sharing", "Project discussions", "24/7 availability"]
    },
    {
      title: "Project Management Tools",
      description: "Track your campaigns from start to finish with our comprehensive project management suite designed for influencer collaborations.",
      icon: "CheckSquare",
      benefits: ["Milestone tracking", "Deadline management", "Approval workflows", "Performance metrics"]
    },
    {
      title: "Safe & Secure Payments",
      description: "Our escrow system ensures safe transactions for both brands and influencers, with automatic releases upon milestone completion.",
      icon: "Shield",
      benefits: ["Escrow protection", "Milestone payments", "Dispute resolution", "Transaction history"]
    }
  ];

  const faqs = [
    {
      question: "How do I get started as a brand?",
      answer: "Simply create your account, browse our extensive database of influencers, and start reaching out. You can filter by category, location, follower count, and budget to find the perfect match."
    },
    {
      question: "How do influencers get verified?",
      answer: "Our verification process includes identity confirmation, social media account verification, and portfolio review. Verified influencers get a special badge and priority placement in search results."
    },
    {
      question: "What's included in the platform fees?",
      answer: "Our platform fee covers secure messaging, payment processing, dispute resolution, customer support, and access to our project management tools. No hidden costs."
    },
    {
      question: "How do payments work?",
      answer: "Payments are held in escrow and released automatically when project milestones are met. This protects both brands and influencers throughout the collaboration process."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How <span className="gradient-text">InfluConnect</span> Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The complete guide to connecting brands with influencers through our 
            streamlined platform designed for successful collaborations.
          </p>
          <Button size="lg">
            <ApperIcon name="Play" className="h-5 w-5 mr-2" />
            Watch Demo Video
          </Button>
        </div>
      </div>

      {/* How It Works Process */}
      <HowItWorksSection />

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platform Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to run successful influencer campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={feature.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <ApperIcon name={feature.icon} className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-sm text-gray-600">
                        <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about using InfluConnect
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-premium p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of successful brands and influencers already using InfluConnect
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg">
              <ApperIcon name="Search" className="h-5 w-5 mr-2" />
              Browse Influencers
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              <ApperIcon name="Users" className="h-5 w-5 mr-2" />
              Become an Influencer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;