import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // unique reiskia negali kartotis
  },
  password: {
    type: String,
    required: true,
  },
  permissions: {
    type: [String],
    default: [],
  },
});

export default mongoose.model("User", userSchema);
