import HeroSection from "@/components/organisms/HeroSection";
import FeaturedInfluencers from "@/components/organisms/FeaturedInfluencers";
import CategoryGrid from "@/components/organisms/CategoryGrid";
import HowItWorksSection from "@/components/organisms/HowItWorksSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Influencers */}
      <FeaturedInfluencers />

      {/* Popular Categories */}
      <CategoryGrid showAll={false} />

      {/* How It Works */}
      <HowItWorksSection />
    </div>
  );
};

export default Home;