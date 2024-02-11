import { FC } from "react";
import { ICar } from "../../types/Car";

interface IProps {
  car: ICar;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const Car: FC<IProps> = ({ car, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(car.id);
  };

  const handleEdit = () => {
    onEdit(car.id);
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

export default Car;
