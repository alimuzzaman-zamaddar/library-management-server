import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import { Book } from "./app/Models/books.models";  
import { bookRoutes } from "./app/Controllers/books.controllers";
import { borrowRoutes } from "./app/Controllers/borrow.controllers";

const app: Application = express();

app.use(express.json());

app.use(bookRoutes);
app.use(borrowRoutes);

// app.post("/api/books", async (req: Request, res: Response) => {

//   const body = req.body;
//   try {
//     const book = await Book.create(body);
//     res.status(201).json({
//       success: true,
//       message: "Book created successfully",
//       book,
//     });
//   } catch (error: unknown) {
//     console.error("Error creating book:", error);
//     if (error instanceof Error) {
//       res.status(500).json({
//         success: false,
//         message: "Error creating book",
//         error: error.message,
//       });
//     } else {
//       res.status(500).json({
//         success: false,
//         message: "Unknown error occurred",
//       });
//     }
//   }
// });



app.get("/", (req: Request, res: Response) => {
  res.send("welcome to book app");
});

export default app;
