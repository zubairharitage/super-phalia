import model from "../models/billModel.js";
import ApiFeatures from "../utils/apiFeatures.js";

// Create Bill
export const createBill = async (req, res) => {
  try {
    const bill = await model.create(req.body);

    return res.status(201).json({
      success: true,
      bill,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// get All Bills
export const getAllBills = async (req, res) => {
  try {
    const resultPerPage = 5;
    const billCount = await model.countDocuments();
    const apiFeatures = new ApiFeatures(model.find(), req.query)
      .search()
      .filter()
      .pagination(resultPerPage);
    const bills = await apiFeatures.query;

    return res.status(200).json({
      success: true,
      bills,
      billCount,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// get Bill details
export const getBillDetails = async (req, res) => {
  try {
    const bill = await model.findById(req.params.id);

    if (!bill) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      bill,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update Bill
export const updateBill = async (req, res) => {
  try {
    let bill = await model.findById(req.params.id);

    if (!bill) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

    bill = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res.status(200).json({
      success: true,
      bill,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// delete bill
export const deleteBill = async (req, res) => {
  try {
    const bill = await model.findById(req.params.id);

    if (!bill) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }
    await bill.remove();

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
