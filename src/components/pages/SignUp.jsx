import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { toast } from "react-toastify";

const SignUp = () => {
  const [userType, setUserType] = useState(null);

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    toast.success(`Welcome! Let's set up your ${type} account`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join as a Client or Freelancer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose how you'd like to get started on Upwork and we'll help you create the perfect account
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Client Option */}
          <div 
            className={`relative p-8 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
              userType === 'client' 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
            }`}
            onClick={() => handleUserTypeSelect('client')}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Briefcase" className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                I'm a Client
              </h3>
              <p className="text-gray-600 mb-4">
                I'm looking to hire freelancers for my projects
              </p>
              <div className="text-left space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                  Post jobs and hire talent
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                  Browse freelancer profiles
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                  Access Project Catalog
                </div>
              </div>
            </div>
            {userType === 'client' && (
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <ApperIcon name="Check" className="h-4 w-4 text-white" />
                </div>
              </div>
            )}
          </div>

          {/* Freelancer Option */}
          <div 
            className={`relative p-8 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
              userType === 'freelancer' 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
            }`}
            onClick={() => handleUserTypeSelect('freelancer')}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="User" className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                I'm a Freelancer
              </h3>
              <p className="text-gray-600 mb-4">
                I'm looking for work opportunities
              </p>
              <div className="text-left space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                  Apply to job posts
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                  Create a professional profile
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ApperIcon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                  Get paid securely
                </div>
              </div>
            </div>
            {userType === 'freelancer' && (
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <ApperIcon name="Check" className="h-4 w-4 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <Button
            size="lg"
            disabled={!userType}
            className="px-12"
            onClick={() => {
              if (userType === 'freelancer') {
                window.location.href = '/getting-started';
              } else {
                window.location.href = '/client-onboarding';
              }
            }}
          >
            {userType ? `Create ${userType} Account` : 'Select Account Type'}
            <ApperIcon name="ArrowRight" className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Login Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;