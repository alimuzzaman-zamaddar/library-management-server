import express, {  Request, Response } from "express";
import { User } from "../Models/user.models";


export const usersRoutes = express.Router();


usersRoutes.post("/crate-user", async (req: Request, res: Response) => {
  const body = req.body;
const user = await User.create(body);

  res.status(201).json({
    success: true,
    message : "user created successfully",
    user 
    });
});
usersRoutes.get("/", async (req: Request, res: Response) => {
  const users = await User.find();
  res.status(201).json({
    success: true,
    message: "users fetched successfully",
    users
  });
});
usersRoutes.get("/:userId", async (req: Request, res: Response) => {
  const user = await User.findById(req.params.userId);
  res.status(201).json({
    success: true,
    message: "users fetched successfully",
    user
  });
});
usersRoutes.patch("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const updatedData = req.body;
  const user = await User.findByIdAndUpdate(userId, updatedData, {new: true})
  res.status(201).json({
    success: true,
    message: "users updated successfully",
    user
  });
});
usersRoutes.delete("/:userId", async (req: Request, res: Response) => {
  const user = await User.deleteOne({ _id: req.params.userId });
  res.status(201).json({
    success: true,
    message: "users deleted successfully",
    user
  });
});
