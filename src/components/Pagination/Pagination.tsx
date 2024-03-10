import { FC } from "react";
import css from "./Pagination.module.css";

interface IProps {
  next: boolean | null;
  prev: boolean | null;
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

export { Pagination };
