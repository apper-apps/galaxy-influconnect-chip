import { format } from "date-fns";
import Avatar from "@/components/atoms/Avatar";
import ApperIcon from "@/components/ApperIcon";

const MessageBubble = ({ message, sender, isCurrentUser }) => {
  return (
    <div className={`flex items-end space-x-2 mb-4 ${isCurrentUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <Avatar
        src={sender?.profileImage}
        alt={sender?.displayName || sender?.name}
        size="sm"
        fallbackText={sender?.displayName || sender?.name}
      />
      
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-xl ${
        isCurrentUser 
          ? 'bg-primary-600 text-white rounded-br-sm' 
          : 'bg-gray-100 text-gray-900 rounded-bl-sm'
      }`}>
        <p className="text-sm">{message.content}</p>
        
        <div className={`flex items-center justify-end mt-1 space-x-1 ${
          isCurrentUser ? 'text-primary-200' : 'text-gray-500'
        }`}>
          <span className="text-xs">
            {format(new Date(message.timestamp), "h:mm a")}
          </span>
          {isCurrentUser && (
            <ApperIcon 
              name={message.read ? "CheckCheck" : "Check"} 
              className="h-3 w-3" 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;