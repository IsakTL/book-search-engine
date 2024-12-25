import models from '../models/index.js';
import { signToken, AuthenticationError } from '../utils/auth.js';
const User = models.User;

interface LoginUserArgs {
  email: string;
  password: string;
}

const resolvers = {
  Query: {
    // None yet
  },
  Mutation: {
    login: async (_parent: any, { email, password }: LoginUserArgs) => {
      // Find a user with the provided email
      const user = await User.findOne({ email });
    
      // If no user is found, throw an AuthenticationError
      if (!user) {
        throw new AuthenticationError('Could not authenticate user.');
      }
    
      // Check if the provided password is correct
      const correctPw = await user.isCorrectPassword(password);
    
      // If the password is incorrect, throw an AuthenticationError
      if (!correctPw) {
        throw new AuthenticationError('Could not authenticate user.');
      }
    
      // Sign a token with the user's information
      const token = signToken(user.username, user.email, user._id);
    
      // Return the token and the user
      return { token, user };
    }
  },
};

export default resolvers;
