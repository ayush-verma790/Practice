const gql=require("graphql-tag");
const typeDefs=gql`
#graphql
type Query {
    hello: String
    welcome(name: String): String
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
  }

`
module.exports = { typeDefs };
