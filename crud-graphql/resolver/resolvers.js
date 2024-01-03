const { Student } = require("../Models/model");

const resolvers = {
  Query: {
    greeting: () => "GraphQL is Awesome",
  
  },
  Mutation: {
    create: async (parent, args) => {
      const { firstName, lastName, age } = args;
      const newStudent = new Student({
        firstName,
        lastName,
        age,
      });
      await newStudent.save();
      return newStudent;
    },
  },
};

module.exports = { resolvers };