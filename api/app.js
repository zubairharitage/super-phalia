import express from "express";
import cors from "cors";

import route from "./routes/billRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/v1", route);
app.use("/api/v1", userRoute);

export default app;
