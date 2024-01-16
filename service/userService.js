const User = require("../models/User");

let createUserService = async function (data) {
  let result = await User.create(data);
  return result;
};

let registerService = async function (referrerId) {
  let result = await User.findById(referrerId);
  return result;
};

let allUsers = async function () {
  let result = await User.find({});
  return result;
};

const userService = {
  createUserService,
  registerService,
  allUsers,
};

module.exports = userService;
