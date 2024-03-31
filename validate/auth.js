import Joi from "joi";

const registerValidate = Joi.object({
   username: Joi.string().required().min(1).max(10).messages({
      "string.empty": "username Không được để trống",
      "any.required": "username là bắt buộc",
      //   "string.min": "username phải có ít nhất {#litmit} ký tự",
      //   "string.max": "username phải có ít hơn {#litmit} ký tự",
   }),
   email: Joi.string().email(),
   password: Joi.string().min(1).max(10).required(),
   //    confirmPassword: Joi.string().required().valid(Joi.ref("password")),
}).with("password", "repeat_password");
const loginValidate = Joi.object({
   email: Joi.string().required().email(),
   password: Joi.string().required().min(1).max(10),
});

export { registerValidate, loginValidate };
