import Category from "../models/categories";
// import mongoose from "mongoose";
class CategorieController {
   // All Categorie
   async getAllCategorie(req, res) {
      try {
         const categories = await Category.find({});
         console.log(categories);
         if (categories) {
            return res
               .status(200)
               .json({ message: "lấy nhiều sản phẩm thành công", categories });
         }
         return res
            .status(400)
            .json({ message: "lấy nhiều sản phẩm thất bại" });
      } catch (error) {
         res.status(400).json({ message: error.message });
      }
   }
   // Details Categorie
   async getlCategorieDetail(req, res) {
      try {
         const categorie = await Category.findById(req.params.id);
         console.log(categorie);
         if (categorie) {
            return res
               .status(200)
               .json({ message: "lấy 1 sản phẩm thành công", categorie });
         }
         return res.status(404).json({ message: "lấy 1 sản phẩm thất bại" });
      } catch (error) {
         res.status(400).json({ message: error.message });
      }
   }
   // Add Categorie\
   // cách 0
   async createCategorie(req, res) {
      try {
         //  const { data } = await Categorie.post("/categories", req.body);
         const data = await Category.create(req.body);
         console.log(data);
         if (!data) {
            return res.status(400).json({ message: "thêm sản phẩm thất bại" });
         }
         return res.status(200).json({
            message: "thêm sản phẩm thành công",
            data,
         });
      } catch (error) {
         res.status(400).json({
            name: error.name,
            message: error.message,
         });
      }
   }
   // cách 1
   // creadCategorie(req, res) {
   //    // Model.create({data})
   //    Categorie.create({
   //       title: "Book 2",
   //       description: "description 2",
   //       author: "author ",
   //       image: "image 2",
   //       price: 1,
   //       rate: 2,
   //    });

   //    res.send("Create Categorie");
   // }

   // cách 2
   // async createCategorie(req, res) {
   //    const categorie = new Categorie(req.body);
   //    const addCategorie = await categorie.save;
   //    console.log(categorie);
   //    res.status(200).json({ mes: "Add categorie successful", data: addCategorie });
   // }

   // Update Categorie
   async updateCategorie(req, res) {
      try {
         const data = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
               new: true,
            }
         );
         if (data) {
            return res
               .status(200)
               .json({ mes: "cập nhật sản phẩm thành công", data });
         }
         return res
            .status(401)
            .json({ mess: "cập nhật sản phẩm thất bại", data });
      } catch (error) {
         res.status(400).json({ message: error.message });
      }
   }
   // Delete Categorie
   async deleteCategorie(req, res) {
      try {
         const data = await Category.findByIdAndDelete(req.params.id);
         if (data) {
            return res.status(200).json({
               mes: "Xóa sản phẩm thành công !!!",
            });
         }
         return res
            .status(404)
            .json({ message: "không tim thấy sản phẩm cần xóa" });
      } catch (error) {
         res.status(400).json({ message: error.message });
      }
   }
}
export default CategorieController;
