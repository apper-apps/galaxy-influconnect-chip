import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import ApperIcon from "@/components/ApperIcon";
import categoryService from "@/services/api/categoryService";

const CategoryGrid = ({ showAll = false }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCategories = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = showAll 
        ? await categoryService.getAll()
        : await categoryService.getPopular();
      setCategories(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, [showAll]);

  if (loading) {
    return <Loading text="Loading categories..." />;
  }

  if (error) {
    return (
      <Error
        title="Failed to load categories"
        message={error}
        onRetry={loadCategories}
      />
    );
  }

  const displayCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {showAll ? "All Categories" : "Popular Categories"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {showAll 
              ? "Explore all available categories to find the perfect influencers for your brand"
              : "Discover influencers across the most popular content categories"
            }
          </p>
        </div>

        {/* Category Grid */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {displayCategories.slice(0, 8).map((category) => (
            <Link
              key={category.Id}
              to={`/browse?category=${encodeURIComponent(category.name)}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-premium hover:shadow-hover transition-all duration-300 p-6 text-center group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                  <ApperIcon 
                    name={category.icon} 
                    className="h-8 w-8 text-primary-700" 
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {category.description}
                </p>
                <div className="text-sm font-medium text-primary-600">
                  {category.influencerCount.toLocaleString()} influencers
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show All Categories Button */}
        {!showAll && categories.length > 8 && (
          <div className="text-center">
            <Link
              to="/categories"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              <ApperIcon name="Grid" className="h-5 w-5 mr-2" />
              View All Categories
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryGrid;