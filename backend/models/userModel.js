import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please enter username"],
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.ComparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
