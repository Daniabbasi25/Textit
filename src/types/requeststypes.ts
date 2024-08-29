import { Request } from "express";

export interface AuthenticatedRequest extends Request {
  user?: any; // Adjust 'any' to the type of your decoded user object
}
