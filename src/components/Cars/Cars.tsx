import { FC, useEffect, useRef, useState } from "react";
import { Car } from "../Car/";
import css from "./Cars.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { carsActions } from "../../store";
import { carsService } from "../../services/carsService";
import { ICar } from "../../types/Car";
import { Modal } from "../Modal/Modal";
import { CarForm } from "../CarForm";
import { DeleteSubmit } from "../CarForm/DeleteSubmit";

interface IProps {}

const Cars: FC<IProps> = () => {
  const { cars, trigger } = useAppSelector((state) => state.cars);
  const dispatch = useAppDispatch();

  const [activeModal, setActiveModal] = useState<
    "edit" | "delete" | "create" | null
  >(null);
  const activeCar = useRef<ICar | null>(null);

  useEffect(() => {
    carsService
      .getAll()
      .then(({ data }) => dispatch(carsActions.setCars(data)));
  }, [trigger, dispatch]);

  const handleEditCar = (car: ICar) => {
    setActiveModal("edit");
    activeCar.current = car;
  };

  const handleDeleteCar = (car: ICar) => {
    setActiveModal("delete");
    activeCar.current = car;
  };

  const handleCreateCar = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    activeCar.current = null;
  };

  return (
    <>
      <div className={css.newCarWrapper}>
        <button onClick={handleCreateCar}>Create a new car</button>
      </div>

      <div className={css.carsContainer}>
        {cars.map((car) => (
          <div key={car.id} className={css.carWrapper}>
            <Car car={car} onDelete={handleDeleteCar} onEdit={handleEditCar} />
          </div>
        ))}

        <Modal isOpen={activeModal === "create"} onClose={handleCloseModal}>
          <CarForm onSubmit={handleCloseModal} onCancel={handleCloseModal} />
        </Modal>

        <Modal
          isOpen={!!activeCar.current && activeModal === "edit"}
          onClose={handleCloseModal}
        >
          <CarForm
            car={activeCar.current ?? undefined}
            onSubmit={handleCloseModal}
            onCancel={handleCloseModal}
          />
        </Modal>

        {activeCar.current && (
          <DeleteSubmit
            car={activeCar.current}
            isOpen={activeModal === "delete"}
            onCancel={handleCloseModal}
            onSubmit={handleCloseModal}
          />
        )}
      </div>
    </>
  );
};

export { Cars };
