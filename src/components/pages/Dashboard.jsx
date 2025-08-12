import { useState, useEffect } from "react";
import StatsCard from "@/components/molecules/StatsCard";
import BookingCard from "@/components/molecules/BookingCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";
import bookingService from "@/services/api/bookingService";
import messageService from "@/services/api/messageService";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock current user - in real app this would come from auth context
  const currentUser = {
    Id: 7,
    name: "John Doe",
    email: "john@example.com",
    role: "customer"
  };

  const loadDashboardData = async () => {
    setLoading(true);
    setError(null);

    try {
      const [userBookings, userConversations] = await Promise.all([
        currentUser.role === "customer" 
          ? bookingService.getByCustomerId(currentUser.Id)
          : bookingService.getByInfluencerId(currentUser.Id),
        messageService.getConversations(currentUser.Id)
      ]);

      setBookings(userBookings);
      setConversations(userConversations);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      await bookingService.updateStatus(bookingId, newStatus);
      loadDashboardData(); // Reload data
    } catch (err) {
      console.error("Failed to update booking status:", err);
    }
  };

  if (loading) {
    return <Loading text="Loading dashboard..." />;
  }

  if (error) {
    return (
      <Error
        title="Failed to load dashboard"
        message={error}
        onRetry={loadDashboardData}
      />
    );
  }

  const getStats = () => {
    const totalBookings = bookings.length;
    const activeBookings = bookings.filter(b => b.status === "active").length;
    const completedBookings = bookings.filter(b => b.status === "completed").length;
    const totalBudget = bookings.reduce((sum, b) => sum + b.budget, 0);
    const unreadMessages = conversations.reduce((sum, c) => sum + c.unreadCount, 0);

    return [
      {
        title: "Total Bookings",
        value: totalBookings,
        icon: "Calendar",
        color: "primary"
      },
      {
        title: "Active Projects",
        value: activeBookings,
        icon: "Clock",
        color: "info"
      },
      {
        title: "Completed",
        value: completedBookings,
        icon: "CheckCircle",
        color: "success"
      },
      {
        title: currentUser.role === "customer" ? "Total Spent" : "Total Earned",
        value: `$${totalBudget.toLocaleString()}`,
        icon: "DollarSign",
        color: "warning"
      }
    ];
  };

  const recentBookings = bookings.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {currentUser.name}!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your {currentUser.role === "customer" ? "campaigns" : "collaborations"}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {getStats().map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-premium p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Recent Bookings
                </h2>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  View All
                </button>
              </div>

              {recentBookings.length > 0 ? (
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <BookingCard
                      key={booking.Id}
                      booking={booking}
                      currentUser={currentUser}
                      onStatusChange={handleStatusChange}
                    />
                  ))}
                </div>
              ) : (
                <Empty
                  title="No bookings yet"
                  message={
                    currentUser.role === "customer" 
                      ? "Start by browsing influencers and making your first booking."
                      : "Bookings will appear here when brands discover your profile."
                  }
                  icon="Calendar"
                  actionText={currentUser.role === "customer" ? "Browse Influencers" : "Complete Profile"}
                />
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-premium p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                {currentUser.role === "customer" ? (
                  <>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center">
                      <ApperIcon name="Search" className="h-5 w-5 mr-3 text-primary-600" />
                      <span>Browse Influencers</span>
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center">
                      <ApperIcon name="Plus" className="h-5 w-5 mr-3 text-primary-600" />
                      <span>Create Campaign</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center">
                      <ApperIcon name="User" className="h-5 w-5 mr-3 text-primary-600" />
                      <span>Update Profile</span>
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center">
                      <ApperIcon name="Image" className="h-5 w-5 mr-3 text-primary-600" />
                      <span>Manage Portfolio</span>
                    </button>
                  </>
                )}
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center">
                  <ApperIcon name="MessageCircle" className="h-5 w-5 mr-3 text-primary-600" />
                  <span>Messages</span>
                </button>
              </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-white rounded-xl shadow-premium p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Messages
                </h3>
                {conversations.some(c => c.unreadCount > 0) && (
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                    {conversations.reduce((sum, c) => sum + c.unreadCount, 0)} new
                  </span>
                )}
              </div>

              {conversations.length > 0 ? (
                <div className="space-y-3">
                  {conversations.slice(0, 3).map((conversation) => (
                    <div key={conversation.bookingId} className="p-3 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          Booking #{conversation.bookingId}
                        </span>
                        {conversation.unreadCount > 0 && (
                          <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {conversation.latestMessage.content}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-600 text-center py-4">
                  No messages yet
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;