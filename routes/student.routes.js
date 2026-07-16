const express = require("express");
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller.js");

const router = express.Router();

router.route("/").post(createStudent).get(getAllStudents);
router
  .route("/:id")
  .get(getStudentById)
  .patch(updateStudent)
  .delete(deleteStudent);

module.exports = router;
