import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import ApperIcon from "@/components/ApperIcon";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const stats = [
    { value: "10K+", label: "Active Influencers" },
    { value: "500+", label: "Brands Served" },
    { value: "50K+", label: "Campaigns Completed" },
    { value: "4.9/5", label: "Average Rating" }
  ];

  return (
<section className="relative overflow-hidden min-h-screen flex items-center shadow-2xl">
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Enhanced Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A347FF]/95 via-[#8B35E6]/90 to-[#5B1CE6]/95 animate-gradient-shift"></div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="hero-bg-pattern"></div>
        </div>
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-primary-900/30"></div>
      </div>
      
      {/* Floating Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-float-1"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-200/60 rounded-full animate-float-2"></div>
        <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-white/50 rounded-full animate-float-3"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-primary-300/40 rounded-full animate-float-4"></div>
        <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-white/60 rounded-full animate-float-5"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary-100/50 rounded-full animate-float-6"></div>
      </div>
      
{/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40 z-10">
        <div className="text-center">
          {/* Main Heading with Enhanced Animation */}
          <div className="mb-12 animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
              Connect with{" "}
              <div className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-pulse-glow">
                  Top Influencers
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 blur-lg opacity-40 animate-pulse"></div>
              </div>
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto rounded-full animate-scale-in shadow-lg"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-200 font-light">
            The world's most innovative marketplace connecting brands with authentic social media influencers. 
            <span className="text-yellow-200 font-medium">Create campaigns that inspire.</span>
          </p>

          {/* Enhanced Search Bar */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-16 animate-slide-up animation-delay-400">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative flex flex-col sm:flex-row gap-4 p-3 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20">
                <div className="flex-1 relative">
                  <ApperIcon 
                    name="Search" 
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 transition-colors group-focus-within:text-primary-600" 
                  />
                  <input
                    type="text"
                    placeholder="Search by category, platform, or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-6 py-4 text-lg border-0 focus:ring-0 focus:outline-none placeholder-gray-500 bg-transparent rounded-lg"
                  />
                </div>
                <Button type="submit" size="lg" className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  <ApperIcon name="Search" className="h-5 w-5 mr-2" />
                  Find Influencers
                </Button>
              </div>
            </div>
          </form>

          {/* Enhanced Quick Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-slide-up animation-delay-600">
            {["Fashion", "Tech", "Food", "Travel", "Fitness"].map((category, index) => (
              <button
                key={category}
                onClick={() => navigate(`/browse?category=${category}`)}
                className="group relative px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white hover:text-primary-700 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{category}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </button>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
<div className="flex flex-col sm:flex-row justify-center gap-8 mb-24 animate-slide-up animation-delay-800">
            <Button 
              size="xl" 
              onClick={() => navigate("/browse")}
              className="relative overflow-hidden bg-white text-[#A347FF] hover:bg-gray-50 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-glow transform hover:scale-110 transition-all duration-300 rounded-2xl"
            >
              <span className="relative z-10 flex items-center">
                <ApperIcon name="Users" className="h-6 w-6 mr-4 text-[#A347FF]" />
                Find Influencers
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              onClick={() => navigate("/how-it-works")}
              className="border-3 border-white text-white hover:bg-white hover:text-[#A347FF] px-12 py-6 text-xl font-bold backdrop-blur-sm shadow-2xl hover:shadow-glow transform hover:scale-110 transition-all duration-300 rounded-2xl hover:border-white"
            >
              <ApperIcon name="Play" className="h-6 w-6 mr-4" />
              Become an Influencer
            </Button>
          </div>

          {/* Enhanced Stats with Animations */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up animation-delay-1000">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative mb-4">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="text-white/80 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full opacity-60 animate-bounce-gentle backdrop-blur-sm border border-white/10"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-full opacity-50 animate-pulse-slow backdrop-blur-sm"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-primary-400/20 rounded-full opacity-40 animate-bounce-gentle backdrop-blur-sm"></div>
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-gradient-to-br from-white/15 to-primary-200/15 rounded-full opacity-45 animate-spin-slow backdrop-blur-sm"></div>
      <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-gradient-to-br from-pink-300/15 to-yellow-300/15 rounded-full opacity-35 animate-pulse backdrop-blur-sm"></div>
    </section>
  );
};

export default HeroSection;