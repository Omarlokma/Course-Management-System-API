const express = require("express");

import {
  createInstructor,
  getAllInstructors,
  getInstructor,
  updateInstructor,
  deleteInstructor,
} from "../controllers/instructor.controller";

const router = express.Router();

router.route("/").post(createInstructor).get(getAllInstructors);

router
  .route("/:id")
  .get(getInstructor)
  .patch(updateInstructor)
  .delete(deleteInstructor);

module.exports = router;
