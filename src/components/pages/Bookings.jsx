import { useState, useEffect } from "react";
import BookingCard from "@/components/molecules/BookingCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";
import bookingService from "@/services/api/bookingService";
import influencerService from "@/services/api/influencerService";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [influencers, setInfluencers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock current user - in real app this would come from auth context
  const currentUser = {
    Id: 7,
    name: "John Doe",
    email: "john@example.com",
    role: "customer"
  };

  const loadBookings = async () => {
    setLoading(true);
    setError(null);

    try {
      const userBookings = currentUser.role === "customer" 
        ? await bookingService.getByCustomerId(currentUser.Id)
        : await bookingService.getByInfluencerId(currentUser.Id);

      setBookings(userBookings);

      // Load influencer data for each booking
      const influencerIds = [...new Set(userBookings.map(b => b.influencerId))];
      const influencerPromises = influencerIds.map(id => influencerService.getById(id));
      
      try {
        const influencerResults = await Promise.all(influencerPromises);
        const influencersMap = {};
        influencerResults.forEach(influencer => {
          influencersMap[influencer.Id] = influencer;
        });
        setInfluencers(influencersMap);
      } catch (err) {
        console.error("Failed to load some influencer data:", err);
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      await bookingService.updateStatus(bookingId, newStatus);
      loadBookings(); // Reload data
    } catch (err) {
      console.error("Failed to update booking status:", err);
    }
  };

  const filterOptions = [
    { id: "all", name: "All Bookings", count: bookings.length },
    { id: "pending", name: "Pending", count: bookings.filter(b => b.status === "pending").length },
    { id: "active", name: "Active", count: bookings.filter(b => b.status === "active").length },
    { id: "in_review", name: "Under Review", count: bookings.filter(b => b.status === "in_review").length },
    { id: "completed", name: "Completed", count: bookings.filter(b => b.status === "completed").length }
  ];

  const filteredBookings = activeFilter === "all" 
    ? bookings 
    : bookings.filter(booking => booking.status === activeFilter);

  const getStatusColor = (status) => {
    const colors = {
      pending: "warning",
      active: "info", 
      in_review: "secondary",
      completed: "success",
      cancelled: "danger"
    };
    return colors[status] || "secondary";
  };

  const getTotalBudget = () => {
    return filteredBookings.reduce((sum, booking) => sum + booking.budget, 0);
  };

  if (loading) {
    return <Loading text="Loading bookings..." />;
  }

  if (error) {
    return (
      <Error
        title="Failed to load bookings"
        message={error}
        onRetry={loadBookings}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            My Bookings
          </h1>
          <p className="text-gray-600">
            Manage your {currentUser.role === "customer" ? "campaign bookings" : "collaboration projects"}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-premium p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveFilter(option.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                    activeFilter === option.id
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {option.name}
                  <Badge 
                    variant={activeFilter === option.id ? "secondary" : "primary"} 
                    size="sm"
                    className={activeFilter === option.id ? "bg-white/20 text-white border-white/30" : ""}
                  >
                    {option.count}
                  </Badge>
                </button>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="flex items-center gap-6 text-sm">
              <div className="text-center">
                <div className="font-semibold text-gray-900">{filteredBookings.length}</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">
                  ${getTotalBudget().toLocaleString()}
                </div>
                <div className="text-gray-600">
                  {currentUser.role === "customer" ? "Budget" : "Revenue"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bookings List */}
        {filteredBookings.length === 0 ? (
          <Empty
            title="No bookings found"
            message={
              activeFilter === "all" 
                ? currentUser.role === "customer"
                  ? "You haven't made any bookings yet. Start by browsing influencers!"
                  : "You don't have any bookings yet. Brands will find you and send collaboration requests."
                : `No bookings with status "${activeFilter}" found.`
            }
            icon="Calendar"
            actionText={currentUser.role === "customer" && activeFilter === "all" ? "Browse Influencers" : undefined}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredBookings.map((booking) => (
              <BookingCard
                key={booking.Id}
                booking={booking}
                influencer={influencers[booking.influencerId]}
                currentUser={currentUser}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;