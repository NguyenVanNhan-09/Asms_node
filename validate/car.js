import Joi from "joi";

const carsValidate = Joi.object({
   title: Joi.string().required(),
   rate: Joi.number().required().min(1).max(5),
   description: Joi.string(),
   year: Joi.number(),
   active: Joi.boolean(),
   categories: Joi.string(),
});

const updateCarsValidation = Joi.object({
   title: Joi.string(),
   rate: Joi.number().min(1).max(5),
   description: Joi.string(),
   year: Joi.number(),
   active: Joi.boolean(),
   categories: Joi.string(),
});
export { carsValidate, updateCarsValidation };
