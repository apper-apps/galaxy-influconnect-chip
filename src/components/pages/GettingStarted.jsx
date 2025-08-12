import React, { useState } from "react";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import Select from "@/components/atoms/Select";
import Button from "@/components/atoms/Button";
import Textarea from "@/components/atoms/Textarea";
import Input from "@/components/atoms/Input";

const GettingStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState({
    title: '',
    description: '',
    skills: [],
    hourlyRate: '',
    category: '',
    experience: ''
  });

  const totalSteps = 4;

  const categories = [
    'Web Development',
    'Mobile Development',
    'Design & Creative',
    'Writing & Translation',
    'Marketing & Sales',
    'Admin & Customer Support',
    'Finance & Accounting',
    'Engineering & Architecture'
  ];

  const experiencelevels = [
    'Entry Level',
    'Intermediate',
    'Expert'
  ];

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      toast.success('Step completed!');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast.success('Profile setup complete! Welcome to Upwork!');
    // Redirect to dashboard
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 2000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Let's start with your professional headline
              </h2>
              <p className="text-gray-600 mb-6">
                This is one of the first things clients will see when they view your profile
              </p>
              <Input
                label="Professional Title"
                placeholder="e.g., Full-Stack Developer | WordPress Expert"
                value={profileData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="text-lg"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Tell us about your expertise
              </h2>
              <p className="text-gray-600 mb-6">
                Help clients understand what you do and how you can help them
              </p>
              <div className="space-y-4">
                <Select
                  label="Primary Category"
                  value={profileData.category}
                  onChange={(value) => handleInputChange('category', value)}
                  options={categories.map(cat => ({ value: cat, label: cat }))}
                />
<Select
                  label="Experience Level"
                  value={profileData.experience}
                  onChange={(value) => handleInputChange('experience', value)}
                  options={experiencelevels.map(level => ({ value: level, label: level }))}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Write a compelling overview
              </h2>
              <p className="text-gray-600 mb-6">
                Describe your experience, skills, and what makes you great at what you do
              </p>
              <Textarea
                label="Professional Overview"
                placeholder="Describe your experience, skills, and what clients can expect when working with you..."
                value={profileData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={6}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Set your hourly rate
              </h2>
              <p className="text-gray-600 mb-6">
                You can adjust this rate for individual projects or clients
              </p>
              <div className="max-w-xs">
                <Input
                  label="Hourly Rate (USD)"
                  type="number"
                  placeholder="25"
                  value={profileData.hourlyRate}
                  onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                  prefix="$"
                  suffix="/hr"
                />
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <ApperIcon name="Info" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-blue-800 font-medium">Keep in mind</p>
                    <p className="text-blue-700">
                      This is the rate clients will see. Upwork service fees are deducted from your earnings.
                    </p>
                  </div>
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Complete Your Profile
            </h1>
            <div className="text-sm text-gray-500">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-12">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            <ApperIcon name="ArrowLeft" className="mr-2 h-4 w-4" />
            Back
          </Button>

          {currentStep < totalSteps ? (
            <Button onClick={handleNext}>
              Next
              <ApperIcon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit}>
              Complete Setup
              <ApperIcon name="Check" className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Need help getting started?
          </h3>
          <p className="text-gray-600 mb-4">
            Our support team is here to help you create a winning profile
          </p>
          <Button variant="outline" size="sm">
            <ApperIcon name="MessageCircle" className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;