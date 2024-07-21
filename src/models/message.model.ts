import mongoose, { Document, Schema } from "mongoose";
export interface Message extends Document {
  content: string;
  createdAt: Date;
}
export const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MessageModel =
  (mongoose.models.Message as mongoose.Model<Message>) ||
  mongoose.model("Message", MessageSchema);
export default MessageModel;
