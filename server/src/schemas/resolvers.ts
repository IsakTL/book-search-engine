import User from '../models/index.js';

const resolvers = {
  Query: {
    classes: async () => {
      return await User.find({});
    },
  },
};

export default resolvers;
