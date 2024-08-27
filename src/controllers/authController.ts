import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET as string, // Ensure you have a JWT_SECRET in your environment variables
      { expiresIn: "1h" }
    );

    // Exclude password from the user object
    const userResponse = {
      name: newUser.name,
      email: newUser.email,
      _id: newUser._id,
    };

    res.status(201).json({
      message: "User registered successfully",
      user: userResponse,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" }
    );

    const result = {
      email: user.email,
      _id: user._id,
      name: user.name,
    };

    res.json({
      token,
      user: result,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export { register, login };
