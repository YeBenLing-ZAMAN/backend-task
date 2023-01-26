const express = require("express");
const router = express.Router();

const {
  registerUser,
  authUser,
  checkEmail,
} = require("../../controllers/publicController/index");
const {
  getRootStore,
  getNextStore,
  addStore,
  addUserInfo,
  getUserStore,
} = require("../../controllers/scureController");

router.post("/register", registerUser);
router.post("/login", authUser);
router.get("/check_email/:email", checkEmail);

/* for testing */
router.get("/get-root-store", getRootStore);
router.post("/get-next-store", getNextStore);
router.put("/add-store", addStore);
router.post("/add-user-info", addUserInfo);
router.get("/get-user-store-info", getUserStore);

module.exports = router;
