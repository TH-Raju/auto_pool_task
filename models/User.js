let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  userName: {
    type: String,
  },
  referrals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

let User = mongoose.model("user", userSchema);

module.exports = User;
