const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, default: null },
    role: { type: String, default: 'USER' },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
  });

  module.exports = mongoose.model("Users", UserSchema);