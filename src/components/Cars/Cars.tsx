import { FC } from "react";
import { ICar } from "../../types/Car";
import Car from "../Car/Car";
import css from "./Cars.module.css";

interface IProps {
  cars: ICar[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const Cars: FC<IProps> = ({ cars, onDelete, onEdit }) => {
  return (
    <div className={css.carsContainer}>
      {cars.map((car) => (
        <div key={car.id} className={css.carWrapper}>
          <Car car={car} onDelete={onDelete} onEdit={onEdit} />
        </div>
      ))}
    </div>
  );
};

export default Cars;
