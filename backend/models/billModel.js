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
    required: [true, "Please enter starting time"],
  },
  closingTime: {
    type: String,
    required: [true, "Please enter closing time"],
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
  date: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Invoice", invoiceSchema);

export default model;
