import express from "express";
import { createUser, getUser } from "../controller/userController.js";

const userRoute = express.Router();

userRoute.route("/user/create1/new").post(createUser);

userRoute.route("/user/get").get(getUser);

export default userRoute;
