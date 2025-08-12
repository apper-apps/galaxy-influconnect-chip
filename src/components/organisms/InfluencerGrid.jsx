import { useState, useEffect } from "react";
import InfluencerCard from "@/components/molecules/InfluencerCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import influencerService from "@/services/api/influencerService";

const InfluencerGrid = ({ filters, searchQuery }) => {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const ITEMS_PER_PAGE = 12;

  const loadInfluencers = async (resetPage = false) => {
    setLoading(true);
    setError(null);

    try {
      const searchFilters = { ...filters };
      if (searchQuery) {
        searchFilters.search = searchQuery;
      }

      const allInfluencers = await influencerService.searchInfluencers(searchFilters);
      
      if (resetPage) {
        setCurrentPage(1);
        setInfluencers(allInfluencers.slice(0, ITEMS_PER_PAGE));
        setHasMore(allInfluencers.length > ITEMS_PER_PAGE);
      } else {
        const startIndex = currentPage * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const newInfluencers = allInfluencers.slice(startIndex, endIndex);
        
        setInfluencers(prev => [...prev, ...newInfluencers]);
        setHasMore(endIndex < allInfluencers.length);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInfluencers(true);
  }, [filters, searchQuery]);

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
    setTimeout(() => {
      loadInfluencers(false);
    }, 100);
  };

  if (loading && currentPage === 1) {
    return <Loading text="Finding influencers..." />;
  }

  if (error) {
    return (
      <Error
        title="Failed to load influencers"
        message={error}
        onRetry={() => loadInfluencers(true)}
      />
    );
  }

  if (influencers.length === 0) {
    return (
      <Empty
        title="No influencers found"
        message="Try adjusting your filters or search terms to find more influencers."
        icon="UserX"
        actionText="Clear Filters"
        onAction={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          {influencers.length} influencer{influencers.length !== 1 ? 's' : ''} found
        </h2>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <ApperIcon name="Filter" className="h-4 w-4" />
          <span>Filtered results</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {influencers.map((influencer) => (
          <InfluencerCard key={influencer.Id} influencer={influencer} />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center pt-8">
          <Button
            variant="outline"
            onClick={handleLoadMore}
            disabled={loading}
            size="lg"
          >
            {loading ? (
              <>
                <ApperIcon name="Loader2" className="h-4 w-4 mr-2 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <ApperIcon name="Plus" className="h-4 w-4 mr-2" />
                Load More Influencers
              </>
            )}
          </Button>
        </div>
      )}

      {/* End of Results */}
      {!hasMore && influencers.length > ITEMS_PER_PAGE && (
        <div className="text-center py-8">
          <p className="text-gray-600">You've reached the end of the results</p>
          <Button
            variant="ghost"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-2"
          >
            <ApperIcon name="ChevronUp" className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      )}
    </div>
  );
};

export default InfluencerGrid;