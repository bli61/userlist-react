import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  sex: String,
  age: String,
  password: String
});

module.exports = mongoose.model("User", UserSchema);
