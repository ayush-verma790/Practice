const resolvers = {
    
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
  
  export default { resolvers };
  