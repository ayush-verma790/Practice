const { Student } = require("../Models/model");

const studentQueryResolvers = {
  Query: {
    getAllStudents: async () => {
      try {
        const students = await Student.find();
        return students;
      } catch (error) {
        throw new Error("Error fetching all students");
      }
    },
    getStudentById: async (parent, args) => {
      try {
        const { id } = args;
        const student = await Student.findById(id);
        if (!student) {
          throw new Error("Student not found");
        }
        return student;
      } catch (error) {
        throw new Error("Error fetching student by ID");
      }
    },
  },
};

module.exports = studentQueryResolvers;