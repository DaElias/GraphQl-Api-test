const {
  getCouseDB,
  getCoursesDB,
  createCourseDB,
  editCourseDB,
  addStudentToCourseDB,
} = require("../controller/course.controller");
const {
  createStudentsDB,
  getStudentDB,
  getStudentsDB,
} = require("../controller/student.controller");

module.exports = {
  getCouses: getCoursesDB,
  getCouse: getCouseDB,
  createCourse: createCourseDB,
  createStudent: createStudentsDB,
  editCourse: editCourseDB,
  getStudents: getStudentsDB,
  getStudent: getStudentDB,
  addStudentToCourse:addStudentToCourseDB
};
