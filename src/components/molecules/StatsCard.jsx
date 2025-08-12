import ApperIcon from "@/components/ApperIcon";

const StatsCard = ({ title, value, icon, trend, trendValue, color = "primary" }) => {
  const colorClasses = {
    primary: "from-primary-500 to-primary-600",
    success: "from-green-500 to-green-600",
    warning: "from-yellow-500 to-yellow-600",
    danger: "from-red-500 to-red-600",
    info: "from-blue-500 to-blue-600"
  };

  const iconBgClasses = {
    primary: "bg-primary-100 text-primary-600",
    success: "bg-green-100 text-green-600",
    warning: "bg-yellow-100 text-yellow-600",
    danger: "bg-red-100 text-red-600",
    info: "bg-blue-100 text-blue-600"
  };

  return (
    <div className="bg-white rounded-xl shadow-premium p-6 hover:shadow-hover transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          
          {trend && trendValue && (
            <div className="flex items-center mt-2">
              <ApperIcon 
                name={trend === "up" ? "TrendingUp" : "TrendingDown"} 
                className={`h-4 w-4 mr-1 ${
                  trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              />
              <span className={`text-sm ${
                trend === "up" ? "text-green-600" : "text-red-600"
              }`}>
                {trendValue}
              </span>
            </div>
          )}
        </div>
        
        <div className={`p-3 rounded-xl ${iconBgClasses[color]}`}>
          <ApperIcon name={icon} className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;