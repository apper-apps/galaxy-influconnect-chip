import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FilterSection from "@/components/molecules/FilterSection";
import InfluencerGrid from "@/components/organisms/InfluencerGrid";
import SearchBar from "@/components/molecules/SearchBar";
import ApperIcon from "@/components/ApperIcon";

const Browse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Initialize filters from URL params
    const initialFilters = {};
    const initialSearch = searchParams.get("search") || "";
    
    if (searchParams.get("category")) {
      initialFilters.category = [searchParams.get("category")];
    }
    if (searchParams.get("platform")) {
      initialFilters.platform = searchParams.get("platform");
    }
    if (searchParams.get("location")) {
      initialFilters.location = searchParams.get("location");
    }

    setFilters(initialFilters);
    setSearchQuery(initialSearch);
  }, []);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    
    // Update URL params
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    if (newFilters.category?.length > 0) {
      params.set("category", newFilters.category[0]);
    }
    if (newFilters.platform) params.set("platform", newFilters.platform);
    if (newFilters.location) params.set("location", newFilters.location);
    
    setSearchParams(params);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    // Update URL params
    const params = new URLSearchParams();
    if (query) params.set("search", query);
    if (filters.category?.length > 0) {
      params.set("category", filters.category[0]);
    }
    if (filters.platform) params.set("platform", filters.platform);
    if (filters.location) params.set("location", filters.location);
    
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({});
    setSearchQuery("");
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Browse Influencers
              </h1>
              <p className="text-lg text-gray-600">
                Discover and connect with top influencers across all platforms
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="lg:w-96">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search influencers..."
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-80 flex-shrink-0">
            <FilterSection
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Results Area */}
          <div className="flex-1">
            <InfluencerGrid 
              filters={filters} 
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;