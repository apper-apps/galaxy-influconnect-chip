import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Browse & Search",
      description: "Explore thousands of verified influencers across all platforms and categories. Use our advanced filters to find the perfect match.",
      icon: "Search",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02", 
      title: "Connect & Discuss",
      description: "Reach out to influencers directly through our messaging system. Discuss your campaign goals and requirements.",
      icon: "MessageCircle",
      color: "from-green-500 to-green-600"
    },
    {
      number: "03",
      title: "Book & Collaborate",
      description: "Secure your booking and track progress. Work together to create authentic content that resonates with your audience.",
      icon: "Calendar",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "04",
      title: "Launch & Succeed",
      description: "Watch your content go live and track its performance. Build lasting relationships for future collaborations.",
      icon: "TrendingUp",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How InfluConnect Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From discovery to delivery, our platform makes it easy to connect with 
            the right influencers and create successful campaigns.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 z-0">
                  <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-primary-400 rounded-full"></div>
                </div>
              )}
              
              <div className="relative bg-white rounded-xl shadow-premium p-6 text-center h-full hover:shadow-hover transition-shadow duration-300">
                {/* Step Number */}
                <div className="text-sm font-bold text-primary-600 mb-4">
                  STEP {step.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <ApperIcon name={step.icon} className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Campaign?
          </h3>
          <p className="text-primary-100 mb-6 text-lg">
            Join thousands of brands already using InfluConnect to grow their reach
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg">
              <ApperIcon name="Search" className="h-5 w-5 mr-2" />
              Find Influencers
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              <ApperIcon name="Users" className="h-5 w-5 mr-2" />
              Become an Influencer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;