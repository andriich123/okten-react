import { FC, useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";

import css from "./CarForm.module.css";
import { ICar } from "../../types/Car";
import { carsService } from "../../services/carsService";
import { formSchema } from "../../validators/carsValidators";
import { useAppDispatch } from "../../hooks/store";
import { carsActions } from "../../store";

export interface IFormData {
  brand: string;
  price: number;
  year: number;
}

interface IProps {
  car?: ICar;
  onSubmit: () => void;
  onCancel: () => void;
}

const CarForm: FC<IProps> = ({ car, onSubmit, onCancel }) => {
  const dispatch = useAppDispatch();

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
    if (car) {
      setValue("brand", car.brand, { shouldValidate: true });
      setValue("price", car.price, { shouldValidate: true });
      setValue("year", car.year, { shouldValidate: true });
    }
  }, [car]);

  const cancelSubmit = () => {
    reset();
    onCancel();
  };

  const onSuccessSubmit = async (data: IFormData) => {
    if (car) {
      await carsService.updateById(car.id, data);
      dispatch(carsActions.updateById({ ...data, id: car.id }));
    } else {
      await carsService.create(data);
      dispatch(carsActions.create(data));
    }

    onSubmit();
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
        {car ? "Update" : "Create"}
      </button>
      <button type="button" onClick={cancelSubmit}>
        Cancel
      </button>
    </form>
  );
};

export { CarForm };
