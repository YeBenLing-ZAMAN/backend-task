const mongoose = require("mongoose");

const userSelectedSectorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: false },
  sectors: [{ type: String, required: true }],
  agree: { type: Boolean, required: true, num: [true, false] },
  created: { type: String, default: new Date().getTime() },
});

const UserSelectedSectors = mongoose.model(
  "USERESELECTEDSECTORS",
  userSelectedSectorsSchema
);
module.exports = UserSelectedSectors;
