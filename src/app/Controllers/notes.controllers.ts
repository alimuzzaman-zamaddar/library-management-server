import express, {  Request, Response } from "express";
import { Note } from "../Models/notes.models";


export const notesRoutes = express.Router();


notesRoutes.post("/crate-note", async (req: Request, res: Response) => {
  const body = req.body;
const note = await Note.create(body);

  res.status(201).json({
    success: true,
    message : "Note created successfully",
    note 
    });
});
notesRoutes.get("/", async (req: Request, res: Response) => {
  const notes = await Note.find();
  res.status(201).json({
    success: true,
    message: "Notes fetched successfully",
    notes
  });
});
notesRoutes.get("/:noteId", async (req: Request, res: Response) => {
  const note = await Note.findById(req.params.noteId);
  res.status(201).json({
    success: true,
    message: "Notes fetched successfully",
    note
  });
});
notesRoutes.patch("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const updatedData = req.body;
  const note = await Note.findByIdAndUpdate(noteId, updatedData, {new: true})
  res.status(201).json({
    success: true,
    message: "Notes updated successfully",
    note
  });
});
notesRoutes.delete("/:noteId", async (req: Request, res: Response) => {
  const note = await Note.deleteOne({ _id: req.params.noteId });
  res.status(201).json({
    success: true,
    message: "Notes fetched successfully",
    note
  });
});
