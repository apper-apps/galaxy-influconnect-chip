import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import Avatar from "@/components/atoms/Avatar";
import influencerService from "@/services/api/influencerService";

const InfluencerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
const [influencer, setInfluencer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const loadInfluencer = async () => {
    setLoading(true);
    setError(null);

    try {
      const profile = await influencerService.getById(id);
      setInfluencer(profile);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInfluencer();
  }, [id]);

  const handleBookNow = () => {
    navigate(`/book/${id}`);
  };

  const handleMessage = () => {
    navigate(`/messages?influencer=${id}`);
  };

  if (loading) {
    return <Loading text="Loading profile..." />;
  }

  if (error) {
    return (
      <Error
        title="Failed to load profile"
        message={error}
        onRetry={loadInfluencer}
      />
    );
  }

  const getMaxFollowers = () => {
    return Math.max(
      ...Object.values(influencer.stats).map(stat => stat.followers || stat.subscribers || 0)
    );
  };

  const formatFollowers = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const tabs = [
    { id: "overview", name: "Overview", icon: "User" },
    { id: "portfolio", name: "Portfolio", icon: "Image" },
    { id: "pricing", name: "Pricing", icon: "DollarSign" },
    { id: "reviews", name: "Reviews", icon: "Star" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="relative">
        {/* Cover Image */}
<div className="h-64 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
          {imageLoading && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 animate-pulse" />
          )}
          
          {!imageError && influencer?.coverImage ? (
            <img
              src={influencer.coverImage}
              alt={`${influencer.displayName} cover`}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageError(true);
                setImageLoading(false);
              }}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <div className="text-white/80 text-center">
                <ApperIcon name="User" className="h-16 w-16 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Cover Image</p>
              </div>
            </div>
          )}
          
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Profile Info */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-premium -mt-16 p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Avatar
                  src={influencer.profileImage}
                  alt={influencer.displayName}
                  size="2xl"
                  fallbackText={influencer.displayName}
                />
                
<div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold text-gray-900">
                      {influencer.displayName}
                    </h1>
{influencer.verified && (
                      <Badge variant="success">
                        <ApperIcon name="CheckCircle" className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-gray-600 flex items-center mb-3">
                    <ApperIcon name="MapPin" className="h-4 w-4 mr-1" />
                    {influencer.location}
                  </p>
                  
{/* Social Media Icons */}
                  <div className="flex items-center gap-3 mb-4">
                    {influencer.socialLinks.instagram && (
                      <div className="flex items-center justify-center w-5 h-5 bg-gray-300 rounded text-gray-600 hover:bg-gray-400 transition-colors">
                        <ApperIcon name="Instagram" size={12} />
                      </div>
                    )}
                    {influencer.socialLinks.youtube && (
                      <div className="flex items-center justify-center w-5 h-5 bg-gray-300 rounded text-gray-600 hover:bg-gray-400 transition-colors">
                        <ApperIcon name="Youtube" size={12} />
                      </div>
                    )}
                    {influencer.socialLinks.facebook && (
                      <div className="flex items-center justify-center w-5 h-5 bg-gray-300 rounded text-gray-600 hover:bg-gray-400 transition-colors">
                        <ApperIcon name="Facebook" size={12} />
                      </div>
                    )}
                    {influencer.socialLinks.tiktok && (
                      <div className="flex items-center justify-center w-5 h-5 bg-gray-300 rounded text-gray-600 hover:bg-gray-400 transition-colors">
                        <ApperIcon name="Video" size={12} />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {influencer.category.map(cat => (
                      <Badge key={cat} variant="secondary">
                        {cat}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">
                        {formatFollowers(getMaxFollowers())}
                      </div>
                      <div className="text-gray-600">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">
                        {influencer.rating}
                      </div>
                      <div className="text-gray-600">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">
                        {influencer.completedProjects}
                      </div>
                      <div className="text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">
                        {influencer.responseTime}
                      </div>
                      <div className="text-gray-600">Response</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <Button variant="outline" onClick={handleMessage}>
                  <ApperIcon name="MessageCircle" className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button onClick={handleBookNow}>
                  <ApperIcon name="Calendar" className="h-4 w-4 mr-2" />
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <ApperIcon name={tab.icon} className="h-4 w-4 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-premium p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
                  <p className="text-gray-700 leading-relaxed">{influencer.bio}</p>
                </div>

                <div className="bg-white rounded-xl shadow-premium p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Media Stats</h3>
                  <div className="space-y-4">
                    {Object.entries(influencer.stats).map(([platform, stats]) => (
                      <div key={platform} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium capitalize">{platform}</h4>
                          <Badge variant="secondary">
                            {formatFollowers(stats.followers || stats.subscribers)}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Engagement:</span>
                            <span className="font-medium ml-1">{stats.engagement}%</span>
                          </div>
                          {stats.avgLikes && (
                            <div>
                              <span className="text-gray-600">Avg Likes:</span>
                              <span className="font-medium ml-1">{stats.avgLikes.toLocaleString()}</span>
                            </div>
                          )}
                          {stats.avgViews && (
                            <div>
                              <span className="text-gray-600">Avg Views:</span>
                              <span className="font-medium ml-1">{stats.avgViews.toLocaleString()}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "portfolio" && (
              <div className="bg-white rounded-xl shadow-premium p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Portfolio</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {influencer.portfolio.map((item) => (
                    <PortfolioItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "pricing" && (
              <div className="bg-white rounded-xl shadow-premium p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Pricing</h3>
                <div className="space-y-6">
                  {Object.entries(influencer.pricing).map(([platform, prices]) => (
                    <div key={platform} className="border rounded-lg p-4">
                      <h4 className="font-medium capitalize mb-4">{platform}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(prices).map(([type, price]) => (
                          <div key={type} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm text-gray-600 capitalize mb-1">{type}</div>
                            <div className="text-xl font-bold text-primary-600">
                              ${price.toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="bg-white rounded-xl shadow-premium p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Reviews</h3>
                <div className="text-center py-12">
                  <ApperIcon name="Star" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Reviews feature coming soon</p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-premium p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <Button className="w-full" onClick={handleBookNow}>
                  <ApperIcon name="Calendar" className="h-4 w-4 mr-2" />
                  Book Collaboration
                </Button>
                <Button variant="outline" className="w-full" onClick={handleMessage}>
                  <ApperIcon name="MessageCircle" className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-premium p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h3>
              <div className="space-y-3">
                {Object.entries(influencer.socialLinks).map(([platform, handle]) => (
                  <div key={platform} className="flex items-center justify-between">
                    <span className="capitalize text-gray-600">{platform}:</span>
                    <span className="font-medium text-primary-600">{handle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Portfolio Item Component with image error handling
function PortfolioItem({ item }) {
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="relative h-48 bg-gray-100">
        {imgLoading && !imgError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        
        {!imgError && item?.url ? (
          <img
            src={item.url}
            alt={item.caption || 'Portfolio item'}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imgLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setImgLoading(false)}
            onError={() => {
              setImgError(true);
              setImgLoading(false);
            }}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <ApperIcon name="Image" className="h-8 w-8 mx-auto mb-1" />
              <p className="text-xs">No Image</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" size="sm">
            {item?.platform || 'Unknown'}
          </Badge>
          <span className="text-sm text-gray-500">{item?.date || 'No date'}</span>
        </div>
        <p className="text-sm text-gray-700 mb-2">{item?.caption || 'No caption'}</p>
        <div className="flex items-center text-sm text-gray-600">
          <ApperIcon name="Heart" className="h-4 w-4 mr-1" />
          {item?.engagement?.toLocaleString() || '0'} engagements
        </div>
      </div>
    </div>
  );
}

export default InfluencerProfile;