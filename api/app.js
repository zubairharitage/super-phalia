import express from "express";
import cors from "cors";

import route from "./routes/billRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/phalia/api/v1", route);
app.use("/phalia/userapi/v1", userRoute);

export default app;
