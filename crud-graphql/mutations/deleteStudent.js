function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
      students.splice(index, 1);
      return true; // Deletion successful
    }
    return false; // Student with the given ID not found
  }
  module.exports = deleteStudent;