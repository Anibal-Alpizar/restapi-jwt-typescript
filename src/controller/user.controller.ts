import { Request, Response } from "express";
import User, { IUser } from "../models/User";

export const signup = async (req: Request, res: Response) => {
  if (!req.body || !req.body.email || !req.body.password)
    return res.status(400).send({ msg: "Email and password are required" });

  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send({ msg: "The user already exists" });

  const newUser = new User(req.body);
  await newUser.save();

  return res.send({ newUser });
};

export const signin = async (req: Request, res: Response) => {
  res.send("signin");
};
