import { FC } from "react";
import css from "./Pagination.module.css";

interface IProps {
  next: number | null;
  prev: number | null;
  onNext: () => void;
  onPrev: () => void;
}

const Pagination: FC<IProps> = ({ next, onNext, prev, onPrev }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={onPrev} disabled={!prev}>
        Prev
      </button>
      <button className={css.button} onClick={onNext} disabled={!next}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
