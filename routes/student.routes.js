import express from "express";

import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controller.js";

import {
  validateCreateStudent,
  validateUpdateStudent,
} from "../validations/studentValidation.js";

const router = express.Router();

router
  .route("/")
  .post(validateCreateStudent, createStudent)
  .get(getAllStudents);

router
  .route("/:id")
  .get(getStudentById)
  .patch(validateUpdateStudent, updateStudent)
  .delete(deleteStudent);

export default router;