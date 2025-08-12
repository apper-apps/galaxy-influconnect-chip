import { useState, useEffect, useRef } from "react";
import MessageBubble from "@/components/molecules/MessageBubble";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";
import messageService from "@/services/api/messageService";

const MessageThread = ({ bookingId, currentUser, otherUser, onNewMessage }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  
  const messagesEndRef = useRef(null);

  const loadMessages = async () => {
    setLoading(true);
    setError(null);

    try {
      const messageList = await messageService.getByBookingId(bookingId);
      setMessages(messageList);
      
      // Mark messages as read
      await messageService.markConversationAsRead(bookingId, currentUser.Id);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    setSending(true);
    try {
      const messageData = {
        bookingId: parseInt(bookingId),
        senderId: currentUser.Id,
        receiverId: otherUser.Id,
        content: newMessage.trim()
      };

      const sentMessage = await messageService.create(messageData);
      setMessages(prev => [...prev, sentMessage]);
      setNewMessage("");
      
      if (onNewMessage) {
        onNewMessage(sentMessage);
      }
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    if (bookingId) {
      loadMessages();
    }
  }, [bookingId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (loading) {
    return <Loading text="Loading messages..." />;
  }

  if (error) {
    return (
      <Error
        title="Failed to load messages"
        message={error}
        onRetry={loadMessages}
      />
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 ? (
          <Empty
            title="No messages yet"
            message="Start the conversation by sending a message below."
            icon="MessageCircle"
          />
        ) : (
          <>
            {messages.map((message) => (
              <MessageBubble
                key={message.Id}
                message={message}
                sender={message.senderId === currentUser.Id ? currentUser : otherUser}
                isCurrentUser={message.senderId === currentUser.Id}
              />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Message Input */}
      <div className="border-t bg-gray-50 p-4">
        <form onSubmit={sendMessage} className="flex gap-3">
          <div className="flex-1">
            <Input
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              disabled={sending}
            />
          </div>
          <Button type="submit" disabled={!newMessage.trim() || sending}>
            {sending ? (
              <ApperIcon name="Loader2" className="h-4 w-4 animate-spin" />
            ) : (
              <ApperIcon name="Send" className="h-4 w-4" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MessageThread;