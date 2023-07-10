const { getPagination } = require("../../utils/query");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const moment = require("moment");

const createTask = async (req, res) => {
  if (req.query.query === "deletemany") {
    try {
      const deletedTasks = await prisma.task.deleteMany({
        where: {
          id: {
            in: req.body,
          },
        },
      });

      return res.status(200).json(deletedTasks);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } else if (req.query.query === "createmany") {
    try {
      const createTasks = await prisma.task.createMany({
        data: req.body,
        skipDuplicates: true,
      });
      return res.status(201).json(createTasks);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } else {
    try {
      const createTask = await prisma.task.create({
        data: {
          title: req.body.title,
          description: req.body.description,
          subTasks: {
            create: req.body.subTasks,
          },
          attachments: req.body.attachments,
          startDate: req.body.startDate
            ? new Date(req.body.startDate)
            : undefined,
          endDate: req.body.endDate ? new Date(req.body.endDate) : undefined,
          comments: req.body.comments,
          updates: req.body.updates,
          assignees: req.body.assignees,
          watchers: req.body.watchers,
          status: req.body.status,
          isCompleted: req.body.isCompleted || false,
        },
      });
      return res.status(201).json(createTask);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};

const getAllTasks = async (req, res) => {
  if (req.body.query === "all") {
    try {
      const getAllTasks = await prisma.task.findMany({
        orderBy: {
          id: "asc",
        },
        include: {
          subTasks: true,
        },
      });

      return res.status(200).json(getAllTasks);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } else {
    const { skip, limit } = getPagination(req.query);
    try {
      const allTasks = await prisma.task.findMany({
        orderBy: {
          id: "asc",
        },
        skip: parseInt(skip),
        take: parseInt(limit),
        include: {
          subTasks: true,
        },
      });
      return res.status(200).json(allTasks);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};

const getSingleTask = async (req, res) => {
  try {
    const singleTask = await prisma.task.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
      include: {
        subTasks: true,
      },
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
        subTasks: {
          create: req.body.subTasks,
        },
        attachments: req.body.attachments,
        startDate: req.body.startDate
          ? new Date(req.body.startDate)
          : undefined,
        endDate: req.body.endDate ? new Date(req.body.endDate) : undefined,
        comments: req.body.comments,
        updates: req.body.updates,
        assignees: req.body.assignees,
        watchers: req.body.watchers,
        status: req.body.status,
        isCompleted: req.body.isCompleted || false,
      },
    });

    return res.status(200).json(updateTask);
  } catch (error) {
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
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getSingleTask,
  updateSingleTask,
  deleteSingleTask,
};
