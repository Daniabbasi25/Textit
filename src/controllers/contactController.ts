import { Request, Response } from "express";
import { AuthenticatedRequest } from "../types/requeststypes";
import User from "../models/userModel";
import Contact from "../models/contactModel";

interface IUser {
  _id: string;
  name: string;
  email: string;
  status?: string;
  profilePicture?: string;
}

interface IGroupedUser {
  alphabet: string;
  data: IUser[];
}

const addContact = async (req: AuthenticatedRequest, res: Response) => {
  const { email } = req.body;
  const user = req.user; // Access the decoded user info from the token

  try {
    const usercheckwithemail = await User.findOne({
      email,
    });
    if (!usercheckwithemail) {
      return res.status(400).json({ message: "no user exist with this email" });
    }
    if (usercheckwithemail._id == user.id) {
      return res
        .status(400)
        .json({ message: "you can not add your self to friend list" });
    }
    const ifAlreadyExistInContacts = await Contact.findOne({
      userid: user.id,
      friendId: usercheckwithemail._id,
    });
    if (ifAlreadyExistInContacts) {
      return res.status(400).json({ message: "Already added to contact List" });
    }
    const newContact = new Contact({
      userid: user.id,
      friendId: usercheckwithemail._id,
    });
    await newContact.save();

    return res.status(200).json({
      message: "Contact added successfully.",
      contact: usercheckwithemail,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
const getContact = async (req: AuthenticatedRequest, res: Response) => {
  const user = req.user; // Access the decoded user info from the token

  try {
    // const user = await User.findOne({ email });
    const contacts = await Contact.find({
      userid: user.id,
    });
    const contactFriendIds = contacts.map((contact) => contact.friendId);

    const users: IUser[] = await User.find(
      {
        _id: { $in: contactFriendIds },
      },
      "_id name email status profilePicture"
    );

    // Group users by the first letter of their name
    const groupedUsers: IGroupedUser[] = users.reduce<IGroupedUser[]>(
      (acc, user) => {
        // Get the first letter of the user's name and convert it to lowercase
        const firstLetter = user.name[0].toLowerCase();

        // Find the existing group or create a new one
        let group = acc.find((g) => g.alphabet === firstLetter);
        if (!group) {
          group = { alphabet: firstLetter, data: [] };
          acc.push(group);
        }

        // Add the user to the group
        group.data.push(user);

        return acc;
      },
      []
    );

    // Sort the grouped users by alphabet if needed
    groupedUsers.sort((a, b) => a.alphabet.localeCompare(b.alphabet));

    return res.status(200).json(groupedUsers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export { addContact, getContact };
