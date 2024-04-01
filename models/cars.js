import mongoose from "mongoose";
const Schema = mongoose.Schema;
const CarsSchema = new Schema(
   {
      title: { type: String, required: true },
      rate: { type: Number, min: 1, max: 10, default: 5 },
      description: { type: String, required: true },
      year: { type: Number, required: true },
      active: { type: Boolean, default: true },
      categories: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "categories",
      },
   },
   { timeseries: true, versionKey: false }
);
const Cars = mongoose.model("cars", CarsSchema);
export default Cars;
