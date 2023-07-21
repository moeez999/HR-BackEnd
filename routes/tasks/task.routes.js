const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

// Import the updated controller functions
const {
  createTask,
  getAllTasks,
  getSingleTask,
  updateSingleTask,
  deleteSingleTask,
  downloadAttachment,
} = require("./task.controller");

// Define the routes
router.post("/", upload.array("attachments", 6), createTask);
router.get("/", getAllTasks);
router.get("/:id", getSingleTask);
router.put("/:id", upload.array("attachments", 6), updateSingleTask);
router.delete("/:id", deleteSingleTask);
router.get("/download/:filename", downloadAttachment);

module.exports = router;
