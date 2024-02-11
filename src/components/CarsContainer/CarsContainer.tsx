import { FC, useEffect, useState } from "react";
import { carsService } from "../../services/linkpc/carsService";
import Cars from "../Cars/Cars";
import CarForm from "../CarForm/CarForm";
import { ICar } from "../../types/Car";
import css from "./CarsContainer.module.css";

const CarsContainer: FC = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [carForUpdate, setCarForUpdate] = useState<ICar | null>(null);
  const [trigger, setTrigger] = useState<boolean>(false);

  const fetchCars = async () => {
    const { data: cars } = await carsService.getAll();
    setCars(cars);
  };

  useEffect(() => {
    fetchCars();
  }, [trigger]);

  const handleOnEdit = async (id: number) => {
    const { data: car } = await carsService.getById(id);
    setCarForUpdate(car);
  };

  const handleOnDelete = async (id: number) => {
    await carsService.deleteById(id);
    fetchCars();
  };

  return (
    <div>
      <CarForm
        setTrigger={setTrigger}
        carForUpdate={carForUpdate}
        setCarForUpdate={setCarForUpdate}
      />
      <div className={css.carsWrapper}>
        <Cars cars={cars} onEdit={handleOnEdit} onDelete={handleOnDelete} />
      </div>
    </div>
  );
};

export default CarsContainer;
