import Cars from "../models/cars.js";
class CarsController {
   async getAllCars(req, res) {
      try {
         const data = await Cars.find({});
         if (data) {
            return res.status(200).json({ message: "get done", data });
         }
         return res.status(404).json({ message: "not found" });
      } catch (error) {
         res.status(400).json({ message: "get false" });
      }
   }
   async getDetailCars(req, res) {
      try {
         const data = await Cars.findById(req.params.id);
         if (data) {
            return res.status(200).json({ message: "get done", data });
         }
         return res.status(404).json({ message: "not found" });
      } catch (error) {
         res.status(400).json({ message: "get detail false" });
      }
   }
   async createCars(req, res) {
      try {
         const data = await Cars.create(req.body);
         if (data) {
            return res.status(200).json({ message: "get done", data });
         }
         return res.status(404).json({ message: "not found" });
      } catch (error) {
         res.status(400).json({ message: "get false" });
      }
   }
   async updateCars(req, res) {
      try {
         const data = await Cars.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
         });
         if (data) {
            return res.status(200).json({ message: "update done", data });
         }
         return res.status(404).json({ message: "not found" });
      } catch (error) {
         res.status(400).json({ message: "update false" });
      }
   }
   async deleteCars(req, res) {
      try {
         const data = await Cars.findByIdAndDelete(req.params.id);
         if (data) {
            return res.status(200).json({ message: "delete done", data });
         }
         return res.status(404).json({ message: "not found" });
      } catch (error) {
         res.status(400).json({ message: "delete false" });
      }
   }
}
export default CarsController;
