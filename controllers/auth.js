import Auth from "../models/auth";
import { registerValidate, loginValidate } from "../validate/auth";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const { SECRET_CODE } = process.env;
class AuthController {
   // async registerAuth(req, res) {
   //    try {
   //       const user = await Auth.create(req.body);
   //       if (user) {
   //          return res.status(200).json({ message: "register done", user });
   //       }
   //       return res.status(404).json({ message: "not found" });
   //    } catch (error) {
   //       res.status(400).json({ message: error.message });
   //    }
   // }
   // async registerAuth(req, res) {
   //    try {
   //       //  const user = await Auth.create(req.body);
   //       //  if (user) {
   //       //     return res.status(200).json({ message: "get done", user });
   //       //  }
   //       //  return res.status(404).json({ message: "not found" });
   //       // check email
   //       const { email, password } = req.body;
   //       const emailExist = await Auth.findOne({ email });
   //       if (emailExist) {
   //          return res
   //             .status(400)
   //             .json({ message: "Email da dc dang ky roi ban oi" });
   //       }
   //       const hashPassword = await bcryptjs.hash(password, 10);
   //       const user = await Auth.create({
   //          username,
   //          email,
   //          password: hashPassword,
   //       });
   //       res.status(201).json({
   //          message: "tạo tài khoản thành công",
   //          data: { ...user.toObject(), password: undefined },
   //       });
   //    } catch (error) {
   //       res.status(400).json({ message: "đăng ký thất bại" });
   //    }
   // }
   // async loginAuth(req, res) {
   //    try {
   //    } catch (error) {
   //       res.status(400).json({ message: "login false", name: error.name });
   //    }
   // }
   async login(req, res) {
      try {
         // bước 1 : Validate data từ phía client
         const { error } = loginValidate.validate(req.body, {
            abortEarly: false,
         });
         if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({ message: errors });
         }
         // bước 2: kiểm tra email đã tồn tại hay chưa
         const user = await Auth.findOne({ email: req.body.email });
         if (!user) {
            return res.status(404).json({
               message:
                  "email này chưa được đăng ký bạn có muốn đăng ký không ?",
            });
         }
         // bước 3: kiểm tra password
         const isMatch = await bcryptjs.compare(
            req.body.password,
            user.password
         );
         if (!isMatch) {
            return res.status(400).json({
               message: "mật khẩu không đúng",
            });
         }
         // bước 4: tạo JWT
         const accessToken = await Jwt.sign({ _id: user._id }, SECRET_CODE);
         console.log(accessToken);
         // bước 5 : trả ra thông báo cho người dùng!
         user.password = undefined;
         return res.status(200).json({
            message: "đăng nhập thành công",
            user,
            accessToken,
         });
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
      // res.send("dang ky ne");
   }
   async register(req, res) {
      try {
         // bước 1: validate dư liệu người dùng
         const { error } = registerValidate.validate(req.body, {
            abortEarly: false,
         });
         if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({ message: errors });
         }
         // bước 2: check user đã tồn tại hay chưa
         const userExists = await Auth.findOne({ email: req.body.email });
         if (userExists) {
            return res
               .status(400)
               .json({ message: "Email đã được đăng ký !!!" });
         }
         // bước 3: mã hóa password
         const hashedPassword = await bcryptjs.hash(req.body.password, 10);

         // bước 4: khởi tạo user trong db
         const user = await Auth.create({
            ...req.body,
            password: hashedPassword,
         });
         // bước 5: thông báo cho người dừng đăng ký thành công
         // xóa mật khẩu đi
         user.password = undefined;
         return res.status(200).json({
            message: "đăng ký user thành công!!!",
            user,
         });
      } catch (error) {
         res.status(400).json({ message: error.message });
      }
   }
}

export default AuthController;
