import express from "express";
const router = express.Router();
import {validateCreateCourse, validateUpdateCourse,} from "../validations/courseValidation.js";
import * as courseController from "../controllers/course.controller.js";

router.post("/", validateCreateCourse, courseController.createCourse);
router.put("/:id", validateUpdateCourse, courseController.updateCourse);
router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);
router.delete("/:id", courseController.deleteCourse);

router.post("/:courseId/enroll", courseController.enrollStudent);
router.get("/:courseId/students", courseController.getCourseStudents);
router.get("/student/:studentId", courseController.getStudentCourses);

export default router;
