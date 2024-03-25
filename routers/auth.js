import router from "express";
import AuthController from "../controllers/auth";

const AuthRouter = router();
const authController = new AuthController();

AuthRouter.post("/register", authController.registerAuth);
// AuthRouter.delete("/login", authController.loginAuth);

export default AuthRouter;
