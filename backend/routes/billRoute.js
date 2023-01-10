import express from "express";
import {
  createBill,
  getAllBills,
  getBillDetails,
  updateBill,
  deleteBill,
} from "../controller/billController.js";

const route = express.Router();

route.route("/bill/new").post(createBill);

route.route("/bills").get(getAllBills);

route.route("/bill/:id").get(getBillDetails).put(updateBill).delete(deleteBill);

export default route;
