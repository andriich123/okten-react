import { urls } from "../constants/urls";
import { IEpisode } from "../interfaces/episodes";
import { IPaginated } from "../interfaces/paginated";
import { apiService } from "./apiService";

const episodesService = {
  getAll: (params: { page?: number }) =>
    apiService.get<IPaginated<IEpisode>>(urls.episodes.base, { params }),
  getById: (id: number) =>
    apiService.get<IEpisode>(`${urls.episodes.base}/${id}`),
};

export { episodesService };
