import AuthRouter from "./auth.js";
import CarsRouter from "./cars.js";

export default function routers(app) {
   app.get("/", (req, res) => {
      res.send("Home");
   });
   app.use("/cars", CarsRouter);
   app.use("/auth", AuthRouter);
}
