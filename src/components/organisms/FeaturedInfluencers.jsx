import { useState, useEffect } from "react";
import InfluencerCard from "@/components/molecules/InfluencerCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import influencerService from "@/services/api/influencerService";

const FeaturedInfluencers = () => {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadFeaturedInfluencers = async () => {
    setLoading(true);
    setError(null);

    try {
      const featured = await influencerService.getFeatured();
      setInfluencers(featured);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeaturedInfluencers();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gradient-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Influencers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover top-rated influencers trusted by leading brands worldwide
            </p>
          </div>
          <Loading text="Loading featured influencers..." />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Influencers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover top-rated influencers trusted by leading brands worldwide
            </p>
          </div>
          <Error
            title="Failed to load featured influencers"
            message={error}
            onRetry={loadFeaturedInfluencers}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Influencers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover top-rated influencers trusted by leading brands worldwide
          </p>
        </div>

        {/* Influencer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {influencers.map((influencer) => (
            <InfluencerCard key={influencer.Id} influencer={influencer} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" className="px-8">
            <ApperIcon name="Search" className="h-5 w-5 mr-2" />
            Browse All Influencers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInfluencers;