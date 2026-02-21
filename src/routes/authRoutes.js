const express = require("express");
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");

const router = express.Router();

router.post("/login", loginController.login);
router.post("/register", registerController.register);

module.exports = router;
