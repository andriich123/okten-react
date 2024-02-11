import { Dispatch, FC, useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import css from "./CarForm.module.css";
import { ICar } from "../../types/Car";
import { carsService } from "../../services/linkpc/carsService";

interface IFormData {
  brand: string;
  price: number;
  year: number;
}

const formSchema = Joi.object({
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
  year: Joi.number().min(1990).max(2024).required().messages({
    "number.empty": "Required",
    "number.base": "Must be a number",
    "number.min": "Must be greater than {#limit}",
    "number.max": "Must be less than {#limit}",
  }),
});

interface IProps {
  carForUpdate: ICar | null;
  setCarForUpdate: Dispatch<React.SetStateAction<ICar | null>>;
  setTrigger: Dispatch<React.SetStateAction<boolean>>;
}

const CarForm: FC<IProps> = ({ setTrigger, carForUpdate, setCarForUpdate }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
    reset,
  } = useForm<IFormData>({
    resolver: joiResolver(formSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (carForUpdate) {
      setValue("brand", carForUpdate.brand, { shouldValidate: true });
      setValue("price", carForUpdate.price, { shouldValidate: true });
      setValue("year", carForUpdate.year, { shouldValidate: true });
    }
  }, [carForUpdate]);

  const cancelSubmit = () => {
    reset();
    setCarForUpdate(null);
  };

  const onSuccessSubmit = async (data: IFormData) => {
    if (carForUpdate) {
      await carsService.updateById(carForUpdate.id, data);
    } else {
      await carsService.create(data);
    }

    setTrigger((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit(onSuccessSubmit)} className={css.form}>
      <label htmlFor="brand" className={css.formField}>
        <span>
          Brand <span className={css.error}>{errors.brand?.message}</span>
        </span>
        <input id="brand" type="text" {...register("brand")} />
      </label>

      <label htmlFor="price" className={css.formField}>
        <span>
          Price <span className={css.error}>{errors.price?.message}</span>
        </span>
        <input id="price" type="text" {...register("price")} />
      </label>

      <label htmlFor="year" className={css.formField}>
        <span>
          Year <span className={css.error}>{errors.year?.message}</span>
        </span>
        <input id="year" type="text" {...register("year")} />
      </label>
      <button type="submit" disabled={!isValid}>
        {carForUpdate ? "Update" : "Create"}
      </button>
      <button type="button" onClick={cancelSubmit}>
        Cancel
      </button>
    </form>
  );
};

export default CarForm;
