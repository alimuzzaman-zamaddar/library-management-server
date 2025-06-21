import express, { Request, response, Response } from "express";
import { Borrow } from "../Models/borrow.models";
import { Book } from "../Models/books.models";

export const borrowRoutes = express.Router();


borrowRoutes.post("/api/borrow", async (req: Request, res: Response) => {
  const { book, quantity, dueDate } = req.body;

  try {
    const foundBook = await Book.findById(book);

    if (!foundBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    if (foundBook.copies < quantity) {
      return res.status(400).json({
        success: false,
        message: "Not enough copies available",
      });
    }

    const borrow = await Borrow.create({ book, quantity, dueDate });

    foundBook.copies -= quantity;
    foundBook.available = foundBook.copies > 0;
    await foundBook.save();

    return res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to borrow the book",
      error: error.message,
    });
  }
});



borrowRoutes.get("/api/borrow", async (req: Request, res: Response) => {


  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" }
        }
      },

      {
        $lookup: {
          from: "books", 
          localField: "_id",
          foreignField: "_id",
          as: "bookInfo"
        }
      },

      {
        $unwind: "$bookInfo"
      },
      
      {
        $project: {
          _id: 0,
          totalQuantity: 1,
          book: {
            title: "$bookInfo.title",
            isbn: "$bookInfo.isbn"
          }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve borrow summary",
      error: error.message
    });
  }
});