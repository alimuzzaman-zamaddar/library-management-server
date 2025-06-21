import express, {  Request, Response } from "express";
import { Book } from "../Models/books.models";


export const bookRoutes = express.Router();


bookRoutes.post("/api/books", async (req: Request, res: Response) => {
  const body = req.body;
const book = await Book.create(body);

  res.status(201).json({
    success: true,
    message : "book created successfully",
    book 
    });
});
bookRoutes.get("/api/books", async (req: Request, res: Response) => {
  const data = await Book.find();
  res.status(201).json({
    success: true,
    message: "Books retrieved successfully",
    data
  });
});
bookRoutes.get("/api/books/:bookId", async (req: Request, res: Response) => {
  const data = await Book.findById(req.params.bookId);
  res.status(201).json({
    success: true,
    message: "Books retrieved successfully",
    data
  });
});
bookRoutes.patch("/api/books/:bookId", async (req: Request, res: Response) => {
  const noteId = req.params.bookId;
  const updatedData = req.body;
  const data = await Book.findByIdAndUpdate(noteId, updatedData, {new: true})
  res.status(201).json({
    success: true,
    message: "Book updated successfully",
    data
  });
});
bookRoutes.delete("/api/books/:bookId", async (req: Request, res: Response) => {
  const data = await Book.deleteOne({ _id: req.params.noteId });
  res.status(201).json({
    success: true,
    message: "Book deleted successfully",
    data: null
  });
});
