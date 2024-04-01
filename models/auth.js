import mongoose from "mongoose";
const Schema = mongoose.Schema;
const AuthSchema = new Schema(
   {
      username: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true, min: 6, max: 20 },
      role: { type: String, default: "member" },
   },
   { timeseries: true, versionKey: false }
);
const Auth = mongoose.model("Auth", AuthSchema);
export default Auth;
