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
router.post("/tasks", createTask);
router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getSingleTask);
router.put("/tasks/:id", updateSingleTask);
router.delete("/tasks/:id", deleteSingleTask);

module.exports = router;
