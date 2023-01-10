import dotenv from "dotenv";
import colors from "colors";

import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config({ path: "backend/config/config.env" });

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(
    `Application is running on port ${process.env.PORT}`.white.bgGreen.italic
      .bold
  )
);
