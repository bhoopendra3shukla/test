const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    mobileNo: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const user = mongoose.model("user", userSchema);
