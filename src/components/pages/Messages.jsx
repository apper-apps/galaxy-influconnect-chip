import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ConversationItem from "@/components/molecules/ConversationItem";
import MessageThread from "@/components/organisms/MessageThread";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";
import messageService from "@/services/api/messageService";
import bookingService from "@/services/api/bookingService";
import influencerService from "@/services/api/influencerService";

const Messages = () => {
  const [searchParams] = useSearchParams();
  const [conversations, setConversations] = useState([]);
  const [bookings, setBookings] = useState({});
  const [users, setUsers] = useState({});
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock current user - in real app this would come from auth context
  const currentUser = {
    Id: 7,
    name: "John Doe",
    email: "john@example.com",
    role: "customer"
  };

  const loadConversations = async () => {
    setLoading(true);
    setError(null);

    try {
      const userConversations = await messageService.getConversations(currentUser.Id);
      setConversations(userConversations);

      // Load related bookings and user data
      const bookingPromises = userConversations.map(conv => 
        bookingService.getById(conv.bookingId)
      );
      
      const bookingResults = await Promise.all(bookingPromises);
      const bookingsMap = {};
      const usersMap = {};

      for (const booking of bookingResults) {
        bookingsMap[booking.Id] = booking;
        
        // Get the other user in the conversation
        const otherUserId = booking.customerId === currentUser.Id 
          ? booking.influencerId 
          : booking.customerId;
        
        if (!usersMap[otherUserId]) {
          try {
            if (currentUser.role === "customer") {
              // Current user is customer, other user is influencer
              const influencer = await influencerService.getById(otherUserId);
              usersMap[otherUserId] = influencer;
            } else {
              // Current user is influencer, other user is customer
              // In a real app, you'd have a customer service
              usersMap[otherUserId] = {
                Id: otherUserId,
                displayName: "Brand Customer",
                profileImage: null
              };
            }
          } catch (err) {
            usersMap[otherUserId] = {
              Id: otherUserId,
              displayName: "User",
              profileImage: null
            };
          }
        }
      }

      setBookings(bookingsMap);
      setUsers(usersMap);

      // Auto-select conversation from URL params or first one
      const influencerParam = searchParams.get("influencer");
      if (influencerParam && userConversations.length > 0) {
        const targetConversation = userConversations.find(conv => {
          const booking = bookingsMap[conv.bookingId];
          return booking && booking.influencerId.toString() === influencerParam;
        });
        if (targetConversation) {
          setSelectedConversation(targetConversation);
        }
      } else if (userConversations.length > 0) {
        setSelectedConversation(userConversations[0]);
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConversations();
  }, []);

  const handleNewMessage = (message) => {
    // Update conversation list when new message is sent
    setConversations(prev => 
      prev.map(conv => 
        conv.bookingId === message.bookingId 
          ? { ...conv, latestMessage: message, messageCount: conv.messageCount + 1 }
          : conv
      )
    );
  };

  if (loading) {
    return <Loading text="Loading conversations..." />;
  }

  if (error) {
    return (
      <Error
        title="Failed to load messages"
        message={error}
        onRetry={loadConversations}
      />
    );
  }

  const getOtherUser = (conversation) => {
    const booking = bookings[conversation.bookingId];
    if (!booking) return null;
    
    const otherUserId = booking.customerId === currentUser.Id 
      ? booking.influencerId 
      : booking.customerId;
    
    return users[otherUserId];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">
            Communicate with {currentUser.role === "customer" ? "influencers" : "brands"} about your projects
          </p>
        </div>

        {/* Messages Interface */}
        <div className="bg-white rounded-xl shadow-premium overflow-hidden">
          <div className="flex h-[600px]">
            {/* Conversations Sidebar */}
            <div className="w-80 border-r border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Conversations</h2>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {conversations.length === 0 ? (
                  <div className="p-6">
                    <Empty
                      title="No conversations"
                      message="Start a conversation by messaging an influencer from their profile."
                      icon="MessageCircle"
                    />
                  </div>
                ) : (
                  conversations.map((conversation) => {
                    const otherUser = getOtherUser(conversation);
                    const booking = bookings[conversation.bookingId];
                    
                    return (
                      <ConversationItem
                        key={conversation.bookingId}
                        conversation={conversation}
                        booking={booking}
                        otherUser={otherUser}
                        isActive={selectedConversation?.bookingId === conversation.bookingId}
                        onClick={() => setSelectedConversation(conversation)}
                      />
                    );
                  })
                )}
              </div>
            </div>

            {/* Message Thread */}
            <div className="flex-1 flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {getOtherUser(selectedConversation)?.displayName || "User"}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Booking #{selectedConversation.bookingId} • 
                            ${bookings[selectedConversation.bookingId]?.budget.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <ApperIcon name="Phone" className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <ApperIcon name="Video" className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <ApperIcon name="MoreVertical" className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <MessageThread
                    bookingId={selectedConversation.bookingId}
                    currentUser={currentUser}
                    otherUser={getOtherUser(selectedConversation)}
                    onNewMessage={handleNewMessage}
                  />
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <ApperIcon name="MessageCircle" className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Select a Conversation
                    </h3>
                    <p className="text-gray-600">
                      Choose a conversation from the sidebar to start messaging
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;