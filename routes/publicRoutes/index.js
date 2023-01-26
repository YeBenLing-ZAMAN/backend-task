const express = require("express");
const router = express.Router();

const {
  registerUser,
  authUser,
  checkEmail
} = require("../../controllers/publicController/index");

router.post("/register", registerUser);
router.post("/login", authUser);
router.get("/check_email/:email", checkEmail);

module.exports = router;
