import express from "express";

import route from "./routes/billRoute.js";

const app = express();

app.use(express.json());

app.use("/api/v1", route);

export default app;
