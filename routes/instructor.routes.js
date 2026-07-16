import express from "express";

import {
  createInstructor,
  getAllInstructors,
  getInstructor,
  updateInstructor,
  deleteInstructor,
} from "../controllers/instructor.controller.js";

import {
  validateCreateInstructor,
  validateUpdateInstructor,
} from "../validations/instructorValidation.js";

const router = express.Router();

router
  .route("/")
  .post(validateCreateInstructor, createInstructor)
  .get(getAllInstructors);

router
  .route("/:id")
  .get(getInstructor)
  .patch(validateUpdateInstructor, updateInstructor)
  .delete(deleteInstructor);

export default router;