import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces.ts/user.interface";

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true, trim: true, minlength: 5,maxlength: 50 },
  lastName: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: [18,'age must ba ate last {VALUE}'], max: 120 },
  email: { type: String,lowercase: true, required: true, unique: true, trim: true ,validate: {
    validator: function (value) {
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    },
    message: props => `${props.value} is not a valid email address!`
  }},
  password: { type: String, required: true, select: false },
  role: {
    type: String,
    uppercase:true,
    enum: ["USER", "ADMIN" , "SUPERADMIN"],
    default: "USER"
  }
});

export const User = mongoose.model("User", userSchema);