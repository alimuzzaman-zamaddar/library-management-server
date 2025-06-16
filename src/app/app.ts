import express, { Application, Request, Response } from "express";
import mongoose, { Schema } from "mongoose";
import { Note } from "./Models/notes.models";
import { notesRoutes } from "./Controllers/notes.controllers";
const app: Application = express();

app.use(express.json());



app.use("/notes", notesRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to note app");
});

export default app;
