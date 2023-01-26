const express = require("express");
const router = express.Router();

const {
  getRootStore,
  getNextStore,
  addStore,
  addUserInfo,
  getUserStore
} = require("../../controllers/scureController/index");

/* JWT Authentication */
const { verifyJWT, verifyUser } = require("../../middleware/authMiddleware");
const middleware = [verifyJWT, verifyUser];
router.use(middleware);
/* ---------- */

// router.get("/get-root-store", getRootStore);
// router.post("/get-next-store", getNextStore);
// router.put("/add-store", addStore);
// router.post("/add-user-info", addUserInfo);
// router.get("/get-user-store-info", getUserStore);


module.exports = router;
