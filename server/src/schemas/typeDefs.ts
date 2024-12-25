const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    books: [Books]!
    book(bookId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    addBook(input: BookInput!): Book
    removeBook(bookId: ID!): Book
  }
`;

export default typeDefs;
