import mongoose, { Schema } from "mongoose";
import { IAddress, IUser } from "../interfaces.ts/user.interface";
import validator from "validator";
import { number } from "zod";

const addressSchema =  new Schema<IAddress>({

    city: {type : String},
    street: {type : String},
    zip: {type : Number}
  },
  {
    _id: false,
    timestamps: true
  }
)

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true, trim: true, minlength: 5,maxlength: 50 },
  lastName: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: [18,'age must ba ate last {VALUE}'], max: 120 },
  // email: { type: String,lowercase: true, required: true, unique: true, trim: true ,validate: {
  //   validator: function (value) {
  //     return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
  //   },
  //   message: props => `${props.value} is not a valid email address!`
  // }},
   email: { type: String,lowercase: true, required: true, unique: true, trim: true ,
  validate:[validator.isEmail , "invalid email thesos kano tui {VALUE} aita kono email holo beta"]},
   
  password: { type: String, required: true, select: false },
  role: {
    type: String,
    uppercase:true,
    enum: ["USER", "ADMIN" , "SUPERADMIN"],
    default: "USER"
  },
  address:  {type : addressSchema},
  

});

export const User = mongoose.model("User", userSchema);