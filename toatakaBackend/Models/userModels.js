const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: {
      type: String,
      required: true,
      minLength: [8, "Minimum length required is 8 characters"],
    },
  },
  { timestamp: true }
);
const userModel = mongoose.model("", userSchema);
module.exports = userModel;
