

const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
  
           greeting: String

  }

  # Student object
  type Student {
    id: ID
    firstName: String
    lastName: String
    age: Int
  }

  # Mutation
  type Mutation {
    create(firstName: String, lastName: String, age: Int): Student
    update(id: ID, firstName: String, lastName: String, age: Int): Student
  }
`;

module.exports = { typeDefs };