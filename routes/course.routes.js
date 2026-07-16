import express from "express";
const router = express.Router();
import * as courseController from "../controllers/course.controller.js";

// router.post("/", validateCourse, courseController.createCourse);
router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

router.post("/:courseId/enroll", courseController.enrollStudent);
router.get("/:courseId/students", courseController.getCourseStudents);
router.get("/student/:studentId", courseController.getStudentCourses);

export default router;
