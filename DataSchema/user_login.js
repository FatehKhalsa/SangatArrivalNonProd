const mongoose = require("mongoose");
const UserLogin = mongoose.model(
  "UserLogin",
  new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);
module.exports = UserLogin;
