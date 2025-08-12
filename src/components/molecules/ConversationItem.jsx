import { format } from "date-fns";
import Avatar from "@/components/atoms/Avatar";
import Badge from "@/components/atoms/Badge";

const ConversationItem = ({ conversation, booking, otherUser, onClick, isActive }) => {
  return (
    <div 
      className={`p-4 border-b hover:bg-gray-50 cursor-pointer transition-colors ${
        isActive ? 'bg-primary-50 border-r-2 border-r-primary-600' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Avatar
            src={otherUser?.profileImage}
            alt={otherUser?.displayName || otherUser?.name}
            size="md"
            fallbackText={otherUser?.displayName || otherUser?.name}
          />
          {conversation.unreadCount > 0 && (
            <Badge 
              variant="danger" 
              size="sm" 
              className="absolute -top-1 -right-1 min-w-[20px] h-5 flex items-center justify-center text-xs"
            >
              {conversation.unreadCount}
            </Badge>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {otherUser?.displayName || otherUser?.name || "User"}
            </h3>
            <span className="text-xs text-gray-500">
              {format(new Date(conversation.latestMessage.timestamp), "MMM d")}
            </span>
          </div>
          
          <p className={`text-sm truncate ${
            conversation.unreadCount > 0 ? 'font-medium text-gray-900' : 'text-gray-600'
          }`}>
            {conversation.latestMessage.content}
          </p>
          
          {booking && (
            <p className="text-xs text-gray-500 mt-1">
              Booking #{booking.Id} • ${booking.budget.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;