let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  userName: {
    type: String,
  },
  ref: {
    type: String,
  },
});

let User = mongoose.model("user", userSchema);
module.exports = User;
