import bookingsData from "@/services/mockData/bookings.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let bookings = [...bookingsData];

const bookingService = {
  async getAll() {
    await delay(300);
    return [...bookings];
  },

  async getById(id) {
    await delay(200);
    const booking = bookings.find(booking => booking.Id === parseInt(id));
    if (!booking) {
      throw new Error(`Booking with ID ${id} not found`);
    }
    return { ...booking };
  },

  async getByCustomerId(customerId) {
    await delay(250);
    return bookings
      .filter(booking => booking.customerId === parseInt(customerId))
      .map(booking => ({ ...booking }));
  },

  async getByInfluencerId(influencerId) {
    await delay(250);
    return bookings
      .filter(booking => booking.influencerId === parseInt(influencerId))
      .map(booking => ({ ...booking }));
  },

  async create(bookingData) {
    await delay(400);
    const newBooking = {
      Id: Math.max(...bookings.map(b => b.Id)) + 1,
      ...bookingData,
      status: "pending",
      createdAt: new Date().toISOString(),
      messages: 0
    };
    bookings.push(newBooking);
    return { ...newBooking };
  },

  async update(id, updates) {
    await delay(350);
    const index = bookings.findIndex(booking => booking.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Booking with ID ${id} not found`);
    }
    bookings[index] = { ...bookings[index], ...updates };
    return { ...bookings[index] };
  },

  async delete(id) {
    await delay(300);
    const index = bookings.findIndex(booking => booking.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Booking with ID ${id} not found`);
    }
    const deletedBooking = bookings[index];
    bookings.splice(index, 1);
    return { ...deletedBooking };
  },

  async updateStatus(id, status) {
    await delay(250);
    return this.update(id, { status });
  }
};

export default bookingService;