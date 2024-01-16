const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

router.get("/", userController.allUsers);
router.post("/root", userController.addUser);
router.post("/register", userController.registerUser);

module.exports = router;
