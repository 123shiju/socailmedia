const express = require("express");
const router = express.Router();
const { register } = require("../Controllers/UserController");

router.post("/register", register);
// router.post("/login", loginPage);

module.exports = router;
