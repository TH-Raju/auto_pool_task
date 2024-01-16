const User = require("../models/User");
const userService = require("../service/userService");

let allUsers = async function (req, res) {
  try {
    let allusers = await userService.allUsers();
    if (allusers) {
      let data = {
        success: true,
        status: 200,
        data: allusers,
      };
      res.send(data);
    }
  } catch (err) {
    console.log(err);
  }
};

let addUser = async function (req, res) {
  try {
    let newUser = await userService.createUserService(req.body);
    if (newUser) {
      let data = {
        success: true,
        status: 200,
        data: newUser,
      };
      res.send(data);
    }
  } catch (err) {
    console.log(err);
  }
};

let registerUser = async (req, res) => {
  const { username, referrerId } = req.body;

  try {
    // Check if referrer exists
    const referrer = await User.findById(referrerId);
    if (!referrer) {
      return res.status(400).json({ error: "Referrer not found" });
    }

    // Check if the referrer has fewer than 4 referrals
    if (referrer.referrals.length >= 4) {
      return res.status(400).json({ error: "Referrer pool full" });
    }

    // Create a new user
    const newUser = new User({ username });
    await newUser.save();

    // Add the new user to the referrer's pool
    referrer.referrals.push(newUser._id);
    await referrer.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const userController = {
  addUser,
  registerUser,
  allUsers,
};

module.exports = userController;
