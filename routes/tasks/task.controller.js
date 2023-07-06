// const { getPagination } = require("../../../utils/query");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const moment = require("moment");

// const createTask = async (req, res) => {
//   if (req.query.query === "deletemany") {
//     try {
//       // delete many designation at once
//       const deletedTask = await prisma.Task.deleteMany({
//         where: {
//           id: {
//             in: req.body,
//           },
//         },
//       });

//       return res.status(200).json(deletedTask);
//     } catch (error) {
//       return res.status(400).json({ message: error.message });
//     }
//   } else if (req.query.query === "createmany") {
//     try {
//       const createTask = await prisma.Task.createMany({
//         data: req.body,
//         skipDuplicates: true,
//       });
//       return res.status(201).json(createTask);
//     } catch (error) {
//       return res.status(400).json({ message: error.message });
//     }
//   } else {
//     try {
//       let workHour = moment(req.body.endTime).diff(
//         moment(req.body.startTime),
//         "hours"
//       );
//       if (workHour < 0) {
//         workHour = 24 + workHour;
//       }
//       const createTask = await prisma.Task.create({
//         data: {
//           name: req.body.name,
//           startTime: new Date(req.body.startTime),
//           endTime: new Date(req.body.endTime),
//           // calculate time difference using moment in hours
//           workHour: workHour,
//         },
//       });
//       return res.status(201).json(createTask);
//     } catch (error) {
//       return res.status(400).json({ message: error.message });
//     }
//   }
// };

let data = [
  {
    user: "Moeez",
    taskName: "Design",
    taskDescription: "Create Design",
    comments: "Create the design with tailwind",
    taskStatus: {
      pending: "TO DO",
      start: "IN PROGRESS",
      End: "COMPLETED",
    },
    subTaskName: "Logo",
    SubTaskDescription: "Create Logo",
  },
];

const getAllTask = async (req, res) => {
  try {
    // Perform any necessary operations or data manipulation here

    // Send the data back as the response
    return res.status(200).json(data);
  } catch (error) {
    // Handle any errors that may occur
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// const getSingleTask = async (req, res) => {
//   try {
//     const singleTask = await prisma.Task.findUnique({
//       where: {
//         id: parseInt(req.params.id),
//       },
//       include: {
//         user: {
//           select: {
//             id: true,
//             firstName: true,
//             lastName: true,
//             userName: true,
//           },
//         },
//       },
//     });

//     return res.status(200).json(singleTask);
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

// const updateSingleTask = async (req, res) => {
//   try {
//     let workHour = moment(req.body.endTime).diff(
//       moment(req.body.startTime),
//       "hours"
//     );
//     if (workHour < 0) {
//       workHour = 24 + workHour;
//     }
//     const updateTask = await prisma.Task.update({
//       where: {
//         id: parseInt(req.params.id),
//       },
//       data: {
//         name: req.body.name,
//         startTime: new Date(req.body.startTime),
//         endTime: new Date(req.body.endTime),
//         workHour: workHour,
//       },
//     });

//     return res.status(200).json(updateTask);
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

// const deleteSingleTask = async (req, res) => {
//   try {
//     const deleteTask = await prisma.Task.delete({
//       where: {
//         id: parseInt(req.params.id),
//       },
//     });
//     return res.status(200).json(deleteTask);
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

module.exports = {
  //   createTask,
  getAllTask,
  //   getSingleTask,
  //   updateSingleTask,
  //   deleteSingleTask,
};
