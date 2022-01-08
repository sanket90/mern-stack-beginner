var express = require('express');
const { registerUser } = require("../services/register-service");
const { loginUser } = require("../services/login-service");

var router = express.Router();


router.route("/login").post(loginUser);

router.route("/register").post(registerUser);

module.exports = router;
