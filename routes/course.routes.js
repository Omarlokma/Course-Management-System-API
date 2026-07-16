import express from "express";
const router = express.Router();
import * as courseController from "../controllers/course.controller.js";

// router.post("/", validateCourse, courseController.createCourse);
router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

export default router;
