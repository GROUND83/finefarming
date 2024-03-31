import mongoose from "mongoose";

const Manager = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    }, // 이메일
    userName: {
      type: String,
      required: true,
    }, // 이름
    gender: {
      type: String,
    }, // 성별
    birthDate: {
      type: Date,
    }, // 생년월일
    phone: {
      type: String,
    }, // 연락처
    joinDate: {
      type: Date,
    }, // 가입일
    lastLoginDate: {
      type: Date,
    }, // 마지막 로그인
  },
  { timestamps: true }
);

export default mongoose.models.Manager || mongoose.model("Manager", Manager);
