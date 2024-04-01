import router from "express";
import CarsController from "../controllers/cars";
import { checkPermission } from "../middlewares/checkPermission";
const CarsRouter = router();
const carsController = new CarsController();
CarsRouter.get("/", carsController.getAllCars);
CarsRouter.get("/:id", carsController.getDetailCars);
CarsRouter.post("/", checkPermission, carsController.createCars);
CarsRouter.put("/:id", checkPermission, carsController.updateCars);
CarsRouter.delete("/:id", checkPermission, carsController.deleteCars);

export default CarsRouter;
