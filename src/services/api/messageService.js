import messagesData from "@/services/mockData/messages.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let messages = [...messagesData];

const messageService = {
  async getAll() {
    await delay(250);
    return [...messages];
  },

  async getById(id) {
    await delay(150);
    const message = messages.find(message => message.Id === parseInt(id));
    if (!message) {
      throw new Error(`Message with ID ${id} not found`);
    }
    return { ...message };
  },

  async getByBookingId(bookingId) {
    await delay(200);
    return messages
      .filter(message => message.bookingId === parseInt(bookingId))
      .map(message => ({ ...message }))
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  },

  async getConversations(userId) {
    await delay(300);
    const userMessages = messages.filter(message => 
      message.senderId === parseInt(userId) || message.receiverId === parseInt(userId)
    );

    // Group by booking ID and get latest message for each conversation
    const conversations = {};
    userMessages.forEach(message => {
      if (!conversations[message.bookingId]) {
        conversations[message.bookingId] = [];
      }
      conversations[message.bookingId].push(message);
    });

    return Object.values(conversations).map(conversation => {
      const latest = conversation.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
      const unreadCount = conversation.filter(msg => 
        msg.receiverId === parseInt(userId) && !msg.read
      ).length;
      
      return {
        bookingId: latest.bookingId,
        latestMessage: { ...latest },
        unreadCount,
        messageCount: conversation.length
      };
    }).sort((a, b) => new Date(b.latestMessage.timestamp) - new Date(a.latestMessage.timestamp));
  },

  async create(messageData) {
    await delay(300);
    const newMessage = {
      Id: Math.max(...messages.map(m => m.Id)) + 1,
      ...messageData,
      timestamp: new Date().toISOString(),
      read: false
    };
    messages.push(newMessage);
    return { ...newMessage };
  },

  async markAsRead(id) {
    await delay(200);
    const index = messages.findIndex(message => message.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Message with ID ${id} not found`);
    }
    messages[index].read = true;
    return { ...messages[index] };
  },

  async markConversationAsRead(bookingId, userId) {
    await delay(250);
    const conversationMessages = messages.filter(message => 
      message.bookingId === parseInt(bookingId) && 
      message.receiverId === parseInt(userId) && 
      !message.read
    );

    conversationMessages.forEach(message => {
      const index = messages.findIndex(m => m.Id === message.Id);
      if (index !== -1) {
        messages[index].read = true;
      }
    });

    return conversationMessages.length;
  }
};

export default messageService;