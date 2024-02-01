import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config/config";

function createToken(user: IUser) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },

    config.jwtSecret,
    {
      expiresIn: 86400, // 24 hours
    }
  );
}

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
  if (!req.body || !req.body.email || !req.body.password)
    return res.status(400).send({ msg: "Email and password are required" });

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send({ msg: "The user does not exist" });

  const isMatch = await user.comparePassword(req.body.password);
  if (isMatch) return res.send({ token: createToken(user) });

  return res.status(400).send({ msg: "The email or password are incorrect" });
};
