import mongoose, { Schema } from "mongoose";
import { IBook } from "../interfaces.ts/books.interface";

const bookSchema = new Schema<IBook>(
  {
    title: {
       type: String, 
       required: true 
      },

    author: {
       type: String,
        required: true 
      },
    genre: {
       type: String, 
       enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'], required: true 
      },
    isbn: {
       type: String, 
       required: true, 
       unique: true 
      },
    description: {
       type: String 
      },
    copies: {
       type: Number,
        required: true, 
        min: 0 
      },
    available: {
       type: Boolean, 
       default: true 
      }
  },
   { timestamps: true, versionKey: false }
);





// bookSchema.methods.adjustCopies = async function (quantity: number) {
//   if (this.copies < quantity) {
//     throw new Error("Not enough copies available");
//   }
//   this.copies -= quantity;
//   this.available = this.copies > 0;
//   await this.save();
// };
bookSchema.methods.adjustCopies = async function (quantity : number){
  if ( this.copies < quantity) {
    throw new Error("Not enough copies available");
  }
  this.copies -= quantity;
  this.available = this.copies > 0;
  await this.save();
}

export const Book = mongoose.model<IBook>("Book", bookSchema);

