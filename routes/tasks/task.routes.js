const express = require("express");
const router = express.Router();

// Import the updated controller functions
const {
  createTask,
  getAllTasks,
  getSingleTask,
  updateSingleTask,
  deleteSingleTask,
} = require("./task.controller");

// Define the routes
router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getSingleTask);
router.put("/:id", updateSingleTask);
router.delete("/:id", deleteSingleTask);

module.exports = router;
