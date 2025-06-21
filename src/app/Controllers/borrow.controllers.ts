import { Request, Response, Router } from "express";
import { Borrow } from "../Models/borrow.models";
import { Book } from "../Models/books.models";

export const borrowRoutes = Router();

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