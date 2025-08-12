import { useState } from "react";
import Select from "@/components/atoms/Select";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const FilterSection = ({ filters, onFiltersChange, onClearFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    "Health & Wellness", "Technology", "Fashion", "Food", "Travel",
    "Gaming", "Beauty", "Business", "Lifestyle", "Entertainment"
  ];

  const platforms = ["Instagram", "TikTok", "YouTube", "Twitter", "Pinterest"];

  const handleFilterChange = (key, value) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const handleCategoryChange = (category) => {
    const currentCategories = filters.category || [];
    const updatedCategories = currentCategories.includes(category)
      ? currentCategories.filter(cat => cat !== category)
      : [...currentCategories, category];
    
    handleFilterChange("category", updatedCategories);
  };

  return (
    <div className="bg-white rounded-xl shadow-premium p-6 sticky top-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden"
        >
          <ApperIcon name={isExpanded ? "ChevronUp" : "ChevronDown"} className="h-4 w-4" />
        </Button>
      </div>

      <div className={`space-y-6 ${isExpanded ? "block" : "hidden lg:block"}`}>
        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Categories
          </label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {categories.map(category => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  checked={(filters.category || []).includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Platform */}
        <div>
          <Select
            label="Platform"
            value={filters.platform || ""}
            onChange={(e) => handleFilterChange("platform", e.target.value)}
            placeholder="All platforms"
          >
            {platforms.map(platform => (
              <option key={platform} value={platform}>{platform}</option>
            ))}
          </Select>
        </div>

        {/* Location */}
        <div>
          <Input
            label="Location"
            placeholder="City, State"
            value={filters.location || ""}
            onChange={(e) => handleFilterChange("location", e.target.value)}
          />
        </div>

        {/* Followers Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Followers
          </label>
          <Select
            value={filters.minFollowers || ""}
            onChange={(e) => handleFilterChange("minFollowers", e.target.value)}
            placeholder="Any"
          >
            <option value="1000">1K+</option>
            <option value="10000">10K+</option>
            <option value="50000">50K+</option>
            <option value="100000">100K+</option>
            <option value="500000">500K+</option>
            <option value="1000000">1M+</option>
          </Select>
        </div>

        {/* Budget Range */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Budget Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              placeholder="Min ($)"
              type="number"
              value={filters.minBudget || ""}
              onChange={(e) => handleFilterChange("minBudget", e.target.value)}
            />
            <Input
              placeholder="Max ($)"
              type="number"
              value={filters.maxBudget || ""}
              onChange={(e) => handleFilterChange("maxBudget", e.target.value)}
            />
          </div>
        </div>

        {/* Sort By */}
        <div>
          <Select
            label="Sort By"
            value={filters.sortBy || "followers"}
            onChange={(e) => handleFilterChange("sortBy", e.target.value)}
          >
            <option value="followers">Most Followers</option>
            <option value="engagement">Highest Engagement</option>
            <option value="rating">Highest Rated</option>
            <option value="recent">Recently Joined</option>
          </Select>
        </div>

        {/* Clear Filters */}
        <Button
          variant="outline"
          onClick={onClearFilters}
          className="w-full"
        >
          <ApperIcon name="X" className="h-4 w-4 mr-2" />
          Clear All Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;