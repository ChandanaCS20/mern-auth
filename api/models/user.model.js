import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: {
      type: String,
      default: "https://i.pravatar.cc/250?u=unique-identifier",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema); // here the User is of MongoDB in there it will be plural ("users")

export default User;
