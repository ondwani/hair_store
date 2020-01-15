const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});
const cartSchema = new mongoose.Schema({
  length:String,
  type:String,
  color:String,
  density:String,
  quality:String,
  frontal:String
});

const Cart = mongoose.model("Cart", cartSchema);
const User = mongoose.model("User", userSchema);

module.exports={Cart, User}