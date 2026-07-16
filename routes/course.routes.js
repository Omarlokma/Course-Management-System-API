import express from "express";
const router = express.Router();
import {
  validateCreateCourse,
  validateUpdateCourse,
} from "../validations/courseValidation.js";
import * as courseController from "../controllers/course.controller.js";

router.post("/", validateCreateCourse, courseController.createCourse);
router.put("/:id", validateUpdateCourse, courseController.updateCourse);
router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

export default router;
