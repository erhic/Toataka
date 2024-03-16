const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    service: { type: String, required: true },
    wastetype: { type: String, required: true },
    quantity: { type: Number, required: true },
    packagetype: { type: String, required: true },
    phoneno: { type: String, required: true },
    location: { type: String, required: true },
    street: { type: String, required: true },
  },
  { timestamp: true }
);
const orderModel = mongoose.model("", orderSchema);
model.exports = orderModel;
