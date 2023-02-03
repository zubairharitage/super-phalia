import userModel from "../models/userModel.js";
import ApiFeatures from "../utils/apiFeatures.js";

// Create User
export const createUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);

    return res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// get User
export const getUser = async (req, res) => {
  try {
    const apiFeatures = new ApiFeatures(userModel.find(), req.query);
    const user = await apiFeatures.query;

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
