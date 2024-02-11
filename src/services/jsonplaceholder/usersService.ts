import { urls } from "../../constants/urls/jsonplaceholder";
import { IUser } from "../../types/User";
import { apiService } from "./apiService";

const usersService = {
  getAll: () => apiService.get<IUser[]>(urls.users.base),
  create: (user: Omit<IUser, "id">) =>
    apiService.post<IUser>(urls.users.base, user),
};

export { usersService };
