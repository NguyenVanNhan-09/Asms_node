import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
   {
      title: { type: String, required: true },
      description: { type: String },
      author: { type: String },
      image: { type: String },
      price: { type: Number },
      rate: { type: Number },
      date: { type: Number, min: 10, max: 60, default: 11 },
   },
   { timestamps: true, versionKey: false }
);

const Category = mongoose.model("categories", CategorySchema);
export default Category;
