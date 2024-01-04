const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    greeting: String
    getAllStudents: [Student]
    getStudentById(id: ID!): Student
  }

  type Student {
    id: ID
    firstName: String
    lastName: String
    age: Int
  }

  type Mutation {
    createStudent(firstName: String, lastName: String, age: Int): Student
    updateStudent(id: ID!, firstName: String, lastName: String, age: Int): Student
    deleteStudent(id: ID!): Boolean
  }
`;

module.exports = { typeDefs };
