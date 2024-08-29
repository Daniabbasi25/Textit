import mongoose, { Document, Schema } from "mongoose";
interface IContat extends Document {
  userid: string;
  friendId: string;
}

const contactSchema: Schema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  friendId: {
    type: String,
    required: true,
  },
});
const Contact = mongoose.model<IContat>("Contact", contactSchema);
export default Contact;
