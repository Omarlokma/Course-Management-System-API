import express from "express";
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
}from "../controllers/student.controller.js";

const router = express.Router();

router.route("/").post(createStudent).get(getAllStudents);
router
  .route("/:id")
  .get(getStudentById)
  .patch(updateStudent)
  .delete(deleteStudent);

export default router;
