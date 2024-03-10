import { FC } from "react";
import { ICar } from "../../types/Car";

interface IProps {
  car: ICar;
  onDelete: (car: ICar) => void;
  onEdit: (car: ICar) => void;
}

const Car: FC<IProps> = ({ car, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(car);
  };

  const handleEdit = () => {
    onEdit(car);
  };

  return (
    <div>
      <p> ID: {car.id} </p>
      <p> Brand: {car.brand} </p>
      <p> Price: {car.price} </p>
      <p>Year: {car.year} </p>
      <button type="button" onClick={handleEdit}>
        Edit
      </button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export { Car };
