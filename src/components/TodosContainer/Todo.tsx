import { FC } from "react";
import { ITodo } from "../../interfaces/todos";
import css from "./Todo.module.css";

interface Props {
  todo: ITodo;
}

const Todo: FC<Props> = ({ todo }) => {
  const { id, completed, title, userId } = todo;

  return (
    <div className={css.container}>
      <p>id: {id}</p>
      <p>userId: {userId}</p>
      <p>completed: {completed ? "✅" : "❌"}</p>
      <p>title: {title}</p>
    </div>
  );
};

export default Todo;
