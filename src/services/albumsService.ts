import { urls } from "../constants/urls";
import { IAlbum } from "../interfaces/albums";
import { apiService } from "./apiService";

const albumsService = {
  getAll: () => apiService.get<IAlbum[]>(urls.albums.base),
};

export { albumsService };
