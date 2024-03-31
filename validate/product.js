import Joi from "joi";

const productValidate = Joi.object({
   title: Joi.string().required(),
   image: Joi.string(),
   rate: Joi.number().required().min(1).max(5),
});

export { productValidate };
