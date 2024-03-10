import { ICar } from "../types/Car";
import { urls } from "../constants/urls";
import { apiService } from "./apiService";

const carsService = {
  getAll: () => apiService.get<ICar[]>(urls.cars.base),
  getById: (id: number) => apiService.get<ICar>(urls.cars.byId(id)),
  updateById: (id: number, data: Omit<ICar, "id">) =>
    apiService.put(urls.cars.byId(id), data),
  deleteById: (id: number) => apiService.delete(urls.cars.byId(id)),
  create: (data: Omit<ICar, "id">) => apiService.post(urls.cars.base, data),
};

export { carsService };
