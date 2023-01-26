const CompanySectors = require("../../Models/CompanySectorsSchema");
const UserSelectedSectors = require("../../Models/userSelectedSectorsSchema");

/* get root */
const getRootStore = async (req, res) => {
  try {
    const root = await CompanySectors.find({}).select(["root"]);
    if (root) {
      res.json({
        status: "success",
        data: root,
        message: "data found successfully",
      });
    } else {
      res.status(400).json({ error: "data not found successfully " });
    }
  } catch (err) {
    console.log(err);
  }
};

/* get next */
const getNextStore = async (req, res) => {
  const { next } = req.body;
  console.log(next);
  try {
    const finding = next.split(" ").join("_");
    console.log(finding);
    const root = await CompanySectors.find({});
    const result = root[0][finding];
    if (result) {
      res.json({
        status: "success",
        data: result,
        message: "data found successfully",
      });
    } else {
      res.status(400).json({ error: "data not found successfully", data: [] });
    }
  } catch (err) {
    console.log(err);
  }
};

/* store  */
const addStore = async (req, res) => {
  try {
    const { root } = req.body;
    if (!root) {
      return res.status(400).json({ error: "please filled properly" });
    }

    const companySectors = new CompanySectors({
      ...req.body,
    });

    /* user infor store in database */
    const result = await companySectors.save();
    if (result) {
      res.status(201).json({ message: "product successfully" });
    } else {
      res.status(500).json({ error: "Failed to added" });
    }
  } catch (err) {
    res.status(400).json({ error: "Failed to added", data: err });
  }
};

const addUserInfo = async (req, res) => {
  try {
    // const { id } = req.auth;
    if (!req.body.name || !req.body.agree || !req.body.sectors) {
      return res.status(400).json({ error: "please filled properly" });
    }

    const userSelectedSectors = new UserSelectedSectors({
      ...req.body,
      email: null,
    });

    /* user infor store in database */
    const result = await userSelectedSectors.save();
    if (result) {
      res.status(201).json({ message: "store added successfully" });
    } else {
      res.status(500).json({ error: "Failed to added" });
    }
  } catch (err) {
    res.status(400).json({ error: "Failed to added", data: err });
  }
};

/* get user store info */
const getUserStore = async (req, res) => {
  try {
    // const { id } = req.auth;
    const root = await UserSelectedSectors.find().sort({
      created: -1,
    });
    if (root) {
      res.json({
        status: "success",
        data: root,
        message: "user data found successfully",
      });
    } else {
      res.status(400).json({ error: "user data not found successfully " });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRootStore,
  getNextStore,
  addStore,
  addUserInfo,
  getUserStore,
};
