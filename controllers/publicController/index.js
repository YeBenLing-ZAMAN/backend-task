const User = require("../../Models/userSchema");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../../config/generateToken");
const CompanySectors = require("../../Models/CompanySectorsSchema");

/* register */
const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirm_password } = req.body;
    if (!name || !email || !email || !password) {
      return res.status(400).json({ error: "please filled properly" });
    }

    /* for email exieted or not */
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "Email already Exist" });
    }
    const user = new User({
      name,
      email,
      password,
      confirm_password,
    });

    /* user infor store in database */
    const userSignUp = await user.save();
    if (userSignUp) {
      res.status(201).json({ message: "user signup successfully" });
    } else {
      res.status(500).json({ error: "Failed to signup" });
    }
  } catch (err) {
    console.log(err);
  }
};

/* login */
const authUser = async (req, res) => {
  // console.log(req.body.data);

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "please filled you data" });
  }

  try {
    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin); // get full information

    if (userLogin) {
      /* password checking with bcrypt */
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (!isMatch) {
        res.status(400).json({ error: "password wrong" });
      } else {
        res.json({
          token: generateToken(email),
          message: "user login successfully",
        });
      }
    } else {
      res.status(400).json({ error: "user is not register " });
    }
  } catch (err) {
    console.log(err);
  }
};

/* check email  */
const checkEmail = async (req, res) => {
  try {
    const email = req.params.email;
    if (!email) {
      res.status(400).json({
        message: "Please fill email field",
      });
    } else {
      const user = await User.findOne({ email: email });
      if (user) {
        res.status(400).json({
          message: "Email taken",
        });
      } else {
        res.status(200).json({
          message: "Available email",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.toString(),
    });
  }
};

module.exports = {
  registerUser,
  authUser,
  checkEmail,
};
