import CategoryGrid from "@/components/organisms/CategoryGrid";

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore All Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover influencers across every niche and industry. From fashion to tech, 
            food to fitness - find the perfect content creators for your brand.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="py-8">
        <CategoryGrid showAll={true} />
      </div>
    </div>
  );
};

export default Categories;