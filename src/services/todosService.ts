import { urls } from "../constants/urls";
import { ITodo } from "../interfaces/todos";
import { apiService } from "./apiService";

const todosService = {
  getAll: () => apiService.get<ITodo[]>(urls.todos.base),
};

export { todosService };
