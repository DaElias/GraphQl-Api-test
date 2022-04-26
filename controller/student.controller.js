const Student = require("../models/SchemaStudentMongo");

const createStudentsDB = async (root, args) => {
  const { input } = root;
  const newStudent = new Student(input);
  await newStudent.save();
  return newStudent;
};
const getStudentsDB = async (root, args) => {
  const { limit = 9, skip = 0 } = root;
  const getStudent = await Student.find({})
    .skip(parseInt(skip))
    .limit(parseInt(limit));
  return getStudent;
};
const getStudentDB = async (root, args) => {
  const { id } = root;
  const student = await Student.findById(id);
  return student;
};

module.exports = {
  createStudentsDB,
  getStudentDB,
  getStudentsDB,
};
