import mongoose from "mongoose";

const Farmmer = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    }, // 이름
    userName: {
      type: String,
      required: true,
    }, // 이름
    gender: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    phone: {
      type: String,
    },
    joinDate: {
      type: Date,
    },
    lastLoginDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Farmmer || mongoose.model("Farmmer", Farmmer);
