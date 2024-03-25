import Auth from "../models/auth";
class AuthController {
   async registerAuth(req, res) {
      try {
         //  const user = await Auth.create(req.body);
         //  if (user) {
         //     return res.status(200).json({ message: "get done", user });
         //  }
         //  return res.status(404).json({ message: "not found" });
         // check email
         const { email } = req.body;
         const emailExist = await User.findOne({ email });
         if (emailExist) {
            console.log(emailExist);
            return res.status(400).json({ message: "Email Existed" });
         }
      } catch (error) {
         res.status(400).json({ message: "get false" });
      }
   }
   //    async loginAuth(req, res) {}
}

export default AuthController;
