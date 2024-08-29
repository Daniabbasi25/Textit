import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest } from "../types/requeststypes";

// Define a custom interface for the Request object to include the user

const authMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    req.user = decoded; // Attach the decoded user info to the request object
    next(); // Proceed to the next middleware or controller
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
