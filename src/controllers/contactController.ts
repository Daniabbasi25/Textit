import { Request, Response } from "express";

// Define a custom interface for the Request object to include the user
interface AuthenticatedRequest extends Request {
  user?: any; // Adjust 'any' to the specific type of your decoded user object, e.g., { id: string, email: string }
}

const addContact = async (req: AuthenticatedRequest, res: Response) => {
  const { email } = req.body;
  const user = req.user; // Access the decoded user info from the token
  console.log("user: inside", user, email);

  try {
    // Your logic for adding a contact
    return res.status(200).json({ message: "Contact added successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export { addContact };
// 03355203084
