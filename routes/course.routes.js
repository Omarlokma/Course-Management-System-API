const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");

router.post("/", validateCourse, courseController.createCourse);
router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

export default router;
