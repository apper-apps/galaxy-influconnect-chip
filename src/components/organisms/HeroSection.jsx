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
<section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="hero-bg-image"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-500/70 to-primary-400/60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect with Top{" "}
            <span className="gradient-text">Influencers</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The premier marketplace for brands to discover, hire, and collaborate with 
            social media influencers across all platforms.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-xl shadow-premium">
              <div className="flex-1 relative">
                <ApperIcon 
                  name="Search" 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
                />
                <input
                  type="text"
                  placeholder="Search by category, platform, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-lg border-0 focus:ring-0 focus:outline-none placeholder-gray-500"
                />
              </div>
              <Button type="submit" size="lg" className="px-8">
                <ApperIcon name="Search" className="h-5 w-5 mr-2" />
                Find Influencers
              </Button>
            </div>
          </form>

          {/* Quick Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["Fashion", "Tech", "Food", "Travel", "Fitness"].map((category) => (
              <button
                key={category}
                onClick={() => navigate(`/browse?category=${category}`)}
                className="px-4 py-2 bg-white text-primary-700 rounded-full border border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-colors text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button size="xl" onClick={() => navigate("/browse")}>
              <ApperIcon name="Users" className="h-5 w-5 mr-2" />
              Browse Influencers
            </Button>
            <Button variant="outline" size="xl" onClick={() => navigate("/how-it-works")}>
              <ApperIcon name="Play" className="h-5 w-5 mr-2" />
              How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

{/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full opacity-40 animate-bounce-gentle backdrop-blur-sm"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/15 rounded-full opacity-50 animate-pulse-slow backdrop-blur-sm"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/20 rounded-full opacity-35 animate-bounce-gentle backdrop-blur-sm"></div>
    </section>
  );
};

export default HeroSection;