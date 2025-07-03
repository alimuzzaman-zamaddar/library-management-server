import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import { Book } from "./app/Models/books.models";
import { bookRoutes } from "./app/Controllers/books.controllers";
import cors from "cors"; 
import { borrowRoutes } from "./app/Controllers/borrow.controllers";


const app: Application = express();


app.use(
  cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], 
  })
);

app.use(express.json());

// Define routes
app.use(bookRoutes);
app.use(borrowRoutes);

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("welcome to book app");
});

export default app;
