import express, { Request, Response } from "express";
import { User } from "../Models/user.models";
import z from "zod";

export const usersRoutes = express.Router();

const createUserZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
  password: z.string(),
  role: z.string().optional(),
});

usersRoutes.post("/crate-user", async (req: Request, res: Response) => {
  try {
    // const body = await createUserZodSchema.parseAsync(req.body);
    // console.log(body, "zod body");
    const body = req.body;
    const user = await User.create(body);
    res.status(201).json({
      success: true,
      message: "user created successfully",
      user : {}
    });
  } catch (error:any) {
    console.log(error);
        res.status(400).json({
      success: false,
      message: error.message,
      error
    });
  }
});
usersRoutes.get("/", async (req: Request, res: Response) => {
  const users = await User.find();
  res.status(201).json({
    success: true,
    message: "users fetched successfully",
    users,
  });
});
usersRoutes.get("/:userId", async (req: Request, res: Response) => {
  const user = await User.findById(req.params.userId);
  res.status(201).json({
    success: true,
    message: "users fetched successfully",
    user,
  });
});
usersRoutes.patch("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const updatedData = req.body;
  const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });
  res.status(201).json({
    success: true,
    message: "users updated successfully",
    user,
  });
});
usersRoutes.delete("/:userId", async (req: Request, res: Response) => {
  const user = await User.deleteOne({ _id: req.params.userId });
  res.status(201).json({
    success: true,
    message: "users deleted successfully",
    user,
  });
});
