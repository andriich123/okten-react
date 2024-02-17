import { useEffect, useState } from "react";
import { ITodo } from "../../interfaces/todos";
import { todosService } from "../../services/todosService";
import Todo from "./Todo";
import css from "./Todos.module.css";

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const fetchTodos = async () => {
    const { data: todos } = await todosService.getAll();
    setTodos(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className={css.container}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
