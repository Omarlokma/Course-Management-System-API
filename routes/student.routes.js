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

router.post("/", validateCreateStudent, createStudent);
router.put("/:id", validateUpdateStudent, updateStudent);

router.route("/").post(createStudent).get(getAllStudents);
router
  .route("/:id")
  .get(getStudentById)
  .patch(updateStudent)
  .delete(deleteStudent);

export default router;
