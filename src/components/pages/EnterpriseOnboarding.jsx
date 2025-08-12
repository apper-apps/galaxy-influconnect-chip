import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { Link } from "react-router-dom";

const EnterpriseOnboarding = () => {
  const onboardingTasks = [
    {
      phase: "Legal & Compliance",
      title: "Contract Review & Legal Setup",
      description: "Complete legal documentation and compliance requirements for enterprise-level engagements",
      icon: "FileCheck",
      tasks: [
        "Master Service Agreement (MSA) review and signing",
        "Data Processing Agreement (DPA) execution",
        "Security and privacy compliance verification",
        "Intellectual property rights documentation",
        "Liability and insurance requirements review",
        "Regulatory compliance assessment (GDPR, CCPA, etc.)"
      ],
      timeline: "2-4 weeks",
      stakeholders: ["Legal Team", "Procurement", "Compliance Officer", "IT Security"]
    },
    {
      phase: "Technical Integration", 
      title: "Systems Integration & Security",
      description: "Set up secure integrations and technical infrastructure for enterprise operations",
      icon: "Settings",
      tasks: [
        "Single Sign-On (SSO) configuration",
        "API access and integration setup",
        "VPN and network security configuration",
        "User access management and role assignments",
        "Data backup and recovery procedures",
        "Integration with existing HR/payroll systems"
      ],
      timeline: "1-3 weeks",
      stakeholders: ["IT Department", "DevOps Team", "Security Team", "System Administrators"]
    },
    {
      phase: "Financial Setup",
      title: "Billing & Payment Configuration",
      description: "Configure enterprise billing processes and payment workflows",
      icon: "CreditCard",
      tasks: [
        "Corporate billing account setup",
        "Purchase order (PO) system integration",
        "Multi-currency payment configuration",
        "Expense reporting and tracking setup",
        "Budget allocation and approval workflows",
        "Invoice automation and processing rules"
      ],
      timeline: "1-2 weeks",
      stakeholders: ["Finance Team", "Accounts Payable", "Procurement", "Budget Managers"]
    },
    {
      phase: "Team Onboarding",
      title: "User Training & Account Management",
      description: "Train team members and establish governance processes",
      icon: "Users",
      tasks: [
        "Admin and user account provisioning",
        "Role-based access control implementation",
        "Team training sessions and workshops",
        "Best practices documentation creation",
        "Governance policies establishment",
        "Change management process setup"
      ],
      timeline: "2-3 weeks",
      stakeholders: ["HR Team", "Department Managers", "Project Leads", "Training Coordinators"]
    }
  ];

  const complianceAreas = [
    {
      area: "Data Security & Privacy",
      icon: "Shield",
      requirements: [
        "GDPR compliance for EU data processing",
        "CCPA compliance for California residents",
        "SOC 2 Type II security standards",
        "Data encryption in transit and at rest",
        "Regular security audits and assessments",
        "Incident response procedures"
      ]
    },
    {
      area: "Financial & Legal",
      icon: "Scale",
      requirements: [
        "Master Service Agreement (MSA)",
        "Statement of Work (SOW) templates",
        "Intellectual property assignments",
        "Confidentiality agreements (NDAs)",
        "Liability and indemnification clauses",
        "Termination and dispute resolution terms"
      ]
    },
    {
      area: "Operational Compliance",
      icon: "CheckSquare",
      requirements: [
        "Vendor risk assessment procedures",
        "Background check requirements",
        "Quality assurance standards",
        "Performance monitoring and reporting",
        "Change management protocols",
        "Escalation and support procedures"
      ]
    }
  ];

  const enterpriseFeatures = [
    {
      feature: "Advanced Security",
      description: "Enterprise-grade security controls and compliance measures",
      icon: "Lock",
      benefits: [
        "SSO integration with major identity providers",
        "Advanced encryption and data protection",
        "Compliance with industry standards",
        "Regular security audits and monitoring"
      ]
    },
    {
      feature: "Dedicated Support",
      description: "Priority support with dedicated account management",
      icon: "Headphones",
      benefits: [
        "Dedicated Customer Success Manager",
        "Priority technical support",
        "Custom onboarding and training",
        "24/7 enterprise support availability"
      ]
    },
    {
      feature: "Advanced Analytics",
      description: "Comprehensive reporting and analytics dashboard",
      icon: "BarChart3",
      benefits: [
        "Custom reporting and dashboards",
        "Spend analytics and cost optimization",
        "Performance metrics and KPIs",
        "Integration with BI tools"
      ]
    },
    {
      feature: "Talent Curation",
      description: "Access to pre-vetted, enterprise-ready talent",
      icon: "Users",
      benefits: [
        "Curated talent pools",
        "Pre-screened and verified freelancers",
        "Talent matching services",
        "Enterprise project capabilities"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="Building" className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Onboarding Tasks
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Complete guide to enterprise-level legal, compliance, and technical requirements 
              for large-scale Upwork implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enterprise-get-started">
                <Button size="lg">
                  Get Started with Enterprise
                  <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Contact Enterprise Sales
                <ApperIcon name="Phone" className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Phases */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Onboarding Phases
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive checklist for enterprise implementation
            </p>
          </div>

          <div className="space-y-8">
            {onboardingTasks.map((task, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                        <ApperIcon name={task.icon} className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                        <div>
                          <div className="text-sm text-indigo-600 font-semibold mb-1">
                            {task.phase}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {task.title}
                          </h3>
                          <p className="text-gray-600">
                            {task.description}
                          </p>
                        </div>
                        
                        <div className="lg:text-right">
                          <div className="text-sm text-gray-500 mb-1">Timeline</div>
                          <div className="text-sm font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded">
                            {task.timeline}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">Required Tasks</h4>
                          <ul className="space-y-2">
                            {task.tasks.map((taskItem, taskIndex) => (
                              <li key={taskIndex} className="flex items-start text-sm text-gray-600">
                                <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                {taskItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Stakeholders</h4>
                          <div className="flex flex-wrap gap-2">
                            {task.stakeholders.map((stakeholder, stakeholderIndex) => (
                              <span
                                key={stakeholderIndex}
                                className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                              >
                                {stakeholder}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Areas */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compliance Requirements
            </h2>
            <p className="text-lg text-gray-600">
              Key compliance areas for enterprise clients
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <ApperIcon name={area.icon} className="h-6 w-6 text-red-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {area.area}
                </h3>
                
                <ul className="space-y-2">
                  {area.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                      <ApperIcon name="AlertTriangle" className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Features */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Features & Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Advanced capabilities for large organizations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ApperIcon name={feature.icon} className="h-5 w-5 text-purple-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.feature}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          {benefit}
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

      {/* Timeline Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Typical Enterprise Onboarding Timeline
            </h2>
            <p className="text-lg text-gray-600">
              Expected timeframes for complete enterprise setup
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div>
                  <div className="font-semibold text-gray-900">Initial Assessment & Planning</div>
                  <div className="text-sm text-gray-600">Requirements gathering and stakeholder alignment</div>
                </div>
                <div className="text-sm font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded">
                  1-2 weeks
                </div>
              </div>
              
              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div>
                  <div className="font-semibold text-gray-900">Legal & Compliance Review</div>
                  <div className="text-sm text-gray-600">Contract negotiation and legal documentation</div>
                </div>
                <div className="text-sm font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded">
                  2-4 weeks
                </div>
              </div>
              
              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div>
                  <div className="font-semibold text-gray-900">Technical Implementation</div>
                  <div className="text-sm text-gray-600">System integration and security setup</div>
                </div>
                <div className="text-sm font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded">
                  1-3 weeks
                </div>
              </div>
              
              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div>
                  <div className="font-semibold text-gray-900">User Training & Launch</div>
                  <div className="text-sm text-gray-600">Team onboarding and go-live preparation</div>
                </div>
                <div className="text-sm font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded">
                  2-3 weeks
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="font-bold text-gray-900 text-lg">Total Timeline</div>
                  <div className="text-sm text-gray-600">Complete enterprise onboarding</div>
                </div>
                <div className="text-lg font-bold text-indigo-600 bg-indigo-100 px-4 py-2 rounded">
                  6-12 weeks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Enterprise Implementation?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Our enterprise team will guide you through every step of the onboarding process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Enterprise Demo
              <ApperIcon name="Calendar" className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
              Download Enterprise Guide
              <ApperIcon name="Download" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseOnboarding;