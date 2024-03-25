import router from "express";
import CarsController from "../controllers/cars.js";
const CarsRouter = router();
const carsController = new CarsController();
CarsRouter.get("/", carsController.getAllCars);
CarsRouter.get("/:id", carsController.getDetailCars);
CarsRouter.post("/", carsController.createCars);
CarsRouter.put("/:id", carsController.updateCars);
CarsRouter.delete("/:id", carsController.deleteCars);

export default CarsRouter;
