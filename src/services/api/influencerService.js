import influencerProfilesData from "@/services/mockData/influencerProfiles.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let influencerProfiles = [...influencerProfilesData];

const influencerService = {
  async getAll() {
    await delay(350);
    return [...influencerProfiles];
  },

  async getById(id) {
    await delay(200);
    const profile = influencerProfiles.find(profile => profile.Id === parseInt(id));
    if (!profile) {
      throw new Error(`Influencer profile with ID ${id} not found`);
    }
    return { ...profile };
  },

  async getByUserId(userId) {
    await delay(250);
    const profile = influencerProfiles.find(profile => profile.userId === parseInt(userId));
    if (!profile) {
      throw new Error(`Influencer profile for user ID ${userId} not found`);
    }
    return { ...profile };
  },

  async searchInfluencers(filters = {}) {
    await delay(400);
    let filtered = [...influencerProfiles];

    // Filter by category
    if (filters.category && filters.category.length > 0) {
      filtered = filtered.filter(profile => 
        profile.category.some(cat => filters.category.includes(cat))
      );
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(profile => 
        profile.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by minimum followers
    if (filters.minFollowers) {
      filtered = filtered.filter(profile => {
        const maxFollowers = Math.max(
          ...Object.values(profile.stats).map(stat => stat.followers || stat.subscribers || 0)
        );
        return maxFollowers >= parseInt(filters.minFollowers);
      });
    }

    // Filter by budget range
    if (filters.minBudget || filters.maxBudget) {
      filtered = filtered.filter(profile => {
        const prices = Object.values(profile.pricing).flatMap(platform => 
          Object.values(platform)
        );
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        
        const meetsMin = !filters.minBudget || minPrice >= parseInt(filters.minBudget);
        const meetsMax = !filters.maxBudget || maxPrice <= parseInt(filters.maxBudget);
        
        return meetsMin && meetsMax;
      });
    }

    // Sort by followers (default)
    if (!filters.sortBy || filters.sortBy === "followers") {
      filtered.sort((a, b) => {
        const aMax = Math.max(...Object.values(a.stats).map(stat => stat.followers || stat.subscribers || 0));
        const bMax = Math.max(...Object.values(b.stats).map(stat => stat.followers || stat.subscribers || 0));
        return bMax - aMax;
      });
    }

    return filtered;
  },

  async getFeatured() {
    await delay(300);
    return influencerProfiles
      .filter(profile => profile.verified && profile.rating >= 4.8)
      .slice(0, 6)
      .map(profile => ({ ...profile }));
  },

  async create(profileData) {
    await delay(500);
    const newProfile = {
      Id: Math.max(...influencerProfiles.map(p => p.Id)) + 1,
      ...profileData,
      verified: false,
      rating: 0,
      completedProjects: 0,
      portfolio: []
    };
    influencerProfiles.push(newProfile);
    return { ...newProfile };
  },

  async update(id, updates) {
    await delay(400);
    const index = influencerProfiles.findIndex(profile => profile.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Influencer profile with ID ${id} not found`);
    }
    influencerProfiles[index] = { ...influencerProfiles[index], ...updates };
    return { ...influencerProfiles[index] };
  },

  async delete(id) {
    await delay(300);
    const index = influencerProfiles.findIndex(profile => profile.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Influencer profile with ID ${id} not found`);
    }
    const deletedProfile = influencerProfiles[index];
    influencerProfiles.splice(index, 1);
    return { ...deletedProfile };
  }
};

export default influencerService;