const express = require("express");
const {
  createSingleTransaction,
  getAllTransaction,
  getSingleTransaction,
  updateSingleTransaction,
  deleteSingleTransaction,
} = require("./transaction.controllers");
const authorize = require("../../../utils/authorize"); // authentication middleware

const transactionRoutes = express.Router();

transactionRoutes.post(
  "/",
  authorize("create-transaction"),
  createSingleTransaction
);
transactionRoutes.get("/", authorize("read-transaction"), getAllTransaction);
transactionRoutes.get(
  "/:id",
  authorize("read-transaction"),
  getSingleTransaction
);
transactionRoutes.put(
  "/:id",
  authorize("update-transaction"),
  updateSingleTransaction
);
transactionRoutes.patch(
  "/:id",
  authorize("delete-transaction"),
  deleteSingleTransaction
);

module.exports = transactionRoutes;
