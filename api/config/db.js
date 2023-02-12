import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `Database connected with host ${con.connection.host}`.bgCyan.white.bold
    );
  } catch (err) {
    console.log(`${err.message}`.bgRed.white.bold);
  }
};

export default connectDB;
