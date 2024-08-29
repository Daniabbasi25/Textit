import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  status?: string;
  profilePicture?: string;
}

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  profilePicture: {
    type: String,
    required: false,
  },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
