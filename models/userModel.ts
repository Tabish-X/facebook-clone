import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  contactInfo: [
    {
      contact: { type: String },
      contactType: { type: String },
      verified: { type: Boolean },
      ConfirmToken: String,
      confirmTokenExpiry: Date,
    },
  ],
  password: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  confirm: {
    type: Boolean,
    default: false,
  },
  username: String,
  pronoun: String,
  token: String,
  tokenExpiry: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(this.password, salt);
  this.password = hashPassword;
});

userSchema.methods.MatchPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.models["User"] || mongoose.model("User", userSchema);
export default userModel;
