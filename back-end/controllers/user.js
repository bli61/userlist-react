import mongoose from "mongoose";
import { Router } from "express";
import User from "../models/user";

const UserController = () => {
  mongoose.connect(
    "mongodb://daniel:su15859711084@ds131902.mlab.com:31902/user-list"
  );

  let api = Router();

  api.get("/", (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res.send(err);
      }
      res.status(200).json(users);
    });
  });

  api.post("/", (req, res) => {
    let newUser = new User();
    newUser.lastName = req.body.lastName;
    newUser.firstName = req.body.firstName;
    newUser.sex = req.body.sex;
    newUser.age = req.body.age;
    newUser.password = req.body.password;
    console.log(newUser);
    newUser.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "new user saved successfully" });
    });
  });

  // /api/user/:id
  api.get("/:id", (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  });

  api.put("/:id", (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        res.send(err);
      }
      console.log(req.params.id);
      user.lastName = req.body.lastName;
      user.firstName = req.body.firstName;
      user.sex = req.body.sex;
      user.age = req.body.age;
      user.password = req.body.password;

      user.save(err => {
        if (err) {
          res.send(err);
        }
        res.json({ message: "user update successful" });
      });
    });
  });

  return api;
};

export default UserController;
