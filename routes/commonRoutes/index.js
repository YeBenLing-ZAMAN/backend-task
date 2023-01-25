const express = require("express");
const { getUserInfo} = require("../../controllers/commonController");
const { verifyJWT } = require("../../middleware/authMiddleware");
const router = express.Router();


router.use(verifyJWT);

router.get("/get_user", getUserInfo);
module.exports = router;