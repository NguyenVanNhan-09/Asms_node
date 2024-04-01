import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Auth from "../models/auth";
dotenv.config();
const { SECRET_CODE } = process.env;

const checkPermission = async (req, res, next) => {
   try {
      // bước 1: người dùng đăng nhập hay chưa ?????
      const token = req.headers.authorization?.split(" ")[1];
      // bước 2: kiểm tra token
      if (!token) {
         return res.status(401).json({
            message: "Bạn chưa đăng nhập !!!",
         });
      }
      // bước 3: kiểm tra quyền của người dùng
      const decoded = jwt.verify(token, SECRET_CODE);
      const user = await Auth.findById(decoded._id);
      if (!user) {
         return res.status(403).json({
            message: "token lỗi",
         });
      }
      if (user.role !== "admin") {
         return res.status(400).json({
            message: "Bạn không có quyền làm việc này !!!",
         });
      }
      // bước 4: next
      next();
   } catch (error) {
      return res.status(500).json({ name: error.name, message: error.message });
   }
};

export { checkPermission };
