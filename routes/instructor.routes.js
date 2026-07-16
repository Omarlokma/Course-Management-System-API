import express from "express";

import {
  createInstructor,
  getAllInstructors,
  getInstructor,
  updateInstructor,
  deleteInstructor,
} from "../controllers/instructor.controller.js";

const router = express.Router();

router.route("/").post(createInstructor).get(getAllInstructors);

router
  .route("/:id")
  .get(getInstructor)
  .patch(updateInstructor)
  .delete(deleteInstructor);

export default router;
