import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { Link } from "react-router-dom";

const ConnectsGuide = () => {
  const connectsFAQ = [
    {
      question: "What are Connects?",
      answer: "Connects are tokens that freelancers use to submit proposals on Upwork. Each job application requires a certain number of Connects, typically 1-6 depending on the project value."
    },
    {
      question: "How many free Connects do I get?",
      answer: "New freelancers receive 10 free Connects when they join Upwork. You can also earn additional free Connects through various activities."
    },
    {
      question: "How much do Connects cost?",
      answer: "You can purchase additional Connects for $0.15 each. They're sold in bundles, with discounts available for larger purchases."
    },
    {
      question: "When do I get Connects back?",
      answer: "You get your Connects back if: you're hired for the job, the client cancels the job, or you withdraw your proposal within 24 hours of submitting it."
    },
    {
      question: "How can I earn free Connects?",
      answer: "You can earn free Connects by: completing your profile (10 Connects), taking skill tests, being a Plus member (70 monthly Connects), and maintaining good performance metrics."
    },
    {
      question: "How many Connects does each proposal cost?",
      answer: "Most proposals cost 1-2 Connects, but some high-budget projects (typically $500+) may cost 4-6 Connects to apply."
    }
  ];

  const earnConnectsWays = [
    {
      method: "Complete Your Profile",
      connects: "10",
      description: "Add all required sections including overview, skills, portfolio, and employment history",
      icon: "User",
      difficulty: "Easy"
    },
    {
      method: "Upwork Plus Membership",
      connects: "70/month",
      description: "Plus membership includes 70 Connects monthly, plus other premium features",
      icon: "Crown",
      difficulty: "Paid"
    },
    {
      method: "Skill Tests",
      connects: "1-2 each",
      description: "Take and pass Upwork skill tests to demonstrate your expertise",
      icon: "Award",
      difficulty: "Medium"
    },
    {
      method: "Client Feedback",
      connects: "Variable",
      description: "Maintain high ratings and receive positive feedback from clients",
      icon: "Star",
      difficulty: "Ongoing"
    }
  ];

  const usageStrategies = [
    {
      title: "Quality Over Quantity",
      description: "Apply to fewer jobs with higher-quality, personalized proposals rather than mass-applying",
      icon: "Target",
      tips: [
        "Read job posts thoroughly",
        "Only apply to jobs you're qualified for",
        "Customize each proposal",
        "Show genuine interest in the project"
      ]
    },
    {
      title: "Strategic Timing",
      description: "Apply to jobs when you're most likely to be noticed by clients",
      icon: "Clock",
      tips: [
        "Apply within the first few hours of posting",
        "Avoid applying to very old job posts",
        "Check job posting patterns in your niche",
        "Be among the first 10-20 applicants"
      ]
    },
    {
      title: "Profile Optimization",
      description: "A strong profile means fewer Connects needed as clients may invite you directly",
      icon: "TrendingUp",
      tips: [
        "Keep your profile up-to-date",
        "Add new skills and portfolio pieces",
        "Maintain high job success score",
        "Get client testimonials"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="Zap" className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Guide to Upwork Connects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to know about Connects: how they work, how to earn them, 
              and how to use them strategically to grow your freelancing business.
            </p>
            <Link to="/signup">
              <Button size="lg">
                Get Started with 10 Free Connects
                <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* What are Connects */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Understanding Connects
            </h2>
            <p className="text-lg text-gray-600">
              Connects are your gateway to opportunities on Upwork
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ApperIcon name="Coins" className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Virtual Currency</h3>
                    <p className="text-gray-600">
                      Connects are Upwork's virtual currency that freelancers use to submit job proposals. 
                      Think of them as tokens that give you access to apply for projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ApperIcon name="Shield" className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Control</h3>
                    <p className="text-gray-600">
                      The Connects system helps maintain proposal quality by encouraging freelancers 
                      to apply thoughtfully rather than mass-applying to every job.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ApperIcon name="RotateCcw" className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Refundable</h3>
                    <p className="text-gray-600">
                      You get your Connects back when you're hired, when clients cancel jobs, 
                      or when you withdraw proposals within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Connects Cost Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Entry-level jobs</span>
                  <span className="font-semibold text-gray-900">1 Connect</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Intermediate jobs</span>
                  <span className="font-semibold text-gray-900">2 Connects</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Expert jobs</span>
                  <span className="font-semibold text-gray-900">2-4 Connects</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">High-budget projects ($500+)</span>
                  <span className="font-semibold text-gray-900">4-6 Connects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Earn Connects */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Earn Free Connects
            </h2>
            <p className="text-lg text-gray-600">
              Multiple ways to get Connects without spending money
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earnConnectsWays.map((way, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <ApperIcon name={way.icon} className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-primary-600">
                    {way.connects}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {way.method}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3">
                  {way.description}
                </p>
                
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  way.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  way.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  way.difficulty === 'Paid' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {way.difficulty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Usage Strategies */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Strategic Usage Tips
            </h2>
            <p className="text-lg text-gray-600">
              Make every Connect count with these proven strategies
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {usageStrategies.map((strategy, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ApperIcon name={strategy.icon} className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {strategy.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {strategy.description}
                </p>
                
                <div className="space-y-2">
                  {strategy.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-center text-sm text-gray-600">
                      <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about Connects
            </p>
          </div>

          <div className="space-y-6">
            {connectsFAQ.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
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
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Use Your Connects Wisely?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your freelancing journey with 10 free Connects and learn as you grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary">
                Sign Up & Get 10 Free Connects
                <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/freelancer-how-it-works">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Learn How Upwork Works
                <ApperIcon name="BookOpen" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectsGuide;