import Joi from "joi";
import { IFormData } from "../components/CarForm";

const formSchema = Joi.object<IFormData>({
  brand: Joi.string()
    .pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
    .required()
    .messages({
      "string.base": "Must be a number",
      "string.empty": "Required",
      "string.pattern.base": "Must be only letters, 1-20 characters",
    }),
  price: Joi.number().min(0).max(1000000).required().messages({
    "number.empty": "Required",
    "number.base": "Must be a number",
    "number.min": "Must be greater than {#limit}",
    "number.max": "Must be less than {#limit}",
  }),
  year: Joi.number().required().messages({
    "number.empty": "Required",
    "number.base": "Must be a number",
  }),
});

export { formSchema };
