import express, { Application, Request, Response } from "express";
import mongoose, { Schema } from "mongoose";
const app: Application = express();

app.use(express.json());

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
const Note = mongoose.model("Note", noteSchema);

app.post("/notes/crate-note", async (req: Request, res: Response) => {
  const body = req.body;

// approch 1
  // const myNote = new Note({
  //   title: "learning mongoose express",
  //   tags : {
  //     label : "note app",
  //   }
  // });
  // await myNote.save();


const note = await Note.create(body);

  res.status(201).json({
    success: true,
    message : "Note created successfully",
    note 
    });
});
app.get("/notes", async (req: Request, res: Response) => {
  const notes = await Note.find();
  res.status(201).json({
    success: true,
    message: "Notes fetched successfully",
    notes
  });
});
app.get("/notes/:noteId", async (req: Request, res: Response) => {
  const note = await Note.findById(req.params.noteId);
  res.status(201).json({
    success: true,
    message: "Notes fetched successfully",
    note
  });
});
app.patch("/notes/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const updatedData = req.body;
  const note = await Note.findByIdAndUpdate(noteId, updatedData, {new: true})
  res.status(201).json({
    success: true,
    message: "Notes updated successfully",
    note
  });
});
app.delete("/notes/:noteId", async (req: Request, res: Response) => {
  const note = await Note.deleteOne({ _id: req.params.noteId });
  res.status(201).json({
    success: true,
    message: "Notes fetched successfully",
    note
  });
});


app.get("/", (req: Request, res: Response) => {
  res.send("welcome to note app");
});

export default app;
