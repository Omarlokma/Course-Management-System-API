import express from "express";

import {
  validateCreateCourse,
  validateUpdateCourse,
} from "../validations/courseValidation.js";

import * as courseController from "../controllers/course.controller.js";

const router = express.Router();

router
  .route("/")
  .post(validateCreateCourse, courseController.createCourse)
  .get(courseController.getAllCourses);

router
  .route("/:id")
  .get(courseController.getCourseById)
  .patch(validateUpdateCourse, courseController.updateCourse)
  .delete(courseController.deleteCourse);

router.post(
  "/:courseId/enroll",
  courseController.enrollStudent
);

router.get(
  "/:courseId/students",
  courseController.getCourseStudents
);

router.get(
  "/student/:studentId",
  courseController.getStudentCourses
);

export default router;