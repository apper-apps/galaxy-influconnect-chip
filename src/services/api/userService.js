import usersData from "@/services/mockData/users.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let users = [...usersData];

const userService = {
  async getAll() {
    await delay(300);
    return [...users];
  },

  async getById(id) {
    await delay(200);
    const user = users.find(user => user.Id === parseInt(id));
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return { ...user };
  },

  async getByEmail(email) {
    await delay(250);
    const user = users.find(user => user.email === email);
    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }
    return { ...user };
  },

  async create(userData) {
    await delay(400);
    const newUser = {
      Id: Math.max(...users.map(u => u.Id)) + 1,
      ...userData,
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    return { ...newUser };
  },

  async update(id, updates) {
    await delay(350);
    const index = users.findIndex(user => user.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`User with ID ${id} not found`);
    }
    users[index] = { ...users[index], ...updates };
    return { ...users[index] };
  },

  async delete(id) {
    await delay(300);
    const index = users.findIndex(user => user.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`User with ID ${id} not found`);
    }
    const deletedUser = users[index];
    users.splice(index, 1);
    return { ...deletedUser };
  },

  async getByRole(role) {
    await delay(250);
    return users.filter(user => user.role === role).map(user => ({ ...user }));
  }
};

export default userService;