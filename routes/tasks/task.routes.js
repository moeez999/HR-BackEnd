const express = require("express");
const {
  //   createShift,
  getAllTask,
  //   getSingleShift,
  //   updateSingleShift,
  //   deleteSingleShift,
} = require("./task.controller");
const authorize = require("../../utils/authorize"); // authentication middleware

const taskRoutes = express.Router();

// shiftRoutes.post("/", authorize("create-shift"), createShift);
taskRoutes.get("/", authorize("read-task"), getAllTask);
// shiftRoutes.get("/:id", authorize("read-shift"), getSingleShift);
// shiftRoutes.put("/:id", authorize("read-shift"), updateSingleShift);
// shiftRoutes.delete("/:id", authorize("delete-shift"), deleteSingleShift);
module.exports = taskRoutes;
