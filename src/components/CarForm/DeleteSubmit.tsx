import { FC } from "react";
import { Modal } from "../Modal/Modal";
import { ICar } from "../../types/Car";
import { useAppDispatch } from "../../hooks/store";
import { carsActions } from "../../store";
import { carsService } from "../../services/carsService";

interface IProps {
  car: ICar;
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: () => void;
}

const DeleteSubmit: FC<IProps> = ({ car, isOpen, onCancel, onSubmit }) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    onCancel();
  };

  const handleSubmit = async () => {
    await carsService.deleteById(car.id);
    dispatch(carsActions.deleteById(car.id));
    onSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h2>Are you sure? </h2>
      <button onClick={handleClose}>Cancel</button>
      <button onClick={handleSubmit}>Submit</button>
    </Modal>
  );
};

export { DeleteSubmit };
