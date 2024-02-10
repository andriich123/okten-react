import { ILaunch } from "../../types/Launch";
import { axiosService } from "./axiosService";

export const launchesService = {
  getLaunches: () => axiosService.get<ILaunch[]>("/launches"),
};
