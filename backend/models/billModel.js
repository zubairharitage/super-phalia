import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: Number,
    required: [true, "Please enter invoice number"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Please enter invoice name"],
    trim: true,
  },
  startingTime: {
    type: String,
  },
  closingTime: {
    type: String,
  },
  jobDescription: {
    type: String,
    required: [true, "Please enter job description"],
  },
  equipmentType: {
    type: String,
  },
  tripHours: {
    type: Number,
    required: [true, "Please enter trip hours"],
  },
  rate: {
    type: Number,
    required: [true, "Please enter rate"],
  },
  tax: {
    type: Number,
    default: 0,
  },
  trn: {
    type: Number,
  },
  cstPay: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  paid: {
    type: Boolean,
    required: [true, "Please Select paid or unpaid"],
  },
  date: {
    type: String,
  },
});

const model = mongoose.model("Invoice", invoiceSchema);

export default model;
