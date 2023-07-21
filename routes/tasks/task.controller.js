const { getPagination } = require("../../utils/query");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const moment = require("moment");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const createTask = async (req, res) => {
  try {
    const createTask = await prisma.task.create({
      data: {
        clientId: req.body.clientId,
        taskPrice: req.body.taskPrice,
        title: req.body.title,
        description: req.body.description,
        attachments: req.files,

        startDate: req.body.startDate,
        endDate: req.body.endDate,
        comments: req.body.comments,
        assignee: req.body.assignee,
        // assigneeId: parseInt(req.body.assigneeId),
        status: req.body.status,
      },
    });

    console.log(createTask);
    return res.status(201).json(createTask);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
const downloadAttachment = async (req, res) => {
  try {
    const { filename } = req.params;
    const file = path.join(__dirname, "..", "..", "uploads", filename);

    // Check if the file exists
    if (fs.existsSync(file)) {
      // Set the appropriate headers for the file download
      res.setHeader(
        "Content-Disposition",
        `attachments; filename="${filename}"`
      );
      res.setHeader("Content-Type", "application/octet-stream");

      // Stream the file to the response
      const fileStream = fs.createReadStream(file);
      fileStream.pipe(res);
    } else {
      // If the file doesn't exist, return a 404 Not Found response
      res.status(404).json({ message: "File not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const getAllTasks = await prisma.task.findMany({
      orderBy: {
        id: "asc",
      },
      // include: {
      //   subTasks: true,
      // },
    });

    return res.status(200).json(getAllTasks);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const getSingleTask = async (req, res) => {
  try {
    const singleTask = await prisma.task.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
      // include: {
      //   subTasks: true,
      // },
    });

    return res.status(200).json(singleTask);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const updateSingleTask = async (req, res) => {
  try {
    const updateTask = await prisma.task.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        title: req.body.title,
        description: req.body.description,
        attachments: req.files,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        comments: req.body.comments,
        assignee: req.body.assignee,
        status: req.body.status,
      },
    });

    return res.status(200).json(updateTask);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

const deleteSingleTask = async (req, res) => {
  try {
    const deleteTask = await prisma.task.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    return res.status(200).json(deleteTask);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateSingleTask,
  deleteSingleTask,
  getSingleTask,
  downloadAttachment,
};
