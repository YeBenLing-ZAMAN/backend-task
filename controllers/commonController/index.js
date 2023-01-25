const User = require("../../Models/userSchema");

// Get user Information
const getUserInfo = async (req, res) => {
  try {
    let email = req.auth.id;
    const user = await User.findOne({ email: email }).select([
      "-confirm_password",
      "-password",
    ]);

    if (user) {
      res.status(200).json({
        data: user,
      });
    } else {
      res.status(404).json({
        message: "Invalid user ID",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

module.exports = {
  getUserInfo,
};
