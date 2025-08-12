import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { Link } from "react-router-dom";

const EligibilityRequirements = () => {
  const generalRequirements = [
    {
      requirement: "Age Requirement",
      description: "Must be at least 18 years old to create an Upwork account",
      icon: "User",
      details: [
        "Legal age of majority in your jurisdiction",
        "Valid government-issued ID required",
        "Parental consent not accepted",
        "Age verification may be required"
      ]
    },
    {
      requirement: "Geographic Location",
      description: "Must be located in a supported country or region",
      icon: "Globe",
      details: [
        "Account registration based on IP location",
        "Some countries have service restrictions",
        "VPN usage may affect verification",
        "Regional compliance requirements apply"
      ]
    },
    {
      requirement: "Legal Authorization",
      description: "Must have legal right to work and enter contracts",
      icon: "FileCheck",
      details: [
        "Legal capacity to enter binding agreements",
        "Work authorization in your jurisdiction",
        "Tax compliance responsibilities",
        "Business registration may be required"
      ]
    },
    {
      requirement: "Payment Method",
      description: "Valid payment method for receiving funds",
      icon: "CreditCard",
      details: [
        "Bank account or supported payment service",
        "Identity verification for payments",
        "Tax forms may be required",
        "Compliance with financial regulations"
      ]
    }
  ];

  const restrictedCountries = [
    {
      region: "Currently Restricted",
      note: "These locations currently have limited or no access to Upwork",
      countries: [
        "Afghanistan", "Belarus", "Central African Republic", "Chad",
        "Cuba", "Democratic Republic of Congo", "Iran", "Iraq",
        "Libya", "Mali", "Myanmar", "North Korea", "Russia",
        "Somalia", "South Sudan", "Sudan", "Syria", "Venezuela",
        "Yemen"
      ],
      icon: "XCircle",
      color: "red"
    },
    {
      region: "Limited Access",
      note: "These locations may have restricted features or additional requirements",
      countries: [
        "China", "Crimea Region", "Donetsk", "Luhansk",
        "Some regions with ongoing sanctions"
      ],
      icon: "AlertTriangle",
      color: "yellow"
    }
  ];

  const verificationProcess = [
    {
      step: "Account Creation",
      description: "Create your account with accurate personal information",
      icon: "UserPlus",
      requirements: [
        "Valid email address",
        "Strong password",
        "Accurate personal details",
        "Profile photo recommended"
      ]
    },
    {
      step: "Identity Verification",
      description: "Verify your identity with government-issued documentation",
      icon: "Shield",
      requirements: [
        "Government-issued photo ID",
        "Proof of address (utility bill, bank statement)",
        "Clear, readable document photos",
        "Information must match profile"
      ]
    },
    {
      step: "Phone Verification",
      description: "Verify your phone number via SMS or voice call",
      icon: "Phone",
      requirements: [
        "Active mobile phone number",
        "Receive SMS verification code",
        "Phone number matches your location",
        "One phone per account"
      ]
    },
    {
      step: "Payment Setup",
      description: "Add and verify your payment method",
      icon: "CreditCard",
      requirements: [
        "Valid bank account or payment service",
        "Account holder name matches profile",
        "Tax information if required",
        "Minimum withdrawal thresholds"
      ]
    }
  ];

  const additionalRequirements = [
    {
      category: "Professional Requirements",
      icon: "Briefcase",
      items: [
        "Demonstrate relevant skills and experience",
        "Create a complete, professional profile",
        "Provide work samples or portfolio",
        "Pass relevant skill tests (recommended)",
        "Maintain high-quality work standards",
        "Follow Upwork's Terms of Service"
      ]
    },
    {
      category: "Communication Standards",
      icon: "MessageCircle",
      items: [
        "Professional communication skills",
        "Respond to clients promptly",
        "English proficiency (for most projects)",
        "Clear project proposal writing",
        "Regular progress updates",
        "Respectful client interactions"
      ]
    },
    {
      category: "Technical Requirements",
      icon: "Monitor",
      items: [
        "Reliable internet connection",
        "Computer or mobile device access",
        "Email access for notifications",
        "Time tracking software compatibility",
        "Video calling capability",
        "File sharing and collaboration tools"
      ]
    }
  ];

  const complianceNotes = [
    {
      title: "Sanctions Compliance",
      description: "Upwork complies with international sanctions and trade restrictions",
      icon: "Scale",
      details: [
        "Regular screening against sanctions lists",
        "Automatic account restrictions for sanctioned individuals",
        "Geographic restrictions based on government policies",
        "Compliance with OFAC, UN, and EU sanctions"
      ]
    },
    {
      title: "Data Protection",
      description: "Account creation subject to data protection and privacy laws",
      icon: "Lock",
      details: [
        "GDPR compliance for EU residents",
        "CCPA compliance for California residents",
        "Secure data handling and storage",
        "Right to data portability and deletion"
      ]
    },
    {
      title: "Tax Compliance",
      description: "Users responsible for tax obligations in their jurisdiction",
      icon: "Calculator",
      details: [
        "Report income according to local laws",
        "Upwork may provide tax forms (1099, etc.)",
        "International tax treaty considerations",
        "Consult tax professionals as needed"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="CheckCircle" className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Eligibility Requirements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Understand the age, regional, and legal requirements needed to join Upwork. 
              Ensure you meet all eligibility criteria before creating your account.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg">
                  Check My Eligibility
                  <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Contact Support
                <ApperIcon name="HelpCircle" className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* General Requirements */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              General Eligibility Requirements
            </h2>
            <p className="text-lg text-gray-600">
              Basic requirements that all Upwork users must meet
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {generalRequirements.map((req, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ApperIcon name={req.icon} className="h-5 w-5 text-orange-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {req.requirement}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {req.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {req.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          {detail}
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

      {/* Geographic Restrictions */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Geographic Restrictions
            </h2>
            <p className="text-lg text-gray-600">
              Current restrictions based on location and compliance requirements
            </p>
          </div>

          <div className="space-y-8">
            {restrictedCountries.map((region, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className={`p-4 ${
                  region.color === 'red' ? 'bg-red-50 border-l-4 border-red-500' :
                  'bg-yellow-50 border-l-4 border-yellow-500'
                }`}>
                  <div className="flex items-center gap-3">
                    <ApperIcon 
                      name={region.icon} 
                      className={`h-6 w-6 ${
                        region.color === 'red' ? 'text-red-600' : 'text-yellow-600'
                      }`} 
                    />
                    <div>
                      <h3 className={`text-lg font-semibold ${
                        region.color === 'red' ? 'text-red-900' : 'text-yellow-900'
                      }`}>
                        {region.region}
                      </h3>
                      <p className={`text-sm ${
                        region.color === 'red' ? 'text-red-700' : 'text-yellow-700'
                      }`}>
                        {region.note}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {region.countries.map((country, countryIndex) => (
                      <div key={countryIndex} className="text-sm text-gray-600 py-1">
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <ApperIcon name="Info" className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800">
                <strong>Note:</strong> Geographic restrictions can change based on evolving regulations, 
                sanctions, and compliance requirements. Check current status before creating an account.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Account Verification Process
            </h2>
            <p className="text-lg text-gray-600">
              Steps to verify your identity and activate your account
            </p>
          </div>

          <div className="space-y-8">
            {verificationProcess.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <ApperIcon name={step.icon} className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.step}
                    </h3>
                    <div className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                      Step {index + 1}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-2">
                    {step.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center text-sm text-gray-600">
                        <ApperIcon name="ArrowRight" className="h-4 w-4 text-green-500 mr-2" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Requirements */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Requirements
            </h2>
            <p className="text-lg text-gray-600">
              Professional and technical standards for success on Upwork
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {additionalRequirements.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <ApperIcon name={category.icon} className="h-6 w-6 text-purple-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                      <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Information */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compliance & Legal Considerations
            </h2>
            <p className="text-lg text-gray-600">
              Important legal and compliance information for all users
            </p>
          </div>

          <div className="space-y-8">
            {complianceNotes.map((note, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ApperIcon name={note.icon} className="h-5 w-5 text-indigo-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {note.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {note.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-2">
                      {note.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <ApperIcon name="Info" className="h-4 w-4 text-indigo-500 mr-2" />
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

      {/* CTA Section */}
      <div className="bg-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Upwork?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            If you meet all the eligibility requirements, start your journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary">
                Create Your Account
                <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
              Have Questions? Contact Us
              <ApperIcon name="MessageCircle" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityRequirements;