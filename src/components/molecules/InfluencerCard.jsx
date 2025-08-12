import { Link } from "react-router-dom";
import Avatar from "@/components/atoms/Avatar";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const InfluencerCard = ({ influencer }) => {
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

  const getMinPrice = () => {
    const prices = Object.values(influencer.pricing).flatMap(platform => 
      Object.values(platform)
    );
    return Math.min(...prices);
  };

  return (
    <div className="bg-white rounded-xl shadow-premium hover:shadow-hover transition-all duration-300 overflow-hidden group transform hover:scale-[1.02]">
      {/* Cover Image */}
      <div className="relative h-32 bg-gradient-to-br from-primary-100 to-primary-200">
        <img
          src={influencer.coverImage}
          alt={`${influencer.displayName} cover`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {influencer.verified && (
          <div className="absolute top-3 right-3">
            <Badge variant="primary" size="sm">
              <ApperIcon name="CheckCircle" className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          </div>
        )}
      </div>

      {/* Profile Content */}
      <div className="p-5">
        {/* Profile Header */}
        <div className="flex items-start space-x-3 mb-4">
          <Avatar
            src={influencer.profileImage}
            alt={influencer.displayName}
            size="lg"
            fallbackText={influencer.displayName}
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {influencer.displayName}
            </h3>
            <p className="text-sm text-gray-600 flex items-center">
              <ApperIcon name="MapPin" className="h-3 w-3 mr-1" />
              {influencer.location}
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-3">
          {influencer.category.slice(0, 2).map(cat => (
            <Badge key={cat} variant="secondary" size="sm">
              {cat}
            </Badge>
          ))}
          {influencer.category.length > 2 && (
            <Badge variant="secondary" size="sm">
              +{influencer.category.length - 2}
            </Badge>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="text-lg font-bold text-primary-800">
              {formatFollowers(getMaxFollowers())}
            </div>
            <div className="text-xs text-gray-600">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-primary-800">
              ${getMinPrice()}+
            </div>
            <div className="text-xs text-gray-600">Starting at</div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
          {influencer.bio}
        </p>

        {/* Rating & Response Time */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center">
            <ApperIcon name="Star" className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            <span className="font-medium">{influencer.rating}</span>
            <span className="text-gray-500 ml-1">({influencer.completedProjects})</span>
          </div>
          <div className="flex items-center text-gray-600">
            <ApperIcon name="Clock" className="h-3 w-3 mr-1" />
            {influencer.responseTime}
          </div>
        </div>

        {/* Action Button */}
        <Link to={`/influencer/${influencer.Id}`}>
          <Button className="w-full">
            View Profile
            <ApperIcon name="ArrowRight" className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default InfluencerCard;