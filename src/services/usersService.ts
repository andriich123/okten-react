import { urls } from "../constants/urls";
import { IUser } from "../interfaces/users";
import { apiService } from "./apiService";

const usersService = {
  getAll: () => apiService.get<IUser[]>(urls.users.base),
  getById: (id: number) => apiService.get<IUser>(urls.users.getById(id)),
};

export { usersService };
