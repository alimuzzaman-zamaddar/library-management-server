import express, {  Request, Response } from "express";
import { Book } from "../Models/books.models";


export const bookRoutes = express.Router();


bookRoutes.post("/api/books", async (req: Request, res: Response) => {
  const body = req.body;
const data = await Book.create(body);

  res.status(201).json({
    success: true,
    message : "book created successfully",
    data 
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

bookRoutes.put("/api/books/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const updatedData = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(bookId, updatedData, {
      new: true,
      runValidators: true, 
    });

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating book",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});
bookRoutes.delete("/api/books/:bookId", async (req: Request, res: Response) => {
  const data = await Book.deleteOne({ _id: req.params.bookId });
  res.status(201).json({
    success: true,
    message: "Book deleted successfully",
    data: null
  });
});
