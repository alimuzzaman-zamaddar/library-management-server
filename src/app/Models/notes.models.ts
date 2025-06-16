import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, default: "" },
  category: {
    type: String,
    enum: ["parsonal", "work", "study", "other"],
    default: "parsonal"
  },
  pinned: {
    type: Boolean,
    default: false
  },
  tags : {
    label : {type :  String, required: true},
    color : {type : String, default: "gray"}
  }
});

export const Note = mongoose.model("Note", noteSchema);